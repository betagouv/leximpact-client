export const loadingEtatComplete = () => ({
  type: "onLoadingEtatComplete",
});

export const loadingEtatStart = () => ({
  type: "onLoadingEtatStart",
});

export const loadingEtatError = error => ({
  error,
  type: "onLoadingEtatError",
});
