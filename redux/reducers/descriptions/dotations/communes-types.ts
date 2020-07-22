export interface Commune {
  code: string;
  name: string;
  departement: string;
  habitants: number;
  potentielFinancier: number;
}

const DEFAULT_STATE: Commune[] = [
  {
    code: "38527",
    departement: "Isère",
    habitants: 882,
    name: "Vaujany",
    potentielFinancier: 8854.43,
  },
  {
    code: "2A253",
    departement: "Corse-du-sud",
    habitants: 83,
    name: "Quasquara",
    potentielFinancier: 222.69,
  },
];

export function communesTypes(state: Commune[] = DEFAULT_STATE): Commune[] {
  return state;
}
