import { roundMoney } from "./money";
import type { DashboardPayload, DashboardRow, Month, Settlement } from "./types";

export function dashboardRow(params: {
  operacao: string;
  ano: number;
  mes: Month;
  tpvF3?: number;
  tpvF4?: number;
  tpvF5?: number;
  tpvF6?: number;
  tpvF7?: number;
  f3?: number;
  f4?: number;
  f5?: number;
  f6?: number;
  f7?: number;
}): DashboardRow {
  const tpvF3 = roundMoney(params.tpvF3 || 0);
  const tpvF4 = roundMoney(params.tpvF4 || 0);
  const tpvF5 = roundMoney(params.tpvF5 || 0);
  const tpvF6 = roundMoney(params.tpvF6 || 0);
  const tpvF7 = roundMoney(params.tpvF7 || 0);
  const f3 = roundMoney(params.f3 || 0);
  const f4 = roundMoney(params.f4 || 0);
  const f5 = roundMoney(params.f5 || 0);
  const f6 = roundMoney(params.f6 || 0);
  const f7 = roundMoney(params.f7 || 0);
  const tpv = roundMoney(tpvF3 + tpvF4 + tpvF5 + tpvF6 + tpvF7);
  const comissao = roundMoney(f3 + f4 + f5 + f6 + f7);
  return {
    operacao: params.operacao,
    ano: params.ano,
    mes: params.mes,
    tpv,
    tpvF3,
    tpvF4,
    tpvF5,
    tpvF6,
    tpvF7,
    f3,
    f4,
    f5,
    f6,
    f7,
    comissao,
    take: tpv ? (comissao / tpv) * 100 : 0,
  };
}

export function toDashboardPayload(settlement: Settlement): DashboardPayload {
  return {
    source: "confrapag-simulador",
    version: 1,
    generatedAt: new Date().toISOString(),
    product: settlement.productId,
    operation: settlement.operation,
    settlement,
    rows: [settlement.dashboardRow],
  };
}

export function parseDashboardPayload(raw: unknown): DashboardRow[] {
  if (Array.isArray(raw)) return raw.filter(isDashboardRow);
  if (!raw || typeof raw !== "object") return [];
  const data = raw as { rows?: unknown; dashboard?: { rows?: unknown } };
  const rows = data.rows || data.dashboard?.rows;
  return Array.isArray(rows) ? rows.filter(isDashboardRow) : [];
}

function isDashboardRow(value: unknown): value is DashboardRow {
  if (!value || typeof value !== "object") return false;
  const row = value as DashboardRow;
  return typeof row.operacao === "string" && typeof row.tpv === "number";
}
