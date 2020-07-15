import { getIn, setIn } from "immutable";
import { combineReducers } from "redux";

import {
  // eslint-disable-next-line no-unused-vars
  AddNewLineInParameterArrayAction,
  // eslint-disable-next-line no-unused-vars
  RemoveLastLineInParameterArrayAction,
  // eslint-disable-next-line no-unused-vars
  UpdateParameterAction,
} from "../../../actions";
// eslint-disable-next-line no-unused-vars
import { ParametersState } from "../interfaces";
import { dotations } from "./dotations";
import { ir } from "./ir";


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

type AmendementAction =
  UpdateParameterAction |
  AddNewLineInParameterArrayAction |
  RemoveLastLineInParameterArrayAction;

export function amendement(state: ParametersState, action: AmendementAction): ParametersState {
  // state2 might be equal to state.
  const state2 = combineReducers({
    dotations,
    impot_revenu: ir,
  })(state, action);

  switch (action.type) {
  case "UPDATE_PARAMETER":
    return updateParameter(
      state2,
      action.path,
      action.value,
    );
  case "ADD_NEW_LINE_IN_PARAMETER_ARRAY":
    return addNewLineInParameterArray(
      state2,
      action.path,
    );
  case "REMOVE_LAST_LINE_IN_PARAMETER_ARRAY":
    return removeLastLineInParameterArray(
      state2,
      action.path,
    );
  default:
    return state2;
  }
}
