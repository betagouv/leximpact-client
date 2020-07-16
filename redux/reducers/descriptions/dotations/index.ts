import { combineReducers } from "redux";

import { Commune, communesTypes } from "./communes-types";
import { strates } from "./strates";

export const dotations = combineReducers({
  communesTypes,
  strates,
});

export type { Commune };
