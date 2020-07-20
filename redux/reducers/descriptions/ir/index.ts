import { combineReducers } from "redux";

import { CasType, casTypes } from "./cas-types";

export const ir = combineReducers({
  casTypes,
});

export type { CasType };
