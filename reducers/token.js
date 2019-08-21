import Cookies from "js-cookie";

// le default state du token est defini dans ./pages/_app.jsx
// lorsque le token existe deja dans le browser user
const token = (state = false, action) => {
  switch (action.type) {
  case "onUpdateConnexionToken":
    Cookies.set("token", action.value);
    return action.value;
  default:
    return state;
  }
};

export default token;
