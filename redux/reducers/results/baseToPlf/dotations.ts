import {
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsFailureAction,
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsRequestAction,
  // eslint-disable-next-line no-unused-vars
  SimulateDotationsSuccessAction,
} from "../../../actions";
// eslint-disable-next-line no-unused-vars
import { AsyncState, DotationsDiffState } from "../interfaces";

const DEFAULT_STATE: AsyncState<DotationsDiffState> = {
  isFetching: false,
  state: null,
};

type DotationsAction =
  SimulateDotationsFailureAction |
  SimulateDotationsRequestAction |
  SimulateDotationsSuccessAction;

export function dotations(
  state: AsyncState<DotationsDiffState> = DEFAULT_STATE, action: DotationsAction,
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
    // TODO: remove this when the PLF is enabled.
    // const { base, baseToPlf, plf } = action.dotations;
    // if (!plf || !baseToPlf) {
    //   return {
    //     isFetching: false,
    //     state: null,
    //   };
    // }
    const { base } = action.dotations;
    const baseToPlf = {
      communes: {
        dsr: {
          nouvellementEligibles: 0,
          plusEligibles: 0,
          toujoursEligibles: 0,
        },
        dsu: {
          nouvellementEligibles: 0,
          plusEligibles: 0,
          toujoursEligibles: 0,
        },
      },
    };
    const plf = base;

    const dsr: DotationsDiffState["communes"]["dsr"] = {
      ...baseToPlf.communes.dsr,
      communes: plf.communes.dsr.communes.map((commune, index) => ({
        code: commune.code,
        diffDotationParHab: (
          plf.communes.dsr.communes[index].dotationParHab
          - base.communes.dsr.communes[index].dotationParHab
        ),
      })),
    };
    const dsu: DotationsDiffState["communes"]["dsu"] = {
      ...baseToPlf.communes.dsu,
      communes: plf.communes.dsu.communes.map((commune, index) => ({
        code: commune.code,
        diffDotationParHab: (
          plf.communes.dsu.communes[index].dotationParHab
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
            strates: plf.communes.dsr.strates.map((_, index) => ({
              diffDotationMoyenneParHab:
                (
                  plf.communes.dsr.strates[index].dotationMoyenneParHab
                  + plf.communes.dsu.strates[index].dotationMoyenneParHab
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
  default:
    return state;
  }
}
