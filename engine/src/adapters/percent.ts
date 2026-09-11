import { PERCENT_PRODUCTS, atOperation, operationLabel } from "../contracts";
import { dashboardRow } from "../dashboard";
import { fromCents, percentOf, split70_30, toCents } from "../money";
import { pipelineFor } from "../pipeline";
import type { LedgerLine, PercentInput, Settlement } from "../types";

export function simulatePercent(input: PercentInput): Settlement {
  const meta = PERCENT_PRODUCTS[input.productId];
  const operation = operationLabel(input.operation);
  const sales = toCents(input.sales);
  const rate = Number(input.rate) || meta.rate;
  const revenue = percentOf(sales, rate);
  const profit = Math.max(revenue, 0);
  const split = split70_30(profit);

  const notes: string[] = [
    `${meta.name}: receita = percentual sobre as vendas da base.`,
    `Percentual aplicado: ${(rate * 100).toFixed(2)}%.`,
    `Liquidação na subconta ${meta.subaccount}.`,
  ];

  const lines: LedgerLine[] = [
    { code: "VENDAS", label: "Vendas da base", amount: fromCents(sales), role: "volume" },
    { code: "PERC", label: `Percentual ${(rate * 100).toFixed(2)}%`, amount: fromCents(revenue), role: "revenue" },
    { code: "LUCRO", label: "Receita apurada", amount: fromCents(profit), role: "profit" },
    { code: "REDE", label: "Split 70% rede licenciada", amount: fromCents(split.network70), role: "split" },
    { code: "OP", label: "Split 30% operação", amount: fromCents(split.operation30), role: "split" },
  ];

  return {
    productId: input.productId,
    productName: meta.name,
    subaccount: meta.subaccount,
    operation,
    year: input.year,
    month: input.month,
    amount: fromCents(sales),
    revenue: fromCents(revenue),
    cost: 0,
    pulse: 0,
    retention: 0,
    profit: fromCents(profit),
    split: { network70: fromCents(split.network70), operation30: fromCents(split.operation30) },
    takeRate: sales ? (revenue / sales) * 100 : 0,
    lines,
    notes,
    pipeline: pipelineFor([
      `Vendas da base ${atOperation(operation)} entram no ${meta.name}`,
      "Apuração do percentual sobre as vendas",
      `Receita ${fromCents(revenue).toFixed(2)} (${(rate * 100).toFixed(2)}% de ${fromCents(sales).toFixed(2)})`,
      `Lucro ${fromCents(profit).toFixed(2)} em 70% rede e 30% operação`,
      "Liquidação na conta concentradora do MT",
    ]),
    dashboardRow: dashboardRow({
      operacao: operation,
      ano: input.year,
      mes: input.month,
      tpvF3: fromCents(sales),
      f3: fromCents(split.operation30),
    }),
  };
}
