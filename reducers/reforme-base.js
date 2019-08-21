export const REFORME_BASE_DEFAULT_STATE = {
  impot_revenu: {
    bareme: {
      seuils: [9964, 27519, 73779, 156244],
      taux: [0.14, 0.3, 0.41, 0.45],
    },
    decote: {
      seuil_celib: 1196,
      seuil_couple: 1970,
      taux: 0.75,
    },
    plafond_qf: {
      abat_dom: {
        taux_GuadMarReu: 0.3,
        plaf_GuadMarReu: 2450,
        taux_GuyMay: 0.4,
        plaf_GuyMay: 4050,
      },
      maries_ou_pacses: 1551,
      celib_enf: 3660,
      celib: 927,
      reduc_postplafond: 1547,
      reduc_postplafond_veuf: 1728,
      reduction_ss_condition_revenus: {
        seuil_maj_enf: 3797,
        seuil1: 18984,
        seuil2: 21036,
        taux: 0.2,
      },
    },
  },
};

const reformeBase = (state = REFORME_BASE_DEFAULT_STATE, action) => {
  // Jamais modifié, utilisé pour montrer l'existant
  // dans les article s'affiche dans les chiffres en jaunes
  switch (action.type) {
  default:
    return state;
  }
};

export default reformeBase;
