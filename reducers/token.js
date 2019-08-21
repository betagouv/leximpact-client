const DEFAULT_STATE = false;

const token = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onUpdateConnexionToken":
    return action.value;
  default:
    return state;
  }
};

export default token;
