import { combineReducers } from "redux";

import { dotations } from "./dotations";
import { ir } from "./ir";

export const descriptions = combineReducers({
  dotations,
  ir,
});
