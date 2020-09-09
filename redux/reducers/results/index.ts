import { combineReducers } from "redux";

import { amendement } from "./amendement";
import { base } from "./base";
import { baseToAmendement } from "./baseToAmendement";
import { baseToPlf } from "./baseToPlf";
import { plf } from "./plf";
import totalPop from "./total-pop";

export * from "./interfaces";

export default combineReducers({
  amendement,
  base,
  baseToAmendement,
  baseToPlf,
  plf,
  totalPop,
});
