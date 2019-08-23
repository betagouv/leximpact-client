const DEFAULT_STATE = false;

const carteImpact = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onLoadingStart":
    return true;
  case "onLoadingComplete":
    return false;
  default:
    return state;
  }
};

export default carteImpact;
