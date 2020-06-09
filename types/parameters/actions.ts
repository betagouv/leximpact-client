import { ParametersState } from "./parameters-state";

export interface UpdateParameterAction {
  type: "UPDATE_PARAMETER";
  path: string;
  value: any;
}

export interface AddNewLineInParameterArrayAction {
  type: "ADD_NEW_LINE_IN_PARAMETER_ARRAY",
  path: string;
}

export interface RemoveLastLineInParameterArrayAction {
  type: "REMOVE_LAST_LINE_IN_PARAMETER_ARRAY",
  path: string;
}

export interface ResetAmendementToBaseAction {
  type: "RESET_AMENDEMENT_TO_BASE",
  topic: keyof ParametersState,
}

export interface ResetAmendementToPlfAction {
  type: "RESET_AMENDEMENT_TO_PLF",
  topic: keyof ParametersState,
}

export type ParameterAction =
  UpdateParameterAction |
  AddNewLineInParameterArrayAction |
  RemoveLastLineInParameterArrayAction |
  ResetAmendementToBaseAction |
  ResetAmendementToPlfAction;
