export const PLF_DEFAULT_STATE = {
  impot_revenu: {
    bareme: {
      seuils: [10064, 25659, 73369, 157806],
      taux: [11, 30, 41, 45],
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

export const plf = (state = null) => state;
