const DEFAULT_STATE = false;

const loadingEtat = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onLoadingEtatStart":
    return true;
  case "onLoadingEtatComplete":
    return false;
  default:
    return state;
  }
};

export default loadingEtat;
