/** Money in integer cents — same idea as dinero.js, without float drift. */

export type Cents = number;

export function toCents(reais: number): Cents {
  const value = Number(reais);
  if (!Number.isFinite(value)) return 0;
  return Math.round(value * 100);
}

export function fromCents(cents: Cents): number {
  return (Number(cents) || 0) / 100;
}

export function roundMoney(reais: number): number {
  return fromCents(toCents(reais));
}

export function addCents(...parts: Cents[]): Cents {
  return parts.reduce((total, part) => total + (Number(part) || 0), 0);
}

export function percentOf(cents: Cents, rate: number): Cents {
  return Math.round((Number(cents) || 0) * (Number(rate) || 0));
}

/** 70% rede, remainder to operação so the split always sums to the profit. */
export function split70_30(profit: Cents): { network70: Cents; operation30: Cents } {
  const safe = Math.max(Number(profit) || 0, 0);
  const network70 = Math.round(safe * 0.7);
  return { network70, operation30: safe - network70 };
}
