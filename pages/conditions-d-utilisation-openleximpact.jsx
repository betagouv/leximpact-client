import "../styles/pages-textes.scss";

import { flow } from "lodash";
import Head from "next/head";
import { Fragment, PureComponent } from "react";

import AppHeader from "../components/app-header";
import TexteCguOpenLexImpact from "../components/presentation-cgu/cgu-open-leximpact/texte-cgu-open-leximpact";
import withRoot from "../lib/withRoot";

class PageCGULexOpenImpact extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader />
        <TexteCguOpenLexImpact />
      </Fragment>
    );
  }
}

export default flow(withRoot)(PageCGULexOpenImpact);
