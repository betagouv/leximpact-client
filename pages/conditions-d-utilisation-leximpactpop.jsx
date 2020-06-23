import { flow } from "lodash";
import Head from "next/head";
import { Fragment, PureComponent } from "react";

import AppHeader from "../components/app-header";
import TexteCguLeximpactPop from "../components/presentation-cgu/cgu-leximpact-pop/texte-cgu-leximpact-pop";
import withRoot from "../lib/withRoot";

class PageCGULexImpactPop extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader showLoginButton={false} />
        <TexteCguLeximpactPop />
      </Fragment>
    );
  }
}

export default flow(withRoot)(PageCGULexImpactPop);
