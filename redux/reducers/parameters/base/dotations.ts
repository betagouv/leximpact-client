/* eslint-disable sort-keys */

// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../interfaces";

export const BASE_DOTATIONS_DEFAULT_STATE: DotationsState = {
  // Article L1613-1 du CGCT
  montants: {
    dgf: 26846874416,
  },
  communes: {
    dsr: {
      // Article L2334-20 du CGCT
      eligibilite: {
        popChefLieuMax: 20000,
        popMax: 10000,
      },
      // Article L2334-21  du CGCT
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
          pourcentageAttributionMin: 90,
          pourcentageAttributionMax: 120,
          // plafonnementPopulation: {
          //   500: 100,
          //   1000: 500,
          //   2250: 1500,
          // },
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
          pourcentageAttributionMin: 90,
          pourcentageAttributionMax: 120,
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
  },
};

export const dotations = (state = BASE_DOTATIONS_DEFAULT_STATE) => state;
