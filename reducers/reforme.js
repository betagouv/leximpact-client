/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2],
  react/jsx-indent-props: [2, 2],
  max-nested-callbacks: [2, { "max": 4 }],
  react/jsx-closing-bracket-location: [2, {
    "nonEmpty": false,
    "selfClosing": false
  }],
  "jsx-a11y/anchor-is-valid": [2, {
    "components": ["Link"],
    "specialLink": ["hrefLeft", "hrefRight"]
  }],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }]
*/
import { cloneDeep, get, set } from "lodash";

import { REFORME_BASE_DEFAULT_STATE } from "./reforme-base";

const DEFAULT_STATE = cloneDeep(REFORME_BASE_DEFAULT_STATE);

const changeValueArray = (arrayToChange, indexToChange, newValue) => {
  // renvoie arrayToChange avec la valeur située
  // à l'index "indexToChange" changé en "newValue"
  const list = arrayToChange.map((prevValue, numeroItem) => {
    const isCurrentItemsIndex = numeroItem === indexToChange;
    return isCurrentItemsIndex ? newValue : prevValue;
  });
  return list;
};

const updateTaux = (prevState, name, value) => {
  const identifier = parseInt(name.substring(4), 10);
  const nextValue = value * 0.01;
  let list = get(prevState, "impot_revenu.bareme.taux");
  list = changeValueArray(list, identifier, nextValue);
  set(prevState, "impot_revenu.bareme.taux", list);
  return prevState;
};

const updateBareme = (prevState, name, value) => {
  if (Number.isNaN(value)) return prevState;
  const identifier = parseInt(name.substring(5), 10);
  let list = get(prevState, "impot_revenu.bareme.seuils");
  list = changeValueArray(list, identifier, parseInt(value, 10));
  set(prevState, "impot_revenu.bareme.seuils", list);
  return prevState;
};

const updatePlafond = (prevState, name, value) => {
  const identifier = name.substring(10);
  const regex = RegExp("^[0-9a-zA-Z_.]+$");
  const shouldUpdate = regex.test(identifier);
  if (!shouldUpdate) return prevState;
  // Tous les noms de variables qui contiennent taux
  // sont divisés par 100.
  const regextaux = RegExp("taux");
  const facteur = regextaux.test(identifier) ? 0.01 : 1;
  const nextValue = value * facteur;
  set(prevState, `impot_revenu.plafond_qf${identifier}`, nextValue);
  return prevState;
};

const updateDecote = (prevState, name, value) => {
  let nextValue = null;
  const identifier = name.substring(7);
  if (identifier === "") {
    nextValue = parseInt(value, 10);
    set(prevState, "impot_revenu.decote.seuil_couple", nextValue);
  }
  if (identifier === "seuil_celib") {
    nextValue = parseInt(value, 10);
    set(prevState, "impot_revenu.decote.seuil_celib", nextValue);
  }
  if (identifier === "taux") {
    nextValue = Math.round(parseFloat(value) * 10) / 1000;
    set(prevState, "impot_revenu.decote.taux", nextValue);
  }
  return prevState;
};

const reforme = (state = DEFAULT_STATE, action) => {
  const { name, value } = action || {};
  const nextState = cloneDeep(state);
  switch (action.type) {
  case "onUpdateReformeBareme":
    return updateBareme(nextState, name, value);
  case "onUpdateReformeTaux":
    return updateTaux(nextState, name, value);
  case "onUpdateReformeDecote":
    return updateDecote(nextState, name, value);
  case "onUpdateReformePlafond":
    return updatePlafond(nextState, name, value);
  default:
    return nextState;
  }
};

export default reforme;
