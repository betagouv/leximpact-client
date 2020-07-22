interface Strate {
  // Borne supérieure de la strate
  // Par convention, -1 est considéré comme l'infini (absence de borne supérieure).
  habitants: number;
  // Représentation de la strate dans la population totale
  partPopTotale: number;
  // Potentiel financier moyen par habitant
  potentielFinancierMoyenParHab: number;
}

const DEFAULT_STATE: Strate[] = [
  {
    habitants: 2000,
    partPopTotale: 0.22389436108802008,
    potentielFinancierMoyenParHab: 806.3499063581453,
  },
  {
    habitants: 4000,
    partPopTotale: 0.10856365997591765,
    potentielFinancierMoyenParHab: 939.0537604104303,
  },
  {
    habitants: 6000,
    partPopTotale: 0.07158035189319084,
    potentielFinancierMoyenParHab: 1026.9505233119069,
  },
  {
    habitants: 8000,
    partPopTotale: 0.04999598238894948,
    potentielFinancierMoyenParHab: 1058.6630157744887,
  },
  {
    habitants: 10000,
    partPopTotale: 0.03996589802203137,
    potentielFinancierMoyenParHab: 1091.3171801542212,
  },
  {
    habitants: -1,
    partPopTotale: 0.5059997466318906,
    potentielFinancierMoyenParHab: 1286.9993111322344,
  },
];

export function strates(state: Strate[] = DEFAULT_STATE): Strate[] {
  return state;
}
