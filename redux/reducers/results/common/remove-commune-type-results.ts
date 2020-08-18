// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../interfaces";

export function removeCommuneTypeResults(state: DotationsState, index: number): DotationsState {
  const newDsrCommunes = [...state.communes.dsr.communes];
  newDsrCommunes.splice(index, 1);
  const newDsuCommunes = [...state.communes.dsu.communes];
  newDsuCommunes.splice(index, 1);

  return {
    ...state,
    communes: {
      ...state.communes,
      dsr: {
        ...state.communes.dsr,
        communes: newDsrCommunes,
      },
      dsu: {
        ...state.communes.dsu,
        communes: newDsuCommunes,
      },
    },
  };
}
