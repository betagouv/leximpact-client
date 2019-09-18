const DEFAULT_STATE = false;

const disabledEtat = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onDisabledEtat":
    console.log("coucou j'ai cliqué");
    return disabledEtat;
  default:
    return state;
  }
};

export default disabledEtat;
