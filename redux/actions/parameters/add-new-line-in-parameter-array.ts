export interface AddNewLineInParameterArrayAction {
  type: "ADD_NEW_LINE_IN_PARAMETER_ARRAY",
  path: string;
}

export function addNewLineInParameterArray(path: string): AddNewLineInParameterArrayAction {
  return {
    path,
    type: "ADD_NEW_LINE_IN_PARAMETER_ARRAY",
  };
}
