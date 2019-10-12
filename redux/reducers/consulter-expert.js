const DEFAULT_STATE = "dispalyed";

const closeConsulterExpert = (state, action) => {
  console.log("Reduce closeConsulterExpert");
  let nextState = "closed";
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
