/* eslint-disable camelcase */
export interface IRState {
  bareme: {
    seuils: number[];
    taux: number[];
  };
  decote: {
    seuil_celib: number;
    seuil_couple: number;
    taux: number;
  };
  plafond_qf: {
    abat_dom: {
      plaf_GuadMarReu: number;
      plaf_GuyMay: number;
      taux_GuadMarReu: number;
      taux_GuyMay: number;
    };
    celib: number;
    celib_enf: number;
    maries_ou_pacses: number;
    reduc_postplafond: number;
    reduc_postplafond_veuf: number;
  };
  calculNombreParts: {
    partsSelonNombrePAC: {
      veuf: number;
      mariesOuPacses: number;
      celibataire: number;
      divorce: number
    }[];
    partsParPACAuDela: number;
    partsParPACChargePartagee: {
      zeroChargePrincipale: {
        deuxPremiers: number;
        suivants: number
      };
      unChargePrincipale: {
        premier: number;
        suivants: number
      };
      deuxOuPlusChargePrincipale: {
        suivants: number
      };
    };
    bonusParentIsole: {
      auMoinsUnChargePrincipale: number;
      zeroChargePrincipaleUnPartage: number;
      zeroChargeprincipaleDeuxOuPlusPartage: number;
    };
  }
}
