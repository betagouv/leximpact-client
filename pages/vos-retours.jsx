import "../styles/index.scss";

import { flow } from "lodash";
import Head from "next/head";
import { Fragment, PureComponent } from "react";

import AppHeader from "../components/app-header";
import withRoot from "../lib/withRoot";

class VosRetoursPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader />
        <h1>Vos retours sont précieaux</h1>
      </Fragment>
    );
  }
}

export default flow(withRoot)(VosRetoursPage);
