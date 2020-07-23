import Head from "next/head";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import { HomeContent } from "../components/home";
import withRoot from "../lib/withRoot";

class HomePage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader showLoginButton={false} />
        <HomeContent />
      </Fragment>
    );
  }
}

export default withRoot(HomePage);
