import withRedux from "next-redux-wrapper";
import App, { Container } from "next/app";
import React from "react";
import { Provider } from "react-redux";

import makeApplicationState from "../redux/make-application-state";

class LexImpactApplicationWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
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

export default withRedux(makeApplicationState)(LexImpactApplicationWrapper);
