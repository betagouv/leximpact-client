import { combineReducers } from "redux";

import { dotations } from "./dotations";
import { ir } from "./ir";

export const base = combineReducers({
  dotations,
  ir,
});
