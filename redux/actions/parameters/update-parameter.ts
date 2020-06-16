// eslint-disable-next-line no-unused-vars
import { UpdateParameterAction } from "../../../types/parameters";

export function updateParameter(path: string, value: any): UpdateParameterAction {
  return {
    path,
    type: "UPDATE_PARAMETER",
    value,
  };
}
