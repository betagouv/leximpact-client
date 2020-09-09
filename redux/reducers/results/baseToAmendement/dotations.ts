import {
  // eslint-disable-next-line no-unused-vars
  Action,
} from "../../../actions";
import { removeCommuneTypeDiffResults } from "../common";
// eslint-disable-next-line no-unused-vars
import { AsyncState, DotationsDiffState } from "../interfaces";

const DEFAULT_STATE: AsyncState<DotationsDiffState> = {
  isFetching: false,
  state: null,
};

export function dotations(
  state: AsyncState<DotationsDiffState> = DEFAULT_STATE, action: Action,
): AsyncState<DotationsDiffState> {
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
    const { amendement, base, baseToAmendement } = action.dotations;
    const dsr: DotationsDiffState["communes"]["dsr"] = {
      ...baseToAmendement.communes.dsr,
      communes: amendement.communes.dsr.communes.map((commune, index) => ({
        code: commune.code,
        diffDotationParHab: (
          amendement.communes.dsr.communes[index].dotationParHab
          - base.communes.dsr.communes[index].dotationParHab
        ),
      })),
    };
    const dsu: DotationsDiffState["communes"]["dsu"] = {
      ...baseToAmendement.communes.dsu,
      communes: amendement.communes.dsu.communes.map((commune, index) => ({
        code: commune.code,
        diffDotationParHab: (
          amendement.communes.dsu.communes[index].dotationParHab
          - base.communes.dsu.communes[index].dotationParHab
        ),
      })),
    };
    return {
      isFetching: false,
      state: {
        communes: {
          dgf: {
            communes: dsr.communes.map((commune, index) => ({
              code: commune.code,
              diffDotationParHab: (
                dsr.communes[index].diffDotationParHab
                + dsu.communes[index].diffDotationParHab
              ),
            })),
            strates: amendement.communes.dsr.strates.map((_, index) => ({
              diffDotationMoyenneParHab:
                (
                  amendement.communes.dsr.strates[index].dotationMoyenneParHab
                  + amendement.communes.dsu.strates[index].dotationMoyenneParHab
                )
                - (
                  base.communes.dsr.strates[index].dotationMoyenneParHab
                  + base.communes.dsu.strates[index].dotationMoyenneParHab
                ),
            })),
          },
          dsr,
          dsu,
        },
      },
    };
  case "REMOVE_COMMUNE_TYPE":
    if (state.state === null) {
      return state;
    }
    return {
      isFetching: false,
      state: removeCommuneTypeDiffResults(state.state, action.index),
    };
  default:
    return state;
  }
}
