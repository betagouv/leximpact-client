// eslint-disable-next-line no-unused-vars
import { CasType } from "../../../reducers/descriptions/ir";

export interface AddCasTypeAction {
  type: "ADD_CAS_TYPE";
  casType: any;
}

export function addCasType(casType: CasType): AddCasTypeAction {
  return {
    casType,
    type: "ADD_CAS_TYPE",
  };
}
