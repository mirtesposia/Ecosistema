export const OPERATIONS = [
  "Confrapag",
  "Aliança Pay",
  "Araguaia Pay",
  "Athos Pay",
  "BrazPay",
  "Bull Bank",
  "Deixa no Azul",
  "Libber Pay",
  "Pague Assim",
  "Parcela Já",
  "Propag Pay",
  "Seven Pay",
  "Sky Thunder",
  "S4Pag",
  "Wedsbank",
  "TMJ PAY",
] as const;

export const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"] as const;

export const ENGINE_PRODUCTS = ["pix", "tef", "hub", "system", "shopping", "universidade", "eventos"] as const;

export const PIX_SUPPLIERS = ["F3", "F4", "F5", "F6", "F7"] as const;
export const ALL_SUPPLIERS = "ALL" as const;
export const ALL_OPERATIONS = "ALL" as const;
export const ALL_OPERATIONS_LABEL = "Todas as operações";

export type EngineProductId = (typeof ENGINE_PRODUCTS)[number];
export type Month = (typeof MONTHS)[number];
export type PixSupplier = (typeof PIX_SUPPLIERS)[number];
export type SupplierFilter = PixSupplier | typeof ALL_SUPPLIERS;
export type HubServiceId = "cred" | "veicular" | "tributos" | "fgts" | "certificado" | "energia";
export type SystemServiceId = "pdv" | "cobranca" | "gerenpix";
export type PercentProductId = "shopping";
export type UniversidadeCourseId =
  | "onboarding"
  | "inicial"
  | "fast"
  | "lideres"
  | "split"
  | "f3f4"
  | "tef"
  | "pix"
  | "online"
  | "hub";
export type UniversidadeAudience = "cliente" | "colaborador";
export type EventosEventId = "nacional" | "regional" | "paulo" | "livre";

export interface SimBase {
  operation: string;
  year: number;
  month: Month;
  /** Cost only enters the ledger when a contract or addendum exists. */
  costDocumented: boolean;
}

export interface PixInput extends SimBase {
  productId: "pix";
  supplier: SupplierFilter;
  quantity: number;
  ticket: number;
  sellPrice: number;
  buyPrice: number;
  pulseRate: number;
}

export interface TefInput extends SimBase {
  productId: "tef";
  supplier: SupplierFilter;
  tpvF3: number;
  tpvF4: number;
  tpvF5: number;
  tpvF6: number;
  tpvF7: number;
  takeF3: number;
  takeF4: number;
  takeF5: number;
  takeF6: number;
  takeF7: number;
  retentionRate: number;
  documentedCost: number;
}

export interface HubInput extends SimBase {
  productId: "hub";
  supplier: SupplierFilter;
  serviceId: HubServiceId;
  quantity: number;
  salePrice: number;
  purchasePrice: number;
  unitCost: number;
}

export interface SystemInput extends SimBase {
  productId: "system";
  supplier: SupplierFilter;
  serviceId: SystemServiceId;
  quantity: number;
  salePrice: number;
  purchasePrice: number;
  unitCost: number;
}

export interface PercentInput extends SimBase {
  productId: PercentProductId;
  sales: number;
  rate: number;
}

export interface UniversidadeSaleLine {
  courseId: UniversidadeCourseId;
  name?: string;
  audience: UniversidadeAudience;
  quantity: number;
  salePrice: number;
  purchasePrice: number;
  unitCost: number;
}

export interface UniversidadeInput extends SimBase {
  productId: "universidade";
  courses: UniversidadeSaleLine[];
}

export interface EventosSaleLine {
  eventId: EventosEventId;
  name?: string;
  quantity: number;
  salePrice: number;
  purchasePrice: number;
  unitCost: number;
}

export interface EventosInput extends SimBase {
  productId: "eventos";
  events: EventosSaleLine[];
}

export type SimulatorInput = PixInput | TefInput | HubInput | SystemInput | PercentInput | UniversidadeInput | EventosInput;

export type LedgerRole = "volume" | "revenue" | "cost" | "fee" | "profit" | "split";

export interface LedgerLine {
  code: string;
  label: string;
  amount: number;
  role: LedgerRole;
}

export interface PipelineEvent {
  n: number;
  name: string;
  text: string;
}

export interface DashboardRow {
  operacao: string;
  ano: number;
  mes: Month;
  tpv: number;
  tpvF3: number;
  tpvF4: number;
  tpvF5: number;
  tpvF6: number;
  tpvF7: number;
  f3: number;
  f4: number;
  f5: number;
  f6: number;
  f7: number;
  comissao: number;
  take: number;
}

export interface Settlement {
  productId: EngineProductId;
  productName: string;
  subaccount: string;
  operation: string;
  year: number;
  month: Month;
  supplier?: SupplierFilter;
  serviceId?: string;
  serviceName?: string;
  amount: number;
  revenue: number;
  cost: number;
  pulse: number;
  retention: number;
  profit: number;
  split: { network70: number; operation30: number };
  takeRate: number;
  lines: LedgerLine[];
  notes: string[];
  pipeline: PipelineEvent[];
  dashboardRow: DashboardRow;
}

export interface DashboardPayload {
  source: "confrapag-simulador";
  version: 1;
  generatedAt: string;
  product: EngineProductId;
  operation: string;
  settlement: Settlement;
  rows: DashboardRow[];
}
