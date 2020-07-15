// eslint-disable-next-line no-unused-vars
import { ParametersState } from "../../reducers/parameters";

export interface ResetAmendementToPlfAction {
  type: "RESET_AMENDEMENT_TO_PLF",
  topic: keyof ParametersState,
}

export function resetAmendementToPlf(topic: ResetAmendementToPlfAction["topic"]): ResetAmendementToPlfAction {
  return {
    topic,
    type: "RESET_AMENDEMENT_TO_PLF",
  };
}
