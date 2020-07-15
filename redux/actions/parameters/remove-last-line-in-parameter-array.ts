export interface RemoveLastLineInParameterArrayAction {
  type: "REMOVE_LAST_LINE_IN_PARAMETER_ARRAY",
  path: string;
}
export function removeLastLineInParameterArray(path: string): RemoveLastLineInParameterArrayAction {
  return {
    path,
    type: "REMOVE_LAST_LINE_IN_PARAMETER_ARRAY",
  };
}
