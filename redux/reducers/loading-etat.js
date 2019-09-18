const DEFAULT_STATE = "computed";

const loadingEtat = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onLoadingEtatStart":
    return "loading";
  case "onLoadingEtatComplete":
    return "computed";
  case "onDisabledEtat":
    return "disabled";
  default:
    return state;
  }
};

export default loadingEtat;
