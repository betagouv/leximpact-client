import { combineReducers } from "redux";

import { amendement } from "./amendement";
import { base } from "./base";
import { plf } from "./plf";

export const parameters = combineReducers({
  amendement,
  base,
  plf,
});
