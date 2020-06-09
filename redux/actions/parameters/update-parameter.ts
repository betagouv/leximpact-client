import { UpdateParameterAction } from "types/parameters";

export function updateParameter(path: string, value: any): UpdateParameterAction {
  return {
    path,
    type: "UPDATE_PARAMETER",
    value,
  };
}
