export interface AsyncState<T> {
  isFetching: boolean;
  state: T | null;
}
