// eslint-disable-next-line no-unused-vars
import { Action } from "../../../actions";

export interface Commune {
  code: string;
  name: string;
  departement: string;
  habitants: number;
  potentielFinancierParHab: number;
}

const DEFAULT_STATE: Commune[] = [
  {
    code: "76384",
    departement: "Seine-Maritime",
    habitants: 9101,
    name: "LILLEBONNE",
    potentielFinancierParHab: 2188.612857,
  },
  {
    code: "76214",
    departement: "Seine-Maritime",
    habitants: 262,
    name: "DÉNESTANVILLE",
    potentielFinancierParHab: 706.242647,
  },
  {
    code: "77186",
    departement: "Seine-et-Marne",
    habitants: 15417,
    name: "FONTAINEBLEAU",
    potentielFinancierParHab: 1110.296193,
  },
  {
    code: "01012",
    departement: "Ain",
    habitants: 330,
    name: "ARANC",
    potentielFinancierParHab: 820.251948,
  },
];

export function communesTypes(
  state: Commune[] = DEFAULT_STATE, action: Action,
): Commune[] {
  switch (action.type) {
  case "ADD_COMMUNE_TYPE":
    if (state.find(commune => commune.code === action.commune.code)) {
      return state;
    }
    return [
      ...state,
      action.commune,
    ];
  case "REMOVE_COMMUNE_TYPE":
    const newState = [...state];
    newState.splice(action.index, 1);
    return newState;
  default:
    return state;
  }
}
