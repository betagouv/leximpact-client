// le default state est rempli grace a la lib "redux-cookies-middleware"
// voir le fichier "./reudx/make-application-state.js"
const DEFAULT_STATE = null;

const token = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case "onConnexionTokenLogout":
    return null;
  case "onConnexionTokenLogin":
    return action.value;
  default:
    return state;
  }
};

export default token;
