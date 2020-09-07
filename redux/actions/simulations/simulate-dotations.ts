import { updateIn } from "immutable";

import request from "../../../components/common/utils/request";
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

interface RequestDotationsState {
  // Article L1613-1 du CGCT
  montants: {
    dgf: number;
    dsr: {
      variation: number;
    },
    dsu: {
      variation: number;
    },
  }
  communes: {
    dsr: {
      // Article L2334-20 du CGCT
      eligibilite: {
        popMax: number;
        popChefLieuMax: number;
      }
      // Article L2334-21 du CGCT
      bourgCentre: {
        eligibilite: {
          partPopCantonMin: number;
          exclusion: {
            agglomeration: {
              partPopDepartementMin: number;
              popMin: number;
              popCommuneMin: number;
            }
            canton: {
              popChefLieuMin: number;
            }
            potentielFinancier: {
              rapportPotentielFinancierMoyen: number;
            }
          }
        }
        attribution: {
          popLimite: number;
          effortFiscalLimite: number;
          coefMultiplicateurRevitalisationRurale: number;
          // pourcentageAttributionMin: number;
          // pourcentageAttributionMax: number;
          plafonnementPopulation: {
            [recensement: number]: number;
          }
        }
      }
      // Article L2334-22 du CGCT
      perequation: {
        eligibilite: {
          rapportPotentielFinancier: number;
        }
        attribution: {
          repartition: {
            ponderationPotentielFinancier: number;
            ponderationLongueurVoirie: number;
            ponderationNbreEnfants: number;
            ponderationPotentielFinancierParHectare: number;
          }
          // pourcentageAttributionMin: number;
          // pourcentageAttributionMax: number;
        }
      }
      // Article L2334-22-1 du CGCT
      cible: {
        eligibilite: {
          premieresCommunes: number;
          indiceSynthetique: {
            ponderationPotentielFinancier: number;
            ponderationRevenu: number;
          }
        }
      }
    }
    dsu: {
      eligibilite: {
          popMinSeuilBas: number;
          popMinSeuilHaut: number;
          rapportPotentielFinancier: number;
          pourcentageRangSeuilBas: number;
          pourcentageRangSeuilHaut: number;
          indiceSynthetique: {
              ponderationPotentielFinancier: number;
              ponderationLogementsSociaux: number;
              ponderationAideAuLogement: number;
              ponderationRevenu: number;
          }
      }
      attribution: {
          effortFiscalLimite: number;
          facteurClassementMax: number;
          facteurClassementMin: number;
          poidsSupplementaireZoneUrbaineSensible: number;
          poidsSupplementaireZoneFrancheUrbaine: number;
          augmentationMax: number;
      }
    }
  }
}


interface RequestBody {
  reforme: {
    dotations: RequestDotationsState;
  },
  descriptionCasTypes: { code: string }[];
  strates: { habitants: number }[];
}

interface ResponseBody {
  amendement: {
    communes: {
      dsr: {
        eligibles: number;
        strates: {
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
      },
      dsu: {
        eligibles: number;
        strates: {
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
  plf?: ResponseBody["amendement"]
  baseToAmendement: {
    communes: {
      dsr: {
        nouvellementEligibles: number;
        plusEligibles: number;
        toujoursEligibles: number;
      },
      dsu: {
        nouvellementEligibles: number;
        plusEligibles: number;
        toujoursEligibles: number;
      }
    }
  }
  baseToPlf?: ResponseBody["baseToAmendement"]
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

function convertPlafonnementPopulationAndVariation(
  dotations: DotationsState,
): RequestDotationsState {
  const requestPlafonnementPopulation: RequestDotationsState["communes"]["dsr"]["bourgCentre"]["attribution"]["plafonnementPopulation"] = {};
  const { plafonnementPopulation } = dotations.communes.dsr.bourgCentre.attribution;
  plafonnementPopulation.forEach(({ plafonnement, popMax }, index) => {
    if (index === 0) {
      requestPlafonnementPopulation["0"] = plafonnement;
      return;
    }
    requestPlafonnementPopulation[plafonnementPopulation[index - 1].popMax] = plafonnement;
    if (index === plafonnementPopulation.length - 1) {
      requestPlafonnementPopulation[popMax] = 999999999;
    }
  });
  return {
    ...dotations,
    communes: {
      ...dotations.communes,
      dsr: {
        ...dotations.communes.dsr,
        bourgCentre: {
          ...dotations.communes.dsr.bourgCentre,
          attribution: {
            ...dotations.communes.dsr.bourgCentre.attribution,
            plafonnementPopulation: requestPlafonnementPopulation,
          },
        },
      },
    },
    montants: {
      dgf: dotations.montants.dgf,
      // dsr: {
      //   variation: dotations.montants.dsrAndDsu.variation * 1000000,
      // },
      // dsu: {
      //   variation: dotations.montants.dsrAndDsu.variation * 1000000,
      // },
    },
  } as any;
}

function convertRates(dotations: RequestDotationsState): RequestDotationsState {
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
    "communes.dsu.eligibilite.pourcentageRangSeuilBas",
    "communes.dsu.eligibilite.pourcentageRangSeuilHaut",
    "communes.dsu.eligibilite.indiceSynthetique.ponderationPotentielFinancier",
    "communes.dsu.eligibilite.indiceSynthetique.ponderationLogementsSociaux",
    "communes.dsu.eligibilite.indiceSynthetique.ponderationAideAuLogement",
    "communes.dsu.eligibilite.indiceSynthetique.ponderationRevenu",
  ];
  paths.forEach((path) => {
    result = updateIn(result, path.split("."), rate => rate / 100);
  });
  return result;
}

export const simulateDotations = () => (dispatch, getState) => {
  dispatch(simulateDotationsRequest());

  const { descriptions, parameters } = getState() as RootState;
  const body: RequestBody = {
    descriptionCasTypes: descriptions.dotations.communesTypes.map(({ code }) => ({ code })),
    reforme: {
      dotations: convertRates(
        convertPlafonnementPopulationAndVariation(parameters.amendement.dotations),
      ),
    },
    strates: descriptions.dotations.strates.map(({ habitants }) => ({ habitants })),
  };

  return request
    .post("/dotations", body)
    .then((payload: ResponseBody) => {
      function parsePayload(dotation: keyof ResponseBody["amendement"]["communes"]): void {
        payload.amendement.communes[dotation].strates.forEach((strate) => {
          // eslint-disable-next-line no-param-reassign
          strate.partDotationTotale *= 100;
        });
        if (payload.plf) {
          payload.plf.communes[dotation].strates.forEach((strate) => {
            // eslint-disable-next-line no-param-reassign
            strate.partDotationTotale *= 100;
          });
        }
        payload.base.communes[dotation].strates.forEach((strate) => {
          // eslint-disable-next-line no-param-reassign
          strate.partDotationTotale *= 100;
        });
      }

      parsePayload("dsr");
      parsePayload("dsu");

      dispatch(simulateDotationsSuccess(payload));
    })
    .catch(err => dispatch(simulateDotationsFailure(err)));
};
