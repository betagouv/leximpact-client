import { ParametersState } from "types/parameters";

export const BASE_DEFAULT_STATE: ParametersState = {
  impot_revenu: {
    bareme: {
      seuils: [10064, 25659, 73369, 157806],
      taux: [11, 30, 41, 45],
    },
    calculNombreParts: {
      bonusParentIsole: {
        auMoinsUnChargePrincipale: 0.5,
        zeroChargePrincipaleUnPartage: 0.25,
        zeroChargeprincipaleDeuxOuPlusPartage: 0.5,
      },
      partsParPACAuDela: 1,
      partsParPACChargePartagee: {
        deuxOuPlusChargePrincipale: { suivants: 0.5 },
        unChargePrincipale: { premier: 0.25, suivants: 0.5 },
        zeroChargePrincipale: { deuxPremiers: 0.25, suivants: 0.5 },
      },
      partsSelonNombrePAC: [
        {
          celibataire: 1, divorce: 1, mariesOuPacses: 2, veuf: 1,
        },
        {
          celibataire: 1.5, divorce: 1.5, mariesOuPacses: 2.5, veuf: 2.5,
        },
        {
          celibataire: 2, divorce: 2, mariesOuPacses: 3, veuf: 3,
        },
        {
          celibataire: 3, divorce: 3, mariesOuPacses: 4, veuf: 4,
        },
        {
          celibataire: 4, divorce: 4, mariesOuPacses: 5, veuf: 5,
        },
        {
          celibataire: 5, divorce: 5, mariesOuPacses: 6, veuf: 6,
        },
        {
          celibataire: 6, divorce: 6, mariesOuPacses: 7, veuf: 7,
        },
      ],
    },
    decote: {
      seuil_celib: 777,
      seuil_couple: 1286,
      taux: 45.25,
    },
    plafond_qf: {
      abat_dom: {
        plaf_GuadMarReu: 2450,
        plaf_GuyMay: 4050,
        taux_GuadMarReu: 30,
        taux_GuyMay: 40,
      },
      celib: 936,
      celib_enf: 3697,
      maries_ou_pacses: 1567,
      reduc_postplafond: 1562,
      reduc_postplafond_veuf: 1745,
    },
  },
};

export const base = (state = BASE_DEFAULT_STATE) => state;
