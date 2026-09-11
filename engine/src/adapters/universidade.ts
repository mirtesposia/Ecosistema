import { SUBACCOUNTS, UNIVERSIDADE_COURSES, atOperation, operationLabel } from "../contracts";
import { dashboardRow } from "../dashboard";
import { addCents, fromCents, toCents } from "../money";
import { pipelineFor } from "../pipeline";
import type { LedgerLine, Settlement, UniversidadeInput, UniversidadeSaleLine } from "../types";

const AUDIENCE_LABEL = {
  cliente: "rede de licenciados",
  colaborador: "colaborador",
} as const;

function resolveLine(line: UniversidadeSaleLine): UniversidadeSaleLine {
  const catalog = UNIVERSIDADE_COURSES[line.courseId] || UNIVERSIDADE_COURSES.inicial;
  return {
    courseId: line.courseId || "inicial",
    name: line.name || catalog.name,
    audience: line.audience || catalog.audience,
    quantity: Math.max(0, Number(line.quantity) || 0),
    salePrice: Number.isFinite(Number(line.salePrice)) ? Number(line.salePrice) : catalog.salePrice,
    purchasePrice: Number.isFinite(Number(line.purchasePrice)) ? Number(line.purchasePrice) : catalog.purchasePrice,
    unitCost: Number.isFinite(Number(line.unitCost)) ? Number(line.unitCost) : catalog.unitCost,
  };
}

export function simulateUniversidade(input: UniversidadeInput): Settlement {
  const operation = operationLabel(input.operation);
  const courses = (input.courses || []).map(resolveLine);
  const enrollments = courses.reduce((total, course) => total + course.quantity, 0);
  let sale = 0;
  let purchase = 0;
  let unitCost = 0;
  const courseLines: LedgerLine[] = [];

  for (const course of courses) {
    const revenue = toCents(course.quantity * course.salePrice);
    const buy = toCents(course.quantity * course.purchasePrice);
    const cost = toCents(course.quantity * course.unitCost);
    sale = addCents(sale, revenue);
    purchase = addCents(purchase, buy);
    unitCost = addCents(unitCost, cost);
    courseLines.push({
      code: course.courseId.toUpperCase(),
      label: `${course.name} · ${course.quantity} matrículas · ${AUDIENCE_LABEL[course.audience]}`,
      amount: fromCents(revenue),
      role: "revenue",
    });
  }

  const documentedCost = input.costDocumented ? addCents(purchase, unitCost) : 0;
  const profit = Math.max(sale - documentedCost, 0);
  const names = courses.map((course) => course.name).filter(Boolean);
  const summary = names.length ? names.join(" · ") : "Catálogo da Universidade";

  const notes: string[] = [
    "A Universidade Confrapag gere o próprio catálogo: cada curso vendido entra na subconta dela, sem percentual sobre o TPV dos outros produtos.",
    "Este modelo não tem split 70/30. O lucro permanece 100% na Universidade.",
    `${courses.length} curso(s) · ${enrollments} matrícula(s) no período.`,
    `Liquidação na subconta ${SUBACCOUNTS.universidade}.`,
  ];
  if (!input.costDocumented && addCents(purchase, unitCost) > 0) {
    notes.push("Compra e custo dos cursos ignorados: não há contrato ou aditivo na central de custos.");
  }

  const lines: LedgerLine[] = [
    { code: "MAT", label: `Matrículas no período (${enrollments})`, amount: fromCents(sale), role: "volume" },
    ...courseLines,
    { code: "COMPRA", label: "Compra de conteúdo e plataforma", amount: fromCents(input.costDocumented ? purchase : 0), role: "cost" },
    { code: "CUSTO", label: "Custo operacional dos cursos", amount: fromCents(input.costDocumented ? unitCost : 0), role: "cost" },
    { code: "LUCRO", label: "Lucro da Universidade (sem split)", amount: fromCents(profit), role: "profit" },
  ];

  return {
    productId: "universidade",
    productName: "Universidade Confrapag",
    subaccount: SUBACCOUNTS.universidade,
    operation,
    year: input.year,
    month: input.month,
    serviceId: courses[0]?.courseId,
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
      `Matrículas capturadas pela Universidade ${atOperation(operation)}`,
      "Cada curso vendido é classificado no catálogo e na subconta própria",
      `Venda ${fromCents(sale).toFixed(2)} − compra/custo ${fromCents(documentedCost).toFixed(2)}`,
      `Lucro ${fromCents(profit).toFixed(2)} permanece 100% na Universidade, sem split 70/30`,
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
