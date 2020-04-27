import merge from "lodash/merge";

export function formatReforme(reforme) {
  return merge({}, reforme, {
    impot_revenu: {
      bareme: {
        taux: reforme.impot_revenu.bareme.taux.map(taux => taux / 100),
      },
      decote: {
        taux: reforme.impot_revenu.decote.taux / 100,
      },
      plafond_qf: {
        abat_dom: {
          taux_GuadMarReu: reforme.impot_revenu.plafond_qf.abat_dom.taux_GuadMarReu / 100,
          taux_GuyMay: reforme.impot_revenu.plafond_qf.abat_dom.taux_GuyMay / 100,
        },
      },
    },
  });
}
