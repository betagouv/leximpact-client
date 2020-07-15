// eslint-disable-next-line no-unused-vars
import { AsyncState, DotationsState } from "../interfaces";

const DEFAULT_STATE: AsyncState<DotationsState> = {
  isFetching: false,
  state: null,
};

export function dotations(
  state: AsyncState<DotationsState> = DEFAULT_STATE,
): AsyncState<DotationsState> {
  return state;
}
