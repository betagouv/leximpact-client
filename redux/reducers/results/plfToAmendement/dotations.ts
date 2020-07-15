// eslint-disable-next-line no-unused-vars
import { AsyncState, DotationsDiffState } from "../interfaces";

const DEFAULT_STATE: AsyncState<DotationsDiffState> = {
  isFetching: false,
  state: null,
};

export function dotations(
  state: AsyncState<DotationsDiffState> = DEFAULT_STATE,
): AsyncState<DotationsDiffState> {
  return state;
}
