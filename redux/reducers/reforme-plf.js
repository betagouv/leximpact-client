export const REFORME_PLF_DEFAULT_STATE = {
  impot_revenu: {
    bareme: {
      seuils: [10064, 25659, 73369, 157806],
      taux: [0.11, 0.3, 0.41, 0.45],
    },
    decote: {
      seuil_celib: 777,
      seuil_couple: 1286,
      taux: 0.4525,
    },
    plafond_qf: {
      abat_dom: {
        plaf_GuadMarReu: 2450,
        plaf_GuyMay: 4050,
        taux_GuadMarReu: 0.3,
        taux_GuyMay: 0.4,
      },
      celib: 936,
      celib_enf: 3697,
      maries_ou_pacses: 1567,
      reduc_postplafond: 1562,
      reduc_postplafond_veuf: 1745,
      reduction_ss_condition_revenus: {
        seuil1: 18984,
        seuil2: 21036,
        seuil_maj_enf: 3797,
        taux: 0,
      },
    },
  },
};

const reformePLF = (state = REFORME_PLF_DEFAULT_STATE, action) => {
  // Jamais modifié, utilisé pour montrer le PLF proposé
  // dans les article s'affiche dans les chiffres en jaunes
  switch (action.type) {
  default:
    return state;
  }
};

export default reformePLF;
