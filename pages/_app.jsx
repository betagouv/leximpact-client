import { get } from "lodash";
import withRedux from "next-redux-wrapper";
import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import reduxCookiesMiddleware, {
  getStateFromCookies,
} from "redux-cookies-middleware";
import thunk from "redux-thunk";

import reducers from "../reducers";

// state to persist in cookies
const TOKEN_NAME = "pop_auth_token";
const paths = { token: { name: TOKEN_NAME } };

const apiEndpoint = process.env.API_URL;
const thunkMiddleWare = thunk.withExtraArgument({ apiEndpoint });
const cookiesMiddleware = reduxCookiesMiddleware(paths);

const makeStore = (initialState) => {
  const nextState = getStateFromCookies(initialState, paths);
  const middlewares = [thunkMiddleWare, cookiesMiddleware];
  const store = createStore(
    reducers,
    nextState,
    applyMiddleware(...middlewares),
  );
  return store;
};

class LexImpactApplicationWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    const token = get(ctx, `req.cookies.${TOKEN_NAME}`, false);
    if (token) {
      const actionType = "onUpdateConnexionToken";
      ctx.store.dispatch({ type: actionType, value: token });
    }

    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(LexImpactApplicationWrapper);
