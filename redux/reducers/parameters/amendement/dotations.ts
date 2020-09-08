import { setIn } from "immutable";
import { cloneDeep } from "lodash";

// eslint-disable-next-line no-unused-vars
import { Action } from "../../../actions";
import { BASE_DOTATIONS_DEFAULT_STATE } from "../base";
// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../interfaces";
import { PLF_DOTATIONS_DEFAULT_STATE } from "../plf";

const AMENDEMENT_DOTATIONS_DEFAULT_STATE = cloneDeep(PLF_DOTATIONS_DEFAULT_STATE);

export function dotations(
  state: DotationsState = AMENDEMENT_DOTATIONS_DEFAULT_STATE, action: Action,
): DotationsState {
  switch (action.type) {
  case "RESET_AMENDEMENT_TO_PLF":
    if (action.topic === "dotations") {
      return cloneDeep(PLF_DOTATIONS_DEFAULT_STATE);
    }
    return state;
  case "RESET_AMENDEMENT_TO_BASE":
    if (action.topic === "dotations") {
      return cloneDeep(BASE_DOTATIONS_DEFAULT_STATE);
    }
    return state;
  case "INIT_FAKE_PLF":
    let newState: DotationsState = state;
    newState = setIn(newState, ["communes", "dsr", "eligibilite", "popMax"], 8000);
    newState = setIn(newState, ["communes", "dsr", "eligibilite", "popChefLieuMax"], 18000);
    return newState;
  default:
    return state;
  }
}
