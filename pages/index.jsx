import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";

import Articles from "../components/articles";
import ImpactCards from "../components/cartes-impact";
import PopinManager from "../components/PopinManager";
import SimulationPage from "../components/simulation-page";
import withRoot from "../lib/withRoot";
import "../styles/index.scss";

class IndexPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact - Impôt sur le revenu</title>
        </Head>
        <SimulationPage
          parameters={<Articles />}
          results={<ImpactCards />}
          subTitle1="IMPÔT SUR"
          subTitle2="LE REVENU"
          title="IR"
        />
        <PopinManager />
      </Fragment>
    );
  }
}

export default flow(
  withRouter,
  withRoot,
)(IndexPage);
