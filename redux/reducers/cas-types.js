import { cloneDeep, set } from "lodash";

const DEFAULT_CAS_TYPES = [
  {
    nombre_declarants: 1,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 0,
    outre_mer: 0,
    revenu: 15600,
  },
  {
    nombre_declarants: 1,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 1,
    outre_mer: 0,
    revenu: 31200,
  },
  {
    nombre_declarants: 2,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 0,
    outre_mer: 0,
    revenu: 38400,
  },
  {
    nombre_declarants: 2,
    nombre_declarants_retraites: 2,
    nombre_personnes_a_charge: 0,
    outre_mer: 0,
    revenu: 15600,
  },
  {
    nombre_declarants: 2,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 2,
    outre_mer: 0,
    revenu: 55200,
  },
  {
    nombre_declarants: 2,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: 2,
    outre_mer: 1,
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

const updateCasTypeOutreMer = (
  state,
  { casTypeIndex: index, casTypeOutreMerIndex: value },
) => {
  const nextState = cloneDeep(state);
  set(nextState, `${index}.outre_mer`, value);
  return nextState;
};

const casTypes = (state = DEFAULT_CAS_TYPES, action) => {
  switch (action.type) {
  case "onUpdateCasTypeOutreMer":
    return updateCasTypeOutreMer(state, action);
  case "onUpdateCasTypeRevenusAnnuel":
    return updateCasTypeRevenusAnnuel(state, action);
  case "onCasTypesLoaded":
    return action.payload;
  default:
    return state;
  }
};

export default casTypes;
