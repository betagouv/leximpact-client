// eslint-disable-next-line no-unused-vars
import { DotationsDiffState } from "../interfaces";

export function removeCommuneTypeDiffResults(
  state: DotationsDiffState, index: number,
): DotationsDiffState {
  const newDsrCommunes = [...state.communes.dsr.communes];
  newDsrCommunes.splice(index, 1);
  const newDsuCommunes = [...state.communes.dsu.communes];
  newDsuCommunes.splice(index, 1);
  const newDgfCommunes = [...state.communes.dgf.communes];
  newDgfCommunes.splice(index, 1);

  return {
    ...state,
    communes: {
      ...state.communes,
      dgf: {
        ...state.communes.dgf,
        communes: newDgfCommunes,
      },
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
