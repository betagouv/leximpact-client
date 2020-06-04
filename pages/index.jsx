import { flow } from "lodash";
import Head from "next/head";
import { withRouter } from "next/router";
import { Fragment, PureComponent } from "react";

import AppHeader from "../components/app-header";
import PopinManager from "../components/PopinManager";
import Reformeur from "../components/reformeur";
import withRoot from "../lib/withRoot";
import "../styles/index.scss";
import styles from "./index.module.scss";

class IndexPage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact - Impôt sur le revenu</title>
        </Head>
        <div className={styles.container}>
          <AppHeader subTitle1="IMPÔT SUR" subTitle2="LE REVENU" title="IR" />
          <Reformeur />
        </div>
        <PopinManager />
      </Fragment>
    );
  }
}

export default flow(
  withRouter,
  withRoot,
)(IndexPage);
