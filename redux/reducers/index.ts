import { combineReducers } from "redux";

import { descriptions } from "./descriptions";
import disabledEtat from "./disabled-etat";
import { display } from "./display";
import loadingEtat from "./loading-etat";
import { parameters } from "./parameters";
import results from "./results";
import token from "./token";

const rootReducer = combineReducers({
  descriptions,
  disabledEtat,
  display,
  loadingEtat,
  parameters,
  results,
  token,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
