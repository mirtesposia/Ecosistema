import { HUB_SERVICES, SUBACCOUNTS } from "../contracts";
import type { HubInput, Settlement } from "../types";
import { simulateMargin } from "./margin";

export function simulateHub(input: HubInput): Settlement {
  const service = HUB_SERVICES[input.serviceId] || HUB_SERVICES.cred;
  return simulateMargin({
    ...input,
    productId: "hub",
    productName: "Confra HUB",
    rootSubaccount: SUBACCOUNTS.hub,
    service,
    serviceId: input.serviceId,
  });
}
