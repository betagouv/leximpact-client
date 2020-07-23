import { flow } from "lodash";
import Head from "next/head";
import { Fragment, PureComponent } from "react";

import { AppHeader } from "../components/common";
import TexteMentionsLegales from "../components/mentions-legales/texte-mentions-legales";
import withRoot from "../lib/withRoot";

class PageMentionsLegales extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader showLoginButton={false} />
        <TexteMentionsLegales />
      </Fragment>
    );
  }
}

export default flow(withRoot)(PageMentionsLegales);
