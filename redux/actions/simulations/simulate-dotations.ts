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

interface ResponseBody {
  amendement: {
    communes: {
      dsr: {
        eligibles: number;
        strates: {
          // Borne supérieure de la strate
          habitants: number;
          // Représentation de la strate dans la population totale
          partPopTotale: number;
          // Potentiel financier moyen par habitant
          potentielFinancierMoyenParHab: number;
          // Nombre de communes éligibles
          eligibles: number;
          // Dotation moyenne par habitant
          dotationMoyenneParHab: number;
          // Part des dotations accordées à cette strate dans la dotation totale.
          partDotationTotale: number;
        }[],
        communes: {
          code: string; // OR id, I'm ok with both.
          eligible: boolean;
          dotationParHab: number;
        }[]
      }
    }
  }
  base: ResponseBody["amendement"]
  plf: ResponseBody["amendement"]
  baseToPlf: {
    communes: {
      dsr: {
        nouvellementEligibles: number;
        plusEligibles: number;
      }
    }
  }
  plfToAmendement: {
    communes: {
      dsr: {
        nouvellementEligibles: number;
        plusEligibles: number;
      }
    }
  }
}

export interface SimulateDotationsSuccessAction {
  type: "SIMULATE_DOTATIONS_SUCCESS",
  dotations: ResponseBody,
}

function simulateDotationsSuccess(dotations: ResponseBody): SimulateDotationsSuccessAction {
  return {
    dotations,
    type: "SIMULATE_DOTATIONS_SUCCESS",
  };
}

function convertRates(dotations: DotationsState): DotationsState {
  let result = dotations;
  const paths: string[] = [
    "communes.dsr.bourgCentre.eligibilite.partPopCantonMin",
    "communes.dsr.bourgCentre.eligibilite.exclusion.agglomeration.partPopDepartementMin",
    // "communes.dsr.bourgCentre.attribution.pourcentageAttributionMin",
    // "communes.dsr.bourgCentre.attribution.pourcentageAttributionMax",
    "communes.dsr.perequation.attribution.repartition.ponderationPotentielFinancier",
    "communes.dsr.perequation.attribution.repartition.ponderationLongueurVoirie",
    "communes.dsr.perequation.attribution.repartition.ponderationNbreEnfants",
    "communes.dsr.perequation.attribution.repartition.ponderationPotentielFinancierParHectare",
    // "communes.dsr.perequation.attribution.pourcentageAttributionMin",
    // "communes.dsr.perequation.attribution.pourcentageAttributionMax",
    "communes.dsr.cible.eligibilite.indiceSynthetique.ponderationPotentielFinancier",
    "communes.dsr.cible.eligibilite.indiceSynthetique.ponderationRevenu",
  ];
  paths.forEach((path) => {
    result = updateIn(result, path.split("."), rate => rate / 100);
  });
  return result;
}

export const simulateDotations = () => (dispatch, getState) => {
  dispatch(simulateDotationsRequest());

  const { descriptions, parameters } = getState() as RootState;
  const body = {
    descriptionCasTypes: descriptions.dotations.communesTypes.map(({ code }) => ({ code })),
    reforme: {
      dotations: convertRates(parameters.amendement.dotations),
    },
  };

  return request
    .post("/dotations", body)
    .then(payload => dispatch(simulateDotationsSuccess(payload)))
    .catch(err => dispatch(simulateDotationsFailure(err)));
};
