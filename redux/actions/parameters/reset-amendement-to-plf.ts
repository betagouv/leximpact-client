// eslint-disable-next-line no-unused-vars
import { ResetAmendementToPlfAction } from "../../../types/parameters";

export function resetAmendementToPlf(topic: ResetAmendementToPlfAction["topic"]): ResetAmendementToPlfAction {
  return {
    topic,
    type: "RESET_AMENDEMENT_TO_PLF",
  };
}
