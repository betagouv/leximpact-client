import { applyMiddleware, createStore } from "redux";
import reduxCookiesMiddleware, {
  getStateFromCookies,
} from "redux-cookies-middleware";
import thunk from "redux-thunk";

import reducers from "./reducers";

// enregistre et lit les cookies du navigateur
// state to persist in cookies
const TOKEN_NAME = "pop_auth_token";
const CAS_TYPES_NAME = "cas_types";
const paths = {
  casTypes: { name: CAS_TYPES_NAME },
  token: { name: TOKEN_NAME },
};

const apiEndpoint = process.env.API_URL;
const thunkMiddleWare = thunk.withExtraArgument({ apiEndpoint });
const cookiesMiddleware = reduxCookiesMiddleware(paths);

const makeApplicationState = (initialState) => {
  const nextState = getStateFromCookies(initialState, paths);
  const middlewares = [thunkMiddleWare, cookiesMiddleware];
  const store = createStore(
    reducers,
    nextState,
    applyMiddleware(...middlewares),
  );
  return store;
};

export default makeApplicationState;
