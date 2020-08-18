export interface RemoveCommuneTypeAction {
  type: "REMOVE_COMMUNE_TYPE";
  index: number;
}

export function removeCommuneType(index: number): RemoveCommuneTypeAction {
  return {
    index,
    type: "REMOVE_COMMUNE_TYPE",
  };
}
