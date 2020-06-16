// eslint-disable-next-line no-unused-vars
import { AddNewLineInParameterArrayAction } from "../../../types/parameters";

export function addNewLineInParameterArray(path: string): AddNewLineInParameterArrayAction {
  return {
    path,
    type: "ADD_NEW_LINE_IN_PARAMETER_ARRAY",
  };
}
