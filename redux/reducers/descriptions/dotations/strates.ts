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
    habitants: 500,
    partPopTotale: 0.0603242951533041,
    potentielFinancierMoyenParHab: 761.7826724474608,
  },
  {
    habitants: 1000,
    partPopTotale: 0.06914938760024632,
    potentielFinancierMoyenParHab: 782.5455513907237,
  },
  {
    habitants: 2000,
    partPopTotale: 0.09442067833446965,
    potentielFinancierMoyenParHab: 852.2566252810507,
  },
  {
    habitants: 3500,
    partPopTotale: 0.08770935195678785,
    potentielFinancierMoyenParHab: 925.6886965509234,
  },
  {
    habitants: 5000,
    partPopTotale: 0.06045727334390467,
    potentielFinancierMoyenParHab: 1015.4714047751249,
  },
  {
    habitants: 7500,
    partPopTotale: 0.07023460153129624,
    potentielFinancierMoyenParHab: 1040.0137079111325,
  },
  {
    habitants: 10000,
    partPopTotale: 0.05170466544810059,
    potentielFinancierMoyenParHab: 1090.265738569407,
  },
  {
    habitants: 15000,
    partPopTotale: 0.0668326356482810,
    potentielFinancierMoyenParHab: 1123.4955020395332,
  },
  {
    habitants: 20000,
    partPopTotale: 0.04571005465626551,
    potentielFinancierMoyenParHab: 1169.6430002129202,
  },
  {
    habitants: 35000,
    partPopTotale: 0.09845010545955825,
    potentielFinancierMoyenParHab: 1158.5360156065703,
  },
  {
    habitants: 50000,
    partPopTotale: 0.05627962806027772,
    potentielFinancierMoyenParHab: 1307.0612684679647,
  },
  {
    habitants: 75000,
    partPopTotale: 0.05535338476992493,
    potentielFinancierMoyenParHab: 1260.4400940514536,
  },
  {
    habitants: 100000,
    partPopTotale: 0.03221468423361938,
    potentielFinancierMoyenParHab: 1427.793798915907,
  },
  {
    habitants: 200000,
    partPopTotale: 0.06327522500625225,
    potentielFinancierMoyenParHab: 1206.2333616937012,
  },
  {
    habitants: -1,
    partPopTotale: 0.0878840287977115,
    potentielFinancierMoyenParHab: 1626.706946412668,
  },
].map(e => ({ ...e, partPopTotale: e.partPopTotale * 100 }));

export function strates(state: Strate[] = DEFAULT_STATE): Strate[] {
  return state;
}
