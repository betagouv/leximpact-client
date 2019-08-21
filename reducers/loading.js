const DEFAULT_STATE = false;

const loading = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onLoadingStart":
    return true;
  case "onLoadingComplete":
    return false;
  default:
    return state;
  }
};

export default loading;
