import { dashboardRow } from "../dashboard";
import { fromCents, split70_30, toCents } from "../money";
import { pipelineFor } from "../pipeline";
import { atOperation, operationLabel, supplierLabel } from "../contracts";
import type { EngineProductId, LedgerLine, Settlement, SimBase, SupplierFilter } from "../types";

export interface MarginService {
  name: string;
  subaccount: string;
}

export function simulateMargin(params: {
  productId: Extract<EngineProductId, "hub" | "system">;
  productName: string;
  rootSubaccount: string;
  service: MarginService;
  serviceId: string;
  supplier?: SupplierFilter;
  quantity: number;
  salePrice: number;
  purchasePrice: number;
  unitCost: number;
} & SimBase): Settlement {
  const supplier = params.supplier || "F3";
  const label = supplierLabel(supplier);
  const operation = operationLabel(params.operation);
  const quantity = Math.max(0, Number(params.quantity) || 0);
  const sale = toCents(quantity * (Number(params.salePrice) || 0));
  const purchase = toCents(quantity * (Number(params.purchasePrice) || 0));
  const unitCost = toCents(quantity * (Number(params.unitCost) || 0));
  const documentedCost = params.costDocumented ? purchase + unitCost : 0;
  const ignored = !params.costDocumented && purchase + unitCost > 0;
  const profit = Math.max(sale - documentedCost, 0);
  const split = split70_30(profit);

  const notes: string[] = [
    `${params.service.name} liquida na subconta ${params.service.subaccount}.`,
    `Custo classificado em ${label}.`,
    "Comissionamento considera preço de venda, preço de compra e custo.",
    "Conciliação entre valor recebido e comissão paga à rede licenciada.",
  ];
  if (ignored) {
    notes.push("Compra e custo ignorados: não há contrato ou aditivo na central de custos.");
  }

  const lines: LedgerLine[] = [
    { code: "VENDA", label: "Preço de venda", amount: fromCents(sale), role: "revenue" },
    { code: "COMPRA", label: `Preço de compra · ${label}`, amount: fromCents(params.costDocumented ? purchase : 0), role: "cost" },
    { code: "CUSTO", label: `Custo operacional · ${label}`, amount: fromCents(params.costDocumented ? unitCost : 0), role: "cost" },
    { code: "LUCRO", label: "Venda − compra − custo", amount: fromCents(profit), role: "profit" },
    { code: "REDE", label: "Split 70% rede licenciada", amount: fromCents(split.network70), role: "split" },
    { code: "OP", label: "Split 30% operação", amount: fromCents(split.operation30), role: "split" },
  ];

  return {
    productId: params.productId,
    productName: params.productName,
    subaccount: `${params.rootSubaccount} · ${params.service.subaccount}`,
    operation,
    year: params.year,
    month: params.month,
    supplier,
    serviceId: params.serviceId,
    serviceName: params.service.name,
    amount: fromCents(sale),
    revenue: fromCents(sale),
    cost: fromCents(documentedCost),
    pulse: 0,
    retention: 0,
    profit: fromCents(profit),
    split: { network70: fromCents(split.network70), operation30: fromCents(split.operation30) },
    takeRate: sale ? (split.operation30 / sale) * 100 : 0,
    lines,
    notes,
    pipeline: pipelineFor([
      `${params.service.name} contratado pelo EC ${atOperation(operation)} · ${label}`,
      `Serviço entra na subconta ${params.service.subaccount}`,
      `Venda ${fromCents(sale).toFixed(2)} − compra/custo ${fromCents(documentedCost).toFixed(2)}`,
      `Lucro ${fromCents(profit).toFixed(2)} em 70% rede e 30% operação`,
      "Liquidação na conta concentradora do MT",
    ]),
    dashboardRow: dashboardRow({
      operacao: operation,
      ano: params.year,
      mes: params.month,
      tpvF3: fromCents(sale),
      f3: fromCents(split.operation30),
    }),
  };
}
