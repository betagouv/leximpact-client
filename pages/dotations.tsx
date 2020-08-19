import HomeIcon from "@material-ui/icons/Home";
import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { SimulationPage } from "../components/common";
import { Articles, Results } from "../components/dotations";
import PopinManager from "../components/PopinManager";
import withRoot from "../lib/withRoot";
import { initFakePlf, simulateDotations } from "../redux/actions";

const mapDispatchToProps = dispatch => ({
  addFakePlf: () => dispatch(initFakePlf()),
  simulate: () => dispatch(simulateDotations()),
});

const connector = connect(null, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class DotationPage extends PureComponent<PropsFromRedux> {
  componentDidMount() {
    const { addFakePlf } = this.props;
    const url = new URLSearchParams(window.location.search);
    if (url.has("fauxplf")) {
      addFakePlf();
    }
  }

  render() {
    const { simulate } = this.props;
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
              onClick: simulate,
            },
          ]}
          results={<Results />}
          secondaryButtons={[]}
          showLoginButton={false}
          subTitle1="Dotations"
          subTitle2="Communes"
          title="DSR & DSU"
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
  connector,
)(DotationPage);
