import {
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsFailureAction,
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsRequestAction,
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsSuccessAction,
} from "../../../actions";
// eslint-disable-next-line no-unused-vars
import { AsyncState, DotationsState } from "../interfaces";

const DEFAULT_STATE: AsyncState<DotationsState> = {
  isFetching: false,
  state: {
    communes: {
      dsr: {
        eligibles: 10000,
        strates: [
          {
            eligibles: 22,
            dotationMoyenneParHab: 56,
            partDotationTotale: 22,
          },
          {
            eligibles: 2,
            dotationMoyenneParHab: 78,
            partDotationTotale: 3,
          },
          {
            eligibles: 24,
            dotationMoyenneParHab: 12,
            partDotationTotale: 36,
          },
        ],
        communes: [
          {
            code: "38527",
            eligible: true,
            dotationParHab: 33,
          },
          {
            code: "2A253",
            eligible: false,
            dotationParHab: 0,
          },
        ],
      },
    },
  },
};

type DotationsAction =
  SimulateDotationsFailureAction |
  SimulateDotationsRequestAction |
  SimulateDotationsSuccessAction;

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
  default:
    return state;
  }
}
