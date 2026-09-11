import type {
  EventosEventId,
  HubServiceId,
  PercentProductId,
  PixSupplier,
  SupplierFilter,
  SystemServiceId,
  UniversidadeAudience,
  UniversidadeCourseId,
} from "./types";
import { ALL_OPERATIONS, ALL_OPERATIONS_LABEL, ALL_SUPPLIERS, PIX_SUPPLIERS } from "./types";

export const PIX_CONTRACT = {
  sellPrice: 0.89,
  buyPrice: 0.29,
  pulseRate: 0.1,
  pulseLabel: "Pulse · 10% na central de tarifa",
} as const;

export const PIX_SUPPLIER_LABELS: Record<SupplierFilter, string> = {
  ALL: "Todos os fornecedores",
  F3: "Fornecedor F3",
  F4: "Fornecedor F4",
  F5: "Fornecedor F5",
  F6: "Fornecedor F6",
  F7: "Fornecedor F7",
};

export const TEF_BANDS = PIX_SUPPLIERS;

export const TEF_CONTRACT = {
  retentionRate: 0.0015,
  takeF3: 0.018,
  takeF4: 0.012,
  takeF5: 0.015,
  takeF6: 0.015,
  takeF7: 0.015,
} as const;

export function supplierLabel(id?: string): string {
  if (id === ALL_SUPPLIERS) return PIX_SUPPLIER_LABELS.ALL;
  if (id && PIX_SUPPLIER_LABELS[id as PixSupplier]) return PIX_SUPPLIER_LABELS[id as PixSupplier];
  return PIX_SUPPLIER_LABELS.F3;
}

export function operationLabel(value?: string): string {
  if (!value || value === ALL_OPERATIONS) return ALL_OPERATIONS_LABEL;
  return value;
}

export function atOperation(value?: string): string {
  return operationLabel(value) === ALL_OPERATIONS_LABEL
    ? "em todas as operações (consolidado)"
    : `na ${value}`;
}

export type ServiceQuote = { name: string; subaccount: string; salePrice: number; purchasePrice: number; unitCost: number };

export const HUB_SERVICES: Record<HubServiceId, ServiceQuote> = {
  cred: { name: "Confra Cred", subaccount: "Confrac", salePrice: 100, purchasePrice: 70, unitCost: 5 },
  veicular: { name: "Débitos veiculares", subaccount: "Parcele na Hora", salePrice: 35, purchasePrice: 22, unitCost: 3 },
  tributos: { name: "Parcelamento de tributos", subaccount: "Confra HUB Tributos", salePrice: 25, purchasePrice: 15, unitCost: 2 },
  fgts: { name: "Adiantamento de FGTS Aniversário", subaccount: "Confra HUB FGTS", salePrice: 80, purchasePrice: 50, unitCost: 8 },
  certificado: { name: "Certificado digital", subaccount: "Cert Sign", salePrice: 200, purchasePrice: 140, unitCost: 10 },
  energia: { name: "Confra Energia", subaccount: "Confraenergia", salePrice: 150, purchasePrice: 110, unitCost: 15 },
};

export const SYSTEM_SERVICES: Record<SystemServiceId, ServiceQuote> = {
  pdv: { name: "Confra PDV", subaccount: "Confra SYSTEM · PDV", salePrice: 150, purchasePrice: 80, unitCost: 15 },
  cobranca: { name: "Confra Cobrança", subaccount: "Confra SYSTEM · Cobrança", salePrice: 80, purchasePrice: 40, unitCost: 8 },
  gerenpix: { name: "Confra GerenPix", subaccount: "Confra SYSTEM · GerenPix", salePrice: 60, purchasePrice: 30, unitCost: 6 },
};

export type UniversidadeCourseQuote = {
  name: string;
  audience: UniversidadeAudience;
  salePrice: number;
  purchasePrice: number;
  unitCost: number;
};

export const UNIVERSIDADE_COURSES: Record<UniversidadeCourseId, UniversidadeCourseQuote> = {
  onboarding: { name: "Onboarding de Colaboradores", audience: "colaborador", salePrice: 197, purchasePrice: 60, unitCost: 10 },
  inicial: { name: "Formação Inicial", audience: "cliente", salePrice: 497, purchasePrice: 150, unitCost: 25 },
  fast: { name: "Plano Fast", audience: "cliente", salePrice: 297, purchasePrice: 90, unitCost: 15 },
  lideres: { name: "Formação de Líderes", audience: "cliente", salePrice: 697, purchasePrice: 200, unitCost: 40 },
  split: { name: "Split de Recebíveis", audience: "cliente", salePrice: 397, purchasePrice: 120, unitCost: 20 },
  f3f4: { name: "F3 e F4 Sem Segredos", audience: "cliente", salePrice: 297, purchasePrice: 80, unitCost: 12 },
  tef: { name: "ConfraTEF", audience: "cliente", salePrice: 297, purchasePrice: 80, unitCost: 12 },
  pix: { name: "ConfraPix", audience: "cliente", salePrice: 297, purchasePrice: 80, unitCost: 12 },
  online: { name: "ConfraOnline", audience: "cliente", salePrice: 297, purchasePrice: 80, unitCost: 12 },
  hub: { name: "ConfraHub", audience: "cliente", salePrice: 350, purchasePrice: 100, unitCost: 15 },
};

export type EventosEventQuote = {
  name: string;
  salePrice: number;
  purchasePrice: number;
  unitCost: number;
};

export const EVENTOS_CATALOG: Record<EventosEventId, EventosEventQuote> = {
  nacional: { name: "Convenção Nacional", salePrice: 890, purchasePrice: 350, unitCost: 80 },
  regional: { name: "Regionais", salePrice: 450, purchasePrice: 180, unitCost: 40 },
  paulo: { name: "Paulo Por Aí", salePrice: 297, purchasePrice: 90, unitCost: 25 },
  livre: { name: "Evento livre do Confra Eventos", salePrice: 350, purchasePrice: 120, unitCost: 30 },
};

export const PERCENT_PRODUCTS: Record<PercentProductId, { name: string; subaccount: string; rate: number }> = {
  shopping: { name: "Confra Shopping", subaccount: "Confra Shopping", rate: 0.06 },
};

export const SUBACCOUNTS = {
  pix: "Confra PIX · CNPJ próprio",
  tef: "Confra TEF",
  hub: "Confra HUB",
  system: "Confra SYSTEM",
  shopping: "Confra Shopping",
  universidade: "Universidade Confrapag",
  eventos: "Confra Eventos",
} as const;
