import type { PipelineEvent } from "./types";

export const PIPELINE: readonly PipelineEvent[] = [
  { n: 1, name: "Captura", text: "Evento entra na central de apuração, comissionamento e conciliação." },
  { n: 2, name: "Apuração", text: "Classificação por produto, operação, canal, CNPJ e subconta." },
  { n: 3, name: "Cálculo de comissões", text: "Contrato, custo documentado, Pulse/retenção e faixas." },
  { n: 4, name: "Distribuição", text: "Lucro (venda − compra − custo) em 70% rede e 30% operação." },
  { n: 5, name: "Relatórios", text: "Recibo, JSON do dashboard e liquidação na conta concentradora MT." },
];

export function pipelineFor(labels: string[]): PipelineEvent[] {
  return PIPELINE.map((step, index) => ({
    ...step,
    text: labels[index] || step.text,
  }));
}
