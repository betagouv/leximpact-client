import { combineReducers } from "redux";

// eslint-disable-next-line no-unused-vars
import { ParametersState } from "../interfaces";
import { dotations } from "./dotations";
import { ir } from "./ir";

const PLF_ENABLED = false;

export const plf = PLF_ENABLED ? combineReducers({
  dotations,
  impot_revenu: ir,
}) : (state: ParametersState|null = null) => state;


export { PLF_IR_DEFAULT_STATE } from "./ir";
export { PLF_DOTATIONS_DEFAULT_STATE } from "./dotations";
