import { combineReducers } from "redux";

import { amendement } from "./amendement";
import { base } from "./base";
import { baseToPlf } from "./baseToPlf";
import casTypes from "./cas-types";
import { plf } from "./plf";
import { plfToAmendement } from "./plfToAmendement";

export default combineReducers({
  amendement,
  base,
  baseToPlf,
  casTypes,
  plf,
  plfToAmendement,
});
