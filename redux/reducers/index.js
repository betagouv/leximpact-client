import { combineReducers } from "redux";

import casTypes from "./cas-types";
import currentExpandedArticlePanel from "./current-expanded-article-panel";
import loading from "./loading";
import reforme from "./reforme";
import reformeBase from "./reforme-base";
import reformePLF from "./reforme-plf";
import resBrut from "./res-brut";
import token from "./token";
import totalPop from "./total-pop";

export default combineReducers({
  casTypes,
  currentExpandedArticlePanel,
  loading,
  reforme,
  reformeBase,
  reformePLF,
  resBrut,
  token,
  totalPop,
});
