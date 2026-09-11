import { EVENTOS_CATALOG, SUBACCOUNTS, atOperation, operationLabel } from "../contracts";
import { dashboardRow } from "../dashboard";
import { addCents, fromCents, toCents } from "../money";
import { pipelineFor } from "../pipeline";
import type { EventosInput, EventosSaleLine, LedgerLine, Settlement } from "../types";

function resolveLine(line: EventosSaleLine): EventosSaleLine {
  const catalog = EVENTOS_CATALOG[line.eventId] || EVENTOS_CATALOG.livre;
  return {
    eventId: line.eventId || "livre",
    name: line.name || catalog.name,
    quantity: Math.max(0, Number(line.quantity) || 0),
    salePrice: Number.isFinite(Number(line.salePrice)) ? Number(line.salePrice) : catalog.salePrice,
    purchasePrice: Number.isFinite(Number(line.purchasePrice)) ? Number(line.purchasePrice) : catalog.purchasePrice,
    unitCost: Number.isFinite(Number(line.unitCost)) ? Number(line.unitCost) : catalog.unitCost,
  };
}

export function simulateEventos(input: EventosInput): Settlement {
  const operation = operationLabel(input.operation);
  const events = (input.events || []).map(resolveLine);
  const tickets = events.reduce((total, event) => total + event.quantity, 0);
  let sale = 0;
  let purchase = 0;
  let unitCost = 0;
  const eventLines: LedgerLine[] = [];

  for (const event of events) {
    const revenue = toCents(event.quantity * event.salePrice);
    const buy = toCents(event.quantity * event.purchasePrice);
    const cost = toCents(event.quantity * event.unitCost);
    sale = addCents(sale, revenue);
    purchase = addCents(purchase, buy);
    unitCost = addCents(unitCost, cost);
    eventLines.push({
      code: event.eventId.toUpperCase(),
      label: `${event.name} · ${event.quantity} ingressos`,
      amount: fromCents(revenue),
      role: "revenue",
    });
  }

  const documentedCost = input.costDocumented ? addCents(purchase, unitCost) : 0;
  const profit = Math.max(sale - documentedCost, 0);
  const names = events.map((event) => event.name).filter(Boolean);
  const summary = names.length ? names.join(" · ") : "Catálogo do Confra Eventos";

  const notes: string[] = [
    "O Confra Eventos gere o próprio catálogo: cada evento vendido entra na subconta dele, sem percentual sobre o TPV dos outros produtos.",
    "Este modelo não tem split 70/30. O lucro permanece 100% no Confra Eventos.",
    `${events.length} evento(s) · ${tickets} ingresso(s) no período.`,
    `Liquidação na subconta ${SUBACCOUNTS.eventos}.`,
  ];
  if (!input.costDocumented && addCents(purchase, unitCost) > 0) {
    notes.push("Compra e custo dos eventos ignorados: não há contrato ou aditivo na central de custos.");
  }

  const lines: LedgerLine[] = [
    { code: "ING", label: `Ingressos no período (${tickets})`, amount: fromCents(sale), role: "volume" },
    ...eventLines,
    { code: "COMPRA", label: "Compra de produção e estrutura", amount: fromCents(input.costDocumented ? purchase : 0), role: "cost" },
    { code: "CUSTO", label: "Custo operacional dos eventos", amount: fromCents(input.costDocumented ? unitCost : 0), role: "cost" },
    { code: "LUCRO", label: "Lucro do Confra Eventos (sem split)", amount: fromCents(profit), role: "profit" },
  ];

  return {
    productId: "eventos",
    productName: "Confra Eventos",
    subaccount: SUBACCOUNTS.eventos,
    operation,
    year: input.year,
    month: input.month,
    serviceId: events[0]?.eventId,
    serviceName: summary,
    amount: fromCents(sale),
    revenue: fromCents(sale),
    cost: fromCents(documentedCost),
    pulse: 0,
    retention: 0,
    profit: fromCents(profit),
    split: { network70: 0, operation30: 0 },
    takeRate: sale ? (profit / sale) * 100 : 0,
    lines,
    notes,
    pipeline: pipelineFor([
      `Ingressos capturados pelo Confra Eventos ${atOperation(operation)}`,
      "Cada evento vendido é classificado no catálogo e na subconta própria",
      `Venda ${fromCents(sale).toFixed(2)} − compra/custo ${fromCents(documentedCost).toFixed(2)}`,
      `Lucro ${fromCents(profit).toFixed(2)} permanece 100% no Confra Eventos, sem split 70/30`,
      "Liquidação na conta concentradora do MT",
    ]),
    dashboardRow: dashboardRow({
      operacao: operation,
      ano: input.year,
      mes: input.month,
      tpvF3: fromCents(sale),
      f3: 0,
    }),
  };
}
