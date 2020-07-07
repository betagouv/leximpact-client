import { combineReducers } from "redux";

import { dotations } from "./dotations";
import { ir } from "./ir";

export const base = combineReducers({
  dotations,
  impot_revenu: ir,
});

export { BASE_IR_DEFAULT_STATE } from "./ir";
export { BASE_DOTATIONS_DEFAULT_STATE } from "./dotations";
