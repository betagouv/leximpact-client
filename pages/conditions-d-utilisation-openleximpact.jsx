import Head from "next/head";
import { flow } from "lodash";
import { Fragment, PureComponent } from "react";

import TexteCguOpenLexImpact from "../components/presentation-cgu/cgu-open-leximpact/texte-cgu-open-leximpact";
import AppHeader from "../components/app-header";
import withRoot from "../lib/withRoot";
import "../styles/pages-textes.scss";

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
