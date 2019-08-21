import { combineReducers } from "redux";

import casTypes from "./cas-types";
import loading from "./loading";
import reforme from "./reforme";
import reformeBase from "./reforme-base";
import resBrut from "./res-brut";
import totalPop from "./total-pop";
import currentExpandedArticlePanel from "./current-expanded-article-panel";

export default combineReducers({
  casTypes,
  loading,
  reforme,
  reformeBase,
  resBrut,
  totalPop,
  currentExpandedArticlePanel,
});
