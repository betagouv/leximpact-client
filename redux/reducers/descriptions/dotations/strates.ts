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
    habitants: 100000,
    partPopTotale: 28,
    potentielFinancierMoyenParHab: 28,
  },
  {
    habitants: 200000,
    partPopTotale: 14,
    potentielFinancierMoyenParHab: 12,
  },
  {
    habitants: -1,
    partPopTotale: 2,
    potentielFinancierMoyenParHab: 67,
  },
];

export function strates(state: Strate[] = DEFAULT_STATE): Strate[] {
  return state;
}
