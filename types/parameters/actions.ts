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

export type ParameterAction =
  UpdateParameterAction |
  AddNewLineInParameterArrayAction |
  RemoveLastLineInParameterArrayAction;
