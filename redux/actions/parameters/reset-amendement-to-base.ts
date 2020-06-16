// eslint-disable-next-line no-unused-vars
import { ResetAmendementToBaseAction } from "../../../types/parameters";

export function resetAmendementToBase(topic: ResetAmendementToBaseAction["topic"]): ResetAmendementToBaseAction {
  return {
    topic,
    type: "RESET_AMENDEMENT_TO_BASE",
  };
}
