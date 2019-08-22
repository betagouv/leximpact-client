import "../styles/index.scss";

import { withStyles } from "@material-ui/core/styles/";
import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";

import AppHeader from "../components/app-header";
import PopinManager from "../components/PopinManager";
import Reformeur from "../components/reformeur";
import withRoot from "../lib/withRoot";

const styles = () => ({});

class IndexPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader />
        <Reformeur />
        <PopinManager />
      </Fragment>
    );
  }
}

export default flow(
  withStyles(styles),
  withRouter,
  withRoot,
)(IndexPage);
