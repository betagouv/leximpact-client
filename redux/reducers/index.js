import { combineReducers } from "redux";

import casTypes from "./cas-types";
import disabledEtat from "./disabled-etat";
import display from "./display";
import loadingEtat from "./loading-etat";
import { parameters } from "./parameters";
import results from "./results";
import token from "./token";
import totalPop from "./total-pop";

export default combineReducers({
  casTypes,
  disabledEtat,
  display,
  loadingEtat,
  parameters,
  results,
  token,
  totalPop,
});
