import { getIn, setIn } from "immutable";
import { cloneDeep, get, set } from "lodash";
import {
  AddNewLineInParameterArrayAction,
  ParametersState,
  RemoveLastLineInParameterArrayAction,
  UpdateParameterAction,
} from "types/parameters";

import { BASE_DEFAULT_STATE } from "./base";
import { PLF_DEFAULT_STATE } from "./plf";

const DEFAULT_STATE = cloneDeep(PLF_DEFAULT_STATE);

const changeValueArray = (arrayToChange, indexToChange, newValue) => {
  // renvoie arrayToChange avec la valeur située
  // à l'index "indexToChange" changé en "newValue"
  const list = arrayToChange.map((prevValue, numeroItem) => {
    const isCurrentItemsIndex = numeroItem === indexToChange;
    return isCurrentItemsIndex ? newValue : prevValue;
  });
  return list;
};

const updateTaux = (prevState: ParametersState, name, value): ParametersState => {
  const identifier = parseInt(name.substring(4), 10);
  let list = get(prevState, "impot_revenu.bareme.taux");
  list = changeValueArray(list, identifier, value);
  set(prevState, "impot_revenu.bareme.taux", list);
  return prevState;
};

const updateBareme = (prevState: ParametersState, name, value): ParametersState => {
  if (Number.isNaN(value)) return prevState;
  const identifier = parseInt(name.substring(5), 10);
  let list = get(prevState, "impot_revenu.bareme.seuils");
  list = changeValueArray(list, identifier, parseInt(value, 10));
  set(prevState, "impot_revenu.bareme.seuils", list);
  return prevState;
};

const updateGenerique = (prevState: ParametersState, name, value): ParametersState => {
  const identifier = name;
  const regex = RegExp("^[0-9a-zA-Z_.]+$");
  const shouldUpdate = regex.test(identifier);
  if (!shouldUpdate) return prevState;
  set(prevState, `impot_revenu.${identifier}`, value);
  return prevState;
};

const addTranche = (prevState: ParametersState): ParametersState => {
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

const removeTranche = (prevState: ParametersState): ParametersState => {
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

const updateParameter = (state: ParametersState, path: string, value: any): ParametersState => setIn(state, path.split("."), value);

const addNewLineInParameterArray = (state: ParametersState, path: string): ParametersState => {
  const propertyNames = path.split(".");
  const array = getIn(state, propertyNames, undefined);
  if (!Array.isArray(array)) {
    throw new Error(`The value at ${path} should be an array. Got: ${typeof array}`);
  }
  const newLine = { ...array[array.length - 1] };
  return setIn(state, propertyNames, [...array, newLine]);
};

const removeLastLineInParameterArray = (state: ParametersState, path: string): ParametersState => {
  const propertyNames = path.split(".");
  const array = getIn(state, propertyNames, undefined);
  if (!Array.isArray(array)) {
    throw new Error(`The value at ${path} should be an array. Got: ${typeof array}`);
  }
  if (array.length === 1) {
    return state;
  }
  const newArray = array.slice(0, array.length - 1);
  return setIn(state, propertyNames, newArray);
};

export const amendement = (state: ParametersState = DEFAULT_STATE, action): ParametersState => {
  const { name, value } = action || {};
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
    return setIn(state, [action.topic], cloneDeep(PLF_DEFAULT_STATE[action.topic]));
  case "RESET_AMENDEMENT_TO_BASE":
    return setIn(state, [action.topic], cloneDeep(BASE_DEFAULT_STATE[action.topic]));
  case "UPDATE_PARAMETER":
    return updateParameter(
      state,
      (action as UpdateParameterAction).path,
      (action as UpdateParameterAction).value,
    );
  case "ADD_NEW_LINE_IN_PARAMETER_ARRAY":
    return addNewLineInParameterArray(
      state,
      (action as AddNewLineInParameterArrayAction).path,
    );
  case "REMOVE_LAST_LINE_IN_PARAMETER_ARRAY":
    return removeLastLineInParameterArray(
      state,
      (action as RemoveLastLineInParameterArrayAction).path,
    );
  default:
    return nextState;
  }
};
