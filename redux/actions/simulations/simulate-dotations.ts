import { updateIn } from "immutable";

import request from "../../../components/utils/request";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../reducers";
// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../../reducers/parameters";

export interface SimulateDotationsRequestAction {
  type: "SIMULATE_DOTATIONS_REQUEST"
}

function simulateDotationsRequest(): SimulateDotationsRequestAction {
  return {
    type: "SIMULATE_DOTATIONS_REQUEST",
  };
}

export interface SimulateDotationsFailureAction {
  error: any,
  type: "SIMULATE_DOTATIONS_FAILURE",
}

function simulateDotationsFailure(error: any): SimulateDotationsFailureAction {
  return {
    error,
    type: "SIMULATE_DOTATIONS_FAILURE",
  };
}

export interface SimulateDotationsSuccessAction {
  type: "SIMULATE_DOTATIONS_SUCCESS",
  dotations: any,
}

// TODO: use the proper type
function simulateDotationsSuccess(dotations: any): SimulateDotationsSuccessAction {
  return {
    dotations,
    type: "SIMULATE_DOTATIONS_SUCCESS",
  };
}

function convertRates(dotations: DotationsState): DotationsState {
  const paths: string[] = [
    "dotations.communes.dsr.bourgCentre.eligibilite.partPopCantonMin",
    "dotations.communes.dsr.bourgCentre.eligibilite.exclusion.agglomeration.partPopDepartementMin",
    "dotations.communes.dsr.bourgCentre.attribution.pourcentageAttributionMin",
    "dotations.communes.dsr.bourgCentre.attribution.pourcentageAttributionMax",
    "dotations.communes.dsr.perequation.attribution.repartition.ponderationPotentielFinancier",
    "dotations.communes.dsr.perequation.attribution.repartition.ponderationLongueurVoirie",
    "dotations.communes.dsr.perequation.attribution.repartition.ponderationNbreEnfants",
    "dotations.communes.dsr.perequation.attribution.repartition.ponderationPotentielFinancierParHectare",
    "dotations.communes.dsr.perequation.attribution.pourcentageAttributionMin",
    "dotations.communes.dsr.perequation.attribution.pourcentageAttributionMax",
    "dotations.communes.dsr.cible.eligibilite.indiceSynthetique.ponderationPotentielFinancier",
    "dotations.communes.dsr.cible.eligibilite.indiceSynthetique.ponderationRevenu",
  ];
  paths.forEach((path) => {
    updateIn(dotations, path.split("."), rate => rate / 100);
  });
  return dotations;
}

export const simulateDotations = () => (dispatch, getState) => {
  dispatch(simulateDotationsRequest());

  const { parameters } = getState() as RootState;
  const body = {
    reforme: {
      dotations: convertRates(parameters.amendement.dotations),
    },
  };

  return request
    .post("/dotations", body)
    // TODO: handle result
    .then(payload => dispatch(simulateDotationsSuccess(payload)))
    .catch(err => dispatch(simulateDotationsFailure(err)));
};
