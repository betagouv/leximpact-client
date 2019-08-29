import { transformDataToCarteImpact } from "../../components/utils/transform-data-to-carte-impact";

// le default state est rempli via les cookies
// grace a la lib "redux-cookies-middleware"
// voir le fichier "./pages/_app.jsx"
const DEFAULT_STATE = [];

// const parseCarteImpact = (carteImpact) => {
//   const { persons, revenusNetMensuel } = carteImpact;
//   const nombreDeclarants = persons.parents.length;
//   const nombrePersonnesACharge = persons.childs.length;
//   const revenu = revenusNetMensuel * 12;
//   return {
//     nombre_declarants: nombreDeclarants,
//     nombre_declarants_retraites: 0,
//     nombre_personnes_a_charge: nombrePersonnesACharge,
//     outre_mer: 0,
//     revenu,
//   };
// };

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
  const nextState = [...state, action.data];
  return nextState;
};

const casTypes = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onInitializeCasTypes":
    if (action.token) return state;
    return transformDataToCarteImpact(action.payload);
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

export default casTypes;
