import { SUBACCOUNTS, SYSTEM_SERVICES } from "../contracts";
import type { Settlement, SystemInput } from "../types";
import { simulateMargin } from "./margin";

export function simulateSystem(input: SystemInput): Settlement {
  const service = SYSTEM_SERVICES[input.serviceId] || SYSTEM_SERVICES.pdv;
  return simulateMargin({
    ...input,
    productId: "system",
    productName: "Confra SYSTEM",
    rootSubaccount: SUBACCOUNTS.system,
    service,
    serviceId: input.serviceId,
  });
}
