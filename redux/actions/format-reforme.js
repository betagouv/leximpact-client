export function formatReforme(reforme) {
  return {
    ...reforme,
    impot_revenu: {
      ...reforme.impot_revenu,
      bareme: {
        ...reforme.impot_revenu.bareme,
        taux: reforme.impot_revenu.bareme.taux.map(taux => taux / 100),
      },
      decote: {
        ...reforme.impot_revenu.decote,
        taux: reforme.impot_revenu.decote.taux / 100,
      },
    },
  };
}
