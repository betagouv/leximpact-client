export type AsyncItems<T> =
{
  isFetching: true;
  items: null;
} |
{
  isFetching: false;
  items: T;
};
