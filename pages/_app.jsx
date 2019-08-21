import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import thunk from "redux-thunk";
import Cookies from "js-cookie";

import reducers from "../reducers";

const apiEndpoint = process.env.API_URL;
const thunkMiddleWare = thunk.withExtraArgument({ apiEndpoint });

const fillStateWithDefaultToken = (initialState) => {
  const token = Cookies.get("token") || false;
  const nextState = { ...(initialState || {}), token };
  return nextState;
};

const makeStore = (initialState) => {
  const middlewares = [thunkMiddleWare];
  const nextState = fillStateWithDefaultToken(initialState);
  const store = createStore(
    reducers,
    nextState,
    applyMiddleware(...middlewares),
  );
  return store;
};

class LexImpactApplicationWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
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
