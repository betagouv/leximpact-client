/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }]
*/
import { cloneDeep, set } from "lodash";

const DEFAULT_CAS_TYPES = [
  {
    outre_mer: 0,
    nombre_declarants: 1,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 0,
    revenu: 15600,
  },
  {
    outre_mer: 0,
    nombre_declarants: 1,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 1,
    revenu: 31200,
  },
  {
    outre_mer: 0,
    nombre_declarants: 2,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 0,
    revenu: 38400,
  },
  {
    outre_mer: 0,
    nombre_declarants: 2,
    nombre_declarants_retraites: 2,
    nombre_personnes_a_charge: 0,
    revenu: 15600,
  },
  {
    outre_mer: 0,
    nombre_declarants: 2,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 2,
    revenu: 55200,
  },
  {
    outre_mer: 1,
    nombre_declarants: 2,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 2,
    revenu: 55200,
  },
];

const updateCasTypeRevenusAnnuel = (
  state,
  { casTypeIndex: index, casTypeRevenusAnnuel: value },
) => {
  const nextState = cloneDeep(state);
  set(nextState, `${index}.revenu`, value);
  return nextState;
};

export const casTypesIsLoading = (state = false, action) => {
  switch (action.type) {
  case "onCasTypesLoadingStart":
    return true;
  case "onCasTypesLoadingComplete":
    return false;
  default:
    return state;
  }
};

export const casTypes = (state = DEFAULT_CAS_TYPES, action) => {
  switch (action.type) {
  case "onUpdateCasTypeRevenusAnnuel":
    return updateCasTypeRevenusAnnuel(state, action);
  case "onCasTypesLoaded":
    return action.payload;
  default:
    return state;
  }
};
