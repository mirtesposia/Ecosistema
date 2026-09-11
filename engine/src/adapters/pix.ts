import { PIX_CONTRACT, SUBACCOUNTS, atOperation, operationLabel, supplierLabel } from "../contracts";
import { dashboardRow } from "../dashboard";
import { addCents, fromCents, percentOf, split70_30, toCents } from "../money";
import { pipelineFor } from "../pipeline";
import type { LedgerLine, PixInput, Settlement } from "../types";

export function simulatePix(input: PixInput): Settlement {
  const quantity = Math.max(0, Math.round(Number(input.quantity) || 0));
  const ticket = Math.max(0, Number(input.ticket) || 0);
  const sellPrice = Number(input.sellPrice) || PIX_CONTRACT.sellPrice;
  const buyPrice = Number(input.buyPrice) || PIX_CONTRACT.buyPrice;
  const pulseRate = Number(input.pulseRate) || PIX_CONTRACT.pulseRate;
  const supplier = input.supplier || "F3";
  const label = supplierLabel(supplier);
  const operation = operationLabel(input.operation);

  const volume = toCents(quantity * ticket);
  const revenue = toCents(quantity * sellPrice);
  const buy = toCents(quantity * buyPrice);
  const pulse = percentOf(revenue, pulseRate);
  const documentedBuy = input.costDocumented ? buy : 0;
  const cost = addCents(documentedBuy, pulse);
  const profit = Math.max(revenue - cost, 0);
  const split = split70_30(profit);

  const notes: string[] = [
    `${label}: compra R$ ${buyPrice.toFixed(2)} · venda às operações R$ ${sellPrice.toFixed(2)} por PIX.`,
    `${PIX_CONTRACT.pulseLabel}.`,
    "Custo só entra com contrato ou aditivo na central de custos (F3 a F7).",
    "Liquidação no CNPJ e subconta do Confra PIX.",
  ];
  if (!input.costDocumented) {
    notes.push(`Custo ${label} ignorado: não há contrato ou aditivo na central de custos.`);
  }

  const lines: LedgerLine[] = [
    { code: "TPV", label: `Volume (${quantity} PIX × ticket)`, amount: fromCents(volume), role: "volume" },
    { code: "VENDA", label: "Tarifa cobrada das operações", amount: fromCents(revenue), role: "revenue" },
    { code: "COMPRA", label: `Custo ${label}`, amount: fromCents(documentedBuy), role: "cost" },
    { code: "PULSE", label: PIX_CONTRACT.pulseLabel, amount: fromCents(pulse), role: "fee" },
    { code: "LUCRO", label: "Venda − compra − Pulse", amount: fromCents(profit), role: "profit" },
    { code: "REDE", label: "Split 70% rede licenciada", amount: fromCents(split.network70), role: "split" },
    { code: "OP", label: "Split 30% operação", amount: fromCents(split.operation30), role: "split" },
  ];

  return {
    productId: "pix",
    productName: "Confra PIX",
    subaccount: SUBACCOUNTS.pix,
    operation,
    year: input.year,
    month: input.month,
    supplier,
    amount: fromCents(volume),
    revenue: fromCents(revenue),
    cost: fromCents(cost),
    pulse: fromCents(pulse),
    retention: 0,
    profit: fromCents(profit),
    split: { network70: fromCents(split.network70), operation30: fromCents(split.operation30) },
    takeRate: volume ? (split.operation30 / volume) * 100 : 0,
    lines,
    notes,
    pipeline: pipelineFor([
      `Captura de ${quantity} PIX ${atOperation(operation)} · ${label}`,
      "Apuração Confra PIX Online · CNPJ e subconta próprios",
      `Receita ${fromCents(revenue).toFixed(2)} · ${label} ${fromCents(documentedBuy).toFixed(2)} · Pulse ${fromCents(pulse).toFixed(2)}`,
      `Distribuição 70/30 sobre lucro de ${fromCents(profit).toFixed(2)}`,
      `JSON do dashboard e liquidação na conta concentradora do MT`,
    ]),
    dashboardRow: dashboardRow({
      operacao: operation,
      ano: input.year,
      mes: input.month,
      tpvF3: fromCents(volume),
      f3: fromCents(split.operation30),
    }),
  };
}
