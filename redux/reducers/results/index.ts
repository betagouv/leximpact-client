import { combineReducers } from "redux";

import { amendement } from "./amendement";
import { base } from "./base";
import { baseToPlf } from "./baseToPlf";
import casTypes from "./cas-types";
import { plf } from "./plf";
import { baseToAmendement } from "./baseToAmendement";

export default combineReducers({
  amendement,
  base,
  baseToAmendement,
  baseToPlf,
  casTypes,
  plf,
});
