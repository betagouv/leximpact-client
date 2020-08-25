import {
  // eslint-disable-next-line no-unused-vars
  RemoveCasTypeAction,
  // eslint-disable-next-line no-unused-vars
  SimulateCasTypesFailureAction,
  // eslint-disable-next-line no-unused-vars
  SimulateCasTypesRequestAction,
  // eslint-disable-next-line no-unused-vars
  SimulateCasTypesSuccessAction,
} from "../../../actions";
// eslint-disable-next-line no-unused-vars
import { AsyncState, IRState } from "../interfaces";

const DEFAULT_STATE: AsyncState<IRState> = {
  isFetching: false,
  state: null,
};

type IRAction =
  SimulateCasTypesFailureAction |
  SimulateCasTypesRequestAction |
  SimulateCasTypesSuccessAction |
  RemoveCasTypeAction;

export function ir(
  state: AsyncState<IRState> = DEFAULT_STATE, action: IRAction,
): AsyncState<IRState> {
  switch (action.type) {
  case "SIMULATE_CAS_TYPES_FAILURE":
    return {
      isFetching: false,
      state: null,
    };
  case "SIMULATE_CAS_TYPES_REQUEST":
    return {
      isFetching: true,
      state: null,
    };
  case "SIMULATE_CAS_TYPES_SUCCESS":
    return {
      isFetching: false,
      state: {
        casTypes: Object.keys(action.data.nbreParts.apres).map(key => ({
          impotAnnuel: Math.abs(action.data.res_brut.apres[key]),
          parts: action.data.nbreParts.apres[key],
        })),
      },
    };
  case "REMOVE_CAS_TYPE":
    if (state.state === null) {
      return state;
    }
    const casTypes = [...state.state.casTypes];
    casTypes.splice(action.index, 1);
    return {
      isFetching: false,
      state: {
        casTypes,
      },
    };
  default:
    return state;
  }
}
