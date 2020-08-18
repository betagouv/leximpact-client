// eslint-disable-next-line no-unused-vars
import { Commune } from "../../reducers/descriptions/dotations";

export interface AddCommuneTypeAction {
  type: "ADD_COMMUNE_TYPE";
  commune: Commune;
}

export function addCommuneType(commune: Commune): AddCommuneTypeAction {
  return {
    commune,
    type: "ADD_COMMUNE_TYPE",
  };
}
