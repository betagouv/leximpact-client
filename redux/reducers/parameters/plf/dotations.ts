/* eslint-disable sort-keys */

// eslint-disable-next-line no-unused-vars
import { setIn } from "immutable";

// eslint-disable-next-line no-unused-vars
import { InitFakePlfAction } from "../../../actions";
// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../interfaces";

export const PLF_DOTATIONS_DEFAULT_STATE: DotationsState = {
  // Article L1613-1 du CGCT
  montants: {
    dgf: 26846874416,
    dsrAndDsu: {
      variation: 0,
    },
  },
  communes: {
    dsr: {
      // Article L2334-20 du CGCT
      eligibilite: {
        popChefLieuMax: 20000,
        popMax: 10000,
      },
      // Article L2334-21 du CGCT
      bourgCentre: {
        eligibilite: {
          partPopCantonMin: 15,
          exclusion: {
            agglomeration: {
              partPopDepartementMin: 10,
              popMin: 250000,
              popCommuneMin: 100000,
            },
            canton: {
              popChefLieuMin: 10000,
            },
            potentielFinancier: {
              rapportPotentielFinancierMoyen: 2,
            },
          },
        },
        attribution: {
          popLimite: 10000,
          effortFiscalLimite: 1.2,
          coefMultiplicateurRevitalisationRurale: 1.3,
          // pourcentageAttributionMin: 90,
          // pourcentageAttributionMax: 120,
          plafonnementPopulation: [
            { plafonnement: 500, popMax: 100 },
            { plafonnement: 1000, popMax: 500 },
            { plafonnement: 2250, popMax: 1500 },
          ],
        },
      },
      // Article L2334-22 du CGCT
      perequation: {
        eligibilite: {
          rapportPotentielFinancier: 2,
        },
        attribution: {
          repartition: {
            ponderationPotentielFinancier: 30,
            ponderationLongueurVoirie: 30,
            ponderationNbreEnfants: 30,
            ponderationPotentielFinancierParHectare: 10,
          },
          // pourcentageAttributionMin: 90,
          // pourcentageAttributionMax: 120,
        },
      },
      // Article L2334-22-1 du CGCT
      cible: {
        eligibilite: {
          premieresCommunes: 10000,
          indiceSynthetique: {
            ponderationPotentielFinancier: 70,
            ponderationRevenu: 30,
          },
        },
      },
    },
    dsu: {
      eligibilite: {
        // Article L2334-16 du CGCT
        popMinSeuilBas: 5000,
        popMinSeuilHaut: 10000,
        rapportPotentielFinancier: 2.5,
        pourcentageRangSeuilBas: 10,
        pourcentageRangSeuilHaut: 67,
        // Article L2334-17 du CGCT
        indiceSynthetique: {
          ponderationPotentielFinancier: 30,
          ponderationLogementsSociaux: 15,
          ponderationAideAuLogement: 30,
          ponderationRevenu: 25,
        },
      },
      // Article L2334-18-2 du CGCT
      attribution: {
        effortFiscalLimite: 1.3,
        facteurClassementMax: 4.0,
        facteurClassementMin: 0.5,
        poidsSupplementaireZoneUrbaineSensible: 2.0,
        poidsSupplementaireZoneFrancheUrbaine: 1.0,
        augmentationMax: 4000000,
      },
    },
  },
};

type DotationsType = InitFakePlfAction;

export function dotations(
  state: DotationsState = PLF_DOTATIONS_DEFAULT_STATE, action: DotationsType,
): DotationsState {
  switch (action.type) {
  case "INIT_FAKE_PLF":
    return setIn(state, ["communes", "dsr", "eligibilite", "popMax"], 15000);
  default:
    return state;
  }
}
