import withRedux from "next-redux-wrapper";
import App from "next/app";
import React from "react";
import { Provider } from "react-redux";

import makeApplicationState from "../redux/make-application-state";
import "../styles/styles.scss";

interface Props {
  store: any;
}

class LexImpactApplicationWrapper extends App<Props> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(makeApplicationState)(LexImpactApplicationWrapper);
