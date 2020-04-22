import { combineReducers } from "redux";

import casTypes from "./cas-types";
import disabledEtat from "./disabled-etat";
import display from "./display";
import loading from "./loading";
import loadingEtat from "./loading-etat";
import reforme from "./reforme";
import reformeBase from "./reforme-base";
import reformePLF from "./reforme-plf";
import resBrut from "./res-brut";
import token from "./token";
import totalPop from "./total-pop";

export default combineReducers({
  casTypes,
  disabledEtat,
  display,
  loading,
  loadingEtat,
  reforme,
  reformeBase,
  reformePLF,
  resBrut,
  token,
  totalPop,
});
