export interface RemoveCasTypeAction {
  type: "REMOVE_CAS_TYPE";
  index: number;
}

export function removeCasType(index: number): RemoveCasTypeAction {
  return {
    index,
    type: "REMOVE_CAS_TYPE",
  };
}
