import { combineReducers } from "redux";

// eslint-disable-next-line no-unused-vars
import { dotations } from "./dotations";
import { ir } from "./ir";

export const plf = combineReducers({
  dotations,
  impot_revenu: ir,
});

export { PLF_IR_DEFAULT_STATE } from "./ir";
export { PLF_DOTATIONS_DEFAULT_STATE } from "./dotations";
