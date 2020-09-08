// eslint-disable-next-line no-unused-vars
import { CasType } from "../../../reducers/descriptions/ir";

export interface UpdateCasTypeAction {
  type: "UPDATE_CAS_TYPE";
  index: number;
  casType: CasType;
}

export function updateCasType(index: number, casType: CasType): UpdateCasTypeAction {
  return {
    casType,
    index,
    type: "UPDATE_CAS_TYPE",
  };
}
