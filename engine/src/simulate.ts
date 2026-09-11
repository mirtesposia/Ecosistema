import { simulateEventos } from "./adapters/eventos";
import { simulateHub } from "./adapters/hub";
import { simulatePercent } from "./adapters/percent";
import { simulatePix } from "./adapters/pix";
import { simulateSystem } from "./adapters/system";
import { simulateTef } from "./adapters/tef";
import { simulateUniversidade } from "./adapters/universidade";
import type { Settlement, SimulatorInput } from "./types";

export function simulateProduct(input: SimulatorInput): Settlement {
  switch (input.productId) {
    case "pix":
      return simulatePix(input);
    case "tef":
      return simulateTef(input);
    case "hub":
      return simulateHub(input);
    case "system":
      return simulateSystem(input);
    case "universidade":
      return simulateUniversidade(input);
    case "eventos":
      return simulateEventos(input);
    case "shopping":
      return simulatePercent(input);
    default: {
      const unexpected: never = input;
      throw new Error(`Produto sem adaptador: ${JSON.stringify(unexpected)}`);
    }
  }
}
