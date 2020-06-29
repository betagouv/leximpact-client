import HomeIcon from "@material-ui/icons/Home";
import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";

import { Articles } from "../components/dotations";
import PopinManager from "../components/PopinManager";
import SimulationPage from "../components/simulation-page";
import withRoot from "../lib/withRoot";

class IndexPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact - Dotations aux collectivités territoriales</title>
        </Head>
        <SimulationPage
          parameters={<Articles />}
          primaryButtons={[
            {
              caption: "Estimer",
              icon: <HomeIcon />,
              mobileCaption: "Estimer",
              mobileIcon: <HomeIcon />,
              onClick: () => {},
            },
          ]}
          secondaryButtons={[]}
          showLoginButton={false}
          subTitle1="Dotations"
          subTitle2="Communes"
          title="DSR"
          topic="dotations"
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
