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

const updateGenerique = (prevState, name, value) => {
  const identifier = name;
  const regex = RegExp("^[0-9a-zA-Z_.]+$");
  const shouldUpdate = regex.test(identifier);
  if (!shouldUpdate) return prevState;
  // Tous les noms de variables qui contiennent taux
  // sont divisés par 100.
  const regextaux = RegExp("taux");
  const facteur = regextaux.test(identifier) ? 0.01 : 1;
  const nextValue = value * facteur;
  set(prevState, `impot_revenu.${identifier}`, nextValue);
  return prevState;
};

const addTranche = (prevState) => {
  const seuils = get(prevState, "impot_revenu.bareme.seuils");
  const newbt = seuils.length + 1;

  const lastIndex = newbt - 2;

  let lastSeuil = get(prevState, `impot_revenu.bareme.seuils.${lastIndex}`);
  lastSeuil += 1;
  const nextSeuil = seuils.concat(lastSeuil);
  set(prevState, "impot_revenu.bareme.seuils", nextSeuil);

  const taux = get(prevState, "impot_revenu.bareme.taux");
  const lastTaux = get(prevState, `impot_revenu.bareme.taux.${lastIndex}`);
  const nextTaux = taux.concat(lastTaux);
  set(prevState, "impot_revenu.bareme.taux", nextTaux);
  return prevState;
};

const removeTranche = (prevState) => {
  const seuils = get(prevState, "impot_revenu.bareme.seuils");
  const newnbt = seuils.length - 1;
  if (newnbt <= 0) return prevState;

  const nextSeuils = seuils.slice(0, newnbt);
  set(prevState, "impot_revenu.bareme.seuils", nextSeuils);

  const taux = get(prevState, "impot_revenu.bareme.taux");
  const nextTaux = taux.slice(0, newnbt);
  set(prevState, "impot_revenu.bareme.taux", nextTaux);
  return prevState;
};

const reforme = (state = DEFAULT_STATE, action) => {
  const { name, value } = action || {};
  const nextState = cloneDeep(state);
  switch (action.type) {
  case "onAddTranche":
    return addTranche(nextState);
  case "onRemoveTranche":
    return removeTranche(nextState);
  case "onUpdateReformeBareme":
    return updateBareme(nextState, name, value);
  case "onUpdateReformeTaux":
    return updateTaux(nextState, name, value);
  case "onUpdateReformeDecote":
    return updateGenerique(nextState, name, value);
  case "onUpdateReformePlafond":
    return updateGenerique(nextState, name, value);
  default:
    return nextState;
  }
};

export default reforme;
