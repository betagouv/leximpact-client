import { cloneDeep, get, set } from "lodash";

import { BASE_IR_DEFAULT_STATE } from "../base";
// eslint-disable-next-line no-unused-vars
import { IRState } from "../interfaces";
import { PLF_IR_DEFAULT_STATE } from "../plf";

const AMENDEMENT_IR_DEFAULT_STATE = cloneDeep(PLF_IR_DEFAULT_STATE);

const changeValueArray = (arrayToChange, indexToChange, newValue) => {
  // renvoie arrayToChange avec la valeur située
  // à l'index "indexToChange" changé en "newValue"
  const list = arrayToChange.map((prevValue, numeroItem) => {
    const isCurrentItemsIndex = numeroItem === indexToChange;
    return isCurrentItemsIndex ? newValue : prevValue;
  });
  return list;
};

const updateTaux = (prevState: IRState, name, value): IRState => {
  const identifier = parseInt(name.substring(4), 10);
  let list = get(prevState, "bareme.taux");
  list = changeValueArray(list, identifier, value);
  set(prevState, "bareme.taux", list);
  return prevState;
};

const updateBareme = (prevState: IRState, name, value): IRState => {
  if (Number.isNaN(value)) return prevState;
  const identifier = parseInt(name.substring(5), 10);
  let list = get(prevState, "bareme.seuils");
  list = changeValueArray(list, identifier, parseInt(value, 10));
  set(prevState, "bareme.seuils", list);
  return prevState;
};

const updateGenerique = (prevState: IRState, name, value): IRState => {
  const identifier = name;
  const regex = RegExp("^[0-9a-zA-Z_.]+$");
  const shouldUpdate = regex.test(identifier);
  if (!shouldUpdate) return prevState;
  set(prevState, identifier, value);
  return prevState;
};

const addTranche = (prevState: IRState): IRState => {
  const seuils = get(prevState, "bareme.seuils");
  const newbt = seuils.length + 1;

  const lastIndex = newbt - 2;

  let lastSeuil = get(prevState, `bareme.seuils.${lastIndex}`);
  lastSeuil += 1;
  const nextSeuil = seuils.concat(lastSeuil);
  set(prevState, "bareme.seuils", nextSeuil);

  const taux = get(prevState, "bareme.taux");
  const lastTaux = get(prevState, `bareme.taux.${lastIndex}`);
  const nextTaux = taux.concat(lastTaux);
  set(prevState, "bareme.taux", nextTaux);
  return prevState;
};

const removeTranche = (prevState: IRState): IRState => {
  const seuils = get(prevState, "bareme.seuils");
  const newnbt = seuils.length - 1;
  if (newnbt <= 0) return prevState;

  const nextSeuils = seuils.slice(0, newnbt);
  set(prevState, "bareme.seuils", nextSeuils);

  const taux = get(prevState, "bareme.taux");
  const nextTaux = taux.slice(0, newnbt);
  set(prevState, "bareme.taux", nextTaux);
  return prevState;
};

export const ir = (state: IRState = AMENDEMENT_IR_DEFAULT_STATE, action): IRState => {
  const { name, value } = action || {};
  // TODO: remove this cloneDeep which causes performance issues.
  const nextState = cloneDeep(state);
  switch (action.type) {
  case "onArticleAddTranche":
    return addTranche(nextState);
  case "onArticleRemoveTranche":
    return removeTranche(nextState);
  case "onUpdateReformeBareme":
    return updateBareme(nextState, name, value);
  case "onUpdateReformeTaux":
    return updateTaux(nextState, name, value);
  case "onUpdateReformeDecote":
    return updateGenerique(nextState, name, value);
  case "onUpdateReformePlafond":
    return updateGenerique(nextState, name, value);
  case "RESET_AMENDEMENT_TO_PLF":
    if (action.topic === "impot_revenu") {
      return cloneDeep(PLF_IR_DEFAULT_STATE);
    }
    return state;
  case "RESET_AMENDEMENT_TO_BASE":
    if (action.topic === "impot_revenu") {
      return cloneDeep(BASE_IR_DEFAULT_STATE);
    }
    return state;
  default:
    return nextState;
  }
};
