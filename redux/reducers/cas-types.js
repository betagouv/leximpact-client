import { cloneDeep, set } from "lodash";
// le default state est rempli grace a la lib "redux-cookies-middleware"
// voir le fichier "./pages/_app.jsx"
const DEFAULT_STATE = [];

const parseCarteImpact = (carteImpact) => {
  const { persons, revenusNetMensuel } = carteImpact;
  const nombreDeclarants = persons.parents.length;
  const nombrePersonnesACharge = persons.childs.length;
  const revenu = revenusNetMensuel * 12;
  return {
    nombre_declarants: nombreDeclarants,
    nombre_declarants_retraites: 0,
    nombre_personnes_a_charge: nombrePersonnesACharge,
    outre_mer: 0,
    revenu,
  };
};

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

// lors de la connexion de l'user à la page
// https://<domain>/connection/<token>
// l'application va:
// - enegistrer les tokens par défaut
// - enregistrer le token de connection
const casTypes = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onCasTypesLoaded":
    return (action.token && state) || cloneDeep(action.payload);
  case "onUpdateCasTypeOutreMer":
    return updateCasTypeOutreMer(state, action);
  case "onUpdateCasTypeRevenusAnnuel":
    return updateCasTypeRevenusAnnuel(state, action);
  case "onAddCarteImpact":
    return [...state, parseCarteImpact(action.data)];
  case "onEditCarteImpact":
    return cloneDeep(state);
  case "onRemoveCarteImpact":
    return state.filter((obj, index) => index !== action.index);
  default:
    return state;
  }
};

export default casTypes;
