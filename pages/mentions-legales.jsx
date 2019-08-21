import Head from "next/head";
import { flow } from "lodash";
import { Fragment, PureComponent } from "react";

import TexteMentionsLegales from "../components/mentions-legales/texte-mentions-legales";
import AppHeader from "../components/app-header";
import withRoot from "../lib/withRoot";
import "../styles/pages-textes.scss";

class PageMentionsLegales extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader />
        <TexteMentionsLegales />
      </Fragment>
    );
  }
}

export default flow(withRoot)(PageMentionsLegales);
