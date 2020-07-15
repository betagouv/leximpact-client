// eslint-disable-next-line no-unused-vars
import { ParametersState } from "../../reducers/parameters";

export interface ResetAmendementToBaseAction {
  type: "RESET_AMENDEMENT_TO_BASE",
  topic: keyof ParametersState,
}

export function resetAmendementToBase(topic: ResetAmendementToBaseAction["topic"]): ResetAmendementToBaseAction {
  return {
    topic,
    type: "RESET_AMENDEMENT_TO_BASE",
  };
}
