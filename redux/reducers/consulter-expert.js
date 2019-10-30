const DEFAULT_STATE = "displayed";

const closeConsulterExpert = (state, action) => {
  let nextState = "closed"; // Anything but "displayed".
  nextState = [...nextState, action.data];
  return nextState;
};

const consulterExpert = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "closeConsulterExpert":
    return closeConsulterExpert(state, action);
  default:
    return state;
  }
};

export default consulterExpert;
