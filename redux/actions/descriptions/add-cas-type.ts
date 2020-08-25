export interface AddCasTypeAction {
  type: "ADD_CAS_TYPE";
  data: any;
}

export function addCasType(casType: any): AddCasTypeAction {
  return {
    data: casType,
    type: "ADD_CAS_TYPE",
  };
}
