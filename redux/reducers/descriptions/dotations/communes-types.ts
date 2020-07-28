export interface Commune {
  code: string;
  name: string;
  departement: string;
  habitants: number;
  potentielFinancier: number;
}

const DEFAULT_STATE: Commune[] = [
  {
    code: "76384",
    departement: "Seine-Maritime",
    habitants: 9131,
    name: "Lillebonne",
    potentielFinancier: 2188.612857,
  },
  {
    code: "76214",
    departement: "Seine-Maritime",
    habitants: 272,
    name: "Dénestanville",
    potentielFinancier: 706.242647,
  },
  {
    code: "77186",
    departement: "Seine-et-Marne",
    habitants: 15841,
    name: "Fontainebleau",
    potentielFinancier: 1110.296193,
  },
];

export function communesTypes(state: Commune[] = DEFAULT_STATE): Commune[] {
  return state;
}
