import { ALL_SUPPLIERS, PIX_SUPPLIERS } from "../types";
import { SUBACCOUNTS, TEF_CONTRACT, atOperation, operationLabel, supplierLabel } from "../contracts";
import { dashboardRow } from "../dashboard";
import { addCents, fromCents, percentOf, split70_30, toCents } from "../money";
import { pipelineFor } from "../pipeline";
import type { LedgerLine, PixSupplier, Settlement, TefInput } from "../types";

const TAKE: Record<PixSupplier, number> = {
  F3: TEF_CONTRACT.takeF3,
  F4: TEF_CONTRACT.takeF4,
  F5: TEF_CONTRACT.takeF5,
  F6: TEF_CONTRACT.takeF6,
  F7: TEF_CONTRACT.takeF7,
};

function bandTpv(input: TefInput, band: PixSupplier): number {
  if (band === "F3") return toCents(input.tpvF3);
  if (band === "F4") return toCents(input.tpvF4);
  if (band === "F5") return toCents(input.tpvF5);
  if (band === "F6") return toCents(input.tpvF6);
  return toCents(input.tpvF7);
}

function bandTake(input: TefInput, band: PixSupplier): number {
  if (band === "F3") return Number(input.takeF3) || TAKE.F3;
  if (band === "F4") return Number(input.takeF4) || TAKE.F4;
  if (band === "F5") return Number(input.takeF5) || TAKE.F5;
  if (band === "F6") return Number(input.takeF6) || TAKE.F6;
  return Number(input.takeF7) || TAKE.F7;
}

function activeBands(supplier: string): readonly PixSupplier[] {
  if (supplier === ALL_SUPPLIERS) return PIX_SUPPLIERS;
  return PIX_SUPPLIERS.includes(supplier as PixSupplier) ? [supplier as PixSupplier] : PIX_SUPPLIERS;
}

export function simulateTef(input: TefInput): Settlement {
  const supplier = input.supplier || ALL_SUPPLIERS;
  const label = supplierLabel(supplier);
  const operation = operationLabel(input.operation);
  const bands = activeBands(supplier);
  const tpvBy: Record<PixSupplier, number> = { F3: 0, F4: 0, F5: 0, F6: 0, F7: 0 };
  const feeBy: Record<PixSupplier, number> = { F3: 0, F4: 0, F5: 0, F6: 0, F7: 0 };

  for (const band of PIX_SUPPLIERS) {
    if (!bands.includes(band)) continue;
    tpvBy[band] = bandTpv(input, band);
    feeBy[band] = percentOf(tpvBy[band], bandTake(input, band));
  }

  const tpv = addCents(...PIX_SUPPLIERS.map((band) => tpvBy[band]));
  const fees = addCents(...PIX_SUPPLIERS.map((band) => feeBy[band]));
  const retentionRate = Number(input.retentionRate) || TEF_CONTRACT.retentionRate;
  const retention = percentOf(tpv, retentionRate);
  const documentedCost = input.costDocumented ? toCents(input.documentedCost) : 0;
  const profit = Math.max(retention - documentedCost, 0);
  const split = split70_30(profit);
  const shown = bands;

  const notes: string[] = [
    `Retenção de ${(retentionRate * 100).toFixed(2)}% por transação TEF.`,
    `Custo classificado em ${label}.`,
    "O valor da retenção precisa ir para a conta Confra TEF, senão o licenciado recebe em duplicidade.",
    supplier === ALL_SUPPLIERS
      ? "TPV e comissão por fornecedor F3 a F7."
      : `TPV e take apenas do ${label}.`,
  ];
  if (!input.costDocumented && (Number(input.documentedCost) || 0) > 0) {
    notes.push(`Custo ${label} ignorado: não há contrato ou aditivo.`);
  }

  const lines: LedgerLine[] = [
    {
      code: "TPV",
      label: supplier === ALL_SUPPLIERS ? "TPV total (todos os fornecedores)" : `TPV ${label}`,
      amount: fromCents(tpv),
      role: "volume",
    },
    ...shown.map((band) => ({
      code: band,
      label: `Comissão ${band}`,
      amount: fromCents(feeBy[band]),
      role: "revenue" as const,
    })),
    { code: "RET", label: `Retenção TEF ${(retentionRate * 100).toFixed(2)}% → conta Confra TEF`, amount: fromCents(retention), role: "fee" },
    { code: "CUSTO", label: `Custo documentado · ${label}`, amount: fromCents(documentedCost), role: "cost" },
    { code: "LUCRO", label: "Retenção − custo", amount: fromCents(profit), role: "profit" },
    { code: "REDE", label: "Split 70% rede licenciada", amount: fromCents(split.network70), role: "split" },
    { code: "OP", label: "Split 30% operação", amount: fromCents(split.operation30), role: "split" },
  ];

  return {
    productId: "tef",
    productName: "Confra TEF",
    subaccount: SUBACCOUNTS.tef,
    operation,
    year: input.year,
    month: input.month,
    supplier,
    amount: fromCents(tpv),
    revenue: fromCents(addCents(fees, retention)),
    cost: fromCents(documentedCost),
    pulse: 0,
    retention: fromCents(retention),
    profit: fromCents(profit),
    split: { network70: fromCents(split.network70), operation30: fromCents(split.operation30) },
    takeRate: tpv ? (fees / tpv) * 100 : 0,
    lines,
    notes,
    pipeline: pipelineFor([
      `Captura TEF ${atOperation(operation)} · ${label}`,
      supplier === ALL_SUPPLIERS ? "Apuração por fornecedor F3 a F7 e estabelecimento" : `Apuração do TPV ${label}`,
      `Comissão das faixas ${fromCents(fees).toFixed(2)} · retenção ${fromCents(retention).toFixed(2)}`,
      `Retenção líquida ${fromCents(profit).toFixed(2)} em 70/30, obrigatoriamente na conta Confra TEF`,
      "Linha no formato do dashboard (TPV e comissão por faixa)",
    ]),
    dashboardRow: dashboardRow({
      operacao: operation,
      ano: input.year,
      mes: input.month,
      tpvF3: fromCents(tpvBy.F3),
      tpvF4: fromCents(tpvBy.F4),
      tpvF5: fromCents(tpvBy.F5),
      tpvF6: fromCents(tpvBy.F6),
      tpvF7: fromCents(tpvBy.F7),
      f3: fromCents(feeBy.F3),
      f4: fromCents(feeBy.F4),
      f5: fromCents(feeBy.F5),
      f6: fromCents(feeBy.F6),
      f7: fromCents(feeBy.F7),
    }),
  };
}
