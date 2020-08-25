import { transformDataToCasTypes } from "../../../../components/common/utils/transform-data-to-cas-types";
// eslint-disable-next-line no-unused-vars
import { Action } from "../../../actions";

interface Person {
  /* All are actually booleans. */
  ancienCombattant: number;
  chargePartagee: number;
  gender: number;
  invalide: number;
  isChild: number;
  parentIsole: number;
  plus65ans: number;
  veufVeuve: number;
}

export interface CasType {
  name: string;
  // Actually a boolean.
  lieuResidence: number;
  nbCouple: number;
  nbEnfants: number;
  persons: {
    childs: Person[];
    parents: Person[];
  };
  revenusNetMensuel: number;
}

// Cet état est initialisé via "redux-cookies-middleware" dans "./pages/_app.jsx".
const DEFAULT_STATE: CasType[] = [];

// TODO: use proper types for Action
export const casTypes = (state: CasType[] = DEFAULT_STATE, action: Action | any): CasType[] => {
  switch (action.type) {
  case "onConnexionTokenLogout":
    return [];
  case "onInitializeCasTypes":
    if (action.token) return state;
    return transformDataToCasTypes(action.payload);
  case "ADD_CAS_TYPE":
    return [...state, action.casType];
  case "UPDATE_CAS_TYPE":
    return state.map((casType, index) => (index === action.index ? action.casType : casType));
  case "REMOVE_CAS_TYPE":
    const newState = [...state];
    newState.splice(action.index, 1);
    return newState;
  default:
    return state;
  }
};
