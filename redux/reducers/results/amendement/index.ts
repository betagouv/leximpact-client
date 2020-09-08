import { combineReducers } from "redux";

import { dotations } from "./dotations";
import { ir } from "./ir";

export const amendement = combineReducers({
  dotations,
  ir,
});
