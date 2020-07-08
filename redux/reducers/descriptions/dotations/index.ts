import { combineReducers } from "redux";

import { Commune, communesTypes } from "./communes-types";

export const dotations = combineReducers({
  communesTypes,
});

export type { Commune };
