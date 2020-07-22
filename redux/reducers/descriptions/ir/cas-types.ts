import { cloneDeep } from "lodash";

import { transformDataToCasTypes } from "../../../../components/common/utils/transform-data-to-cas-types";

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

// le default state est rempli via les cookies
// grace a la lib "redux-cookies-middleware"
// voir le fichier "./pages/_app.jsx"
const DEFAULT_STATE: CasType[] = [];

// lors de la connexion de l'user à la page
// https://<domain>/connection/<token>
// l'application va:
// - enegistrer les tokens par défaut
// - enregistrer le token de connection
const removeCasType = (state, action) => {
  const nextState = state.filter((obj, index) => index !== action.index);
  return nextState;
};

const updateCasType = (state, action) => {
  const nextState = state.map((obj, index) => {
    const shouldUpdateThisCasType = index === action.index;
    if (!shouldUpdateThisCasType) return obj;
    return action.data;
  });
  return nextState;
};

const createCasType = (state, action) => {
  let nextState = cloneDeep(state);
  nextState = [...nextState, action.data];
  return nextState;
};

export const casTypes = (state: CasType[] = DEFAULT_STATE, action): CasType[] => {
  switch (action.type) {
  case "onConnexionTokenLogout":
    return [];
  case "onInitializeCasTypes":
    if (action.token) return state;
    return transformDataToCasTypes(action.payload);
  case "onUpdateCasType":
    return updateCasType(state, action);
  case "onCreateCasType":
    return createCasType(state, action);
  case "onRemoveCasType":
    return removeCasType(state, action);
  default:
    return state;
  }
};
