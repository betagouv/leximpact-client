/* eslint-disable sort-keys */
import {
  // eslint-disable-next-line no-unused-vars
  RemoveCommuneTypeAction,
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsFailureAction,
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsRequestAction,
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsSuccessAction,
} from "../../../actions";
import { removeCommuneTypeResults } from "../common";
// eslint-disable-next-line no-unused-vars
import { AsyncState, DotationsState } from "../interfaces";

const DEFAULT_STATE: AsyncState<DotationsState> = {
  isFetching: false,
  state: null,
};

type DotationsAction =
  SimulateDotationsFailureAction |
  SimulateDotationsRequestAction |
  SimulateDotationsSuccessAction |
  RemoveCommuneTypeAction;

export function dotations(
  state: AsyncState<DotationsState> = DEFAULT_STATE, action: DotationsAction,
): AsyncState<DotationsState> {
  switch (action.type) {
  case "SIMULATE_DOTATIONS_FAILURE":
    return {
      isFetching: false,
      state: null,
    };
  case "SIMULATE_DOTATIONS_REQUEST":
    return {
      isFetching: true,
      state: null,
    };
  case "SIMULATE_DOTATIONS_SUCCESS":
    return {
      isFetching: false,
      state: action.dotations.base,
    };
  case "REMOVE_COMMUNE_TYPE":
    if (state.state === null) {
      return state;
    }
    return {
      isFetching: false,
      state: removeCommuneTypeResults(state.state, action.index),
    };
  default:
    return state;
  }
}
