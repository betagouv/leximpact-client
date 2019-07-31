/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import Head from "next/head";
import { flow } from "lodash";
import { Fragment, PureComponent } from "react";

import withRoot from "../lib/withRoot";
import Reformeur from "../components/Reformeur";
import AppHeader from "../components/app-header";
import PopinManager from "../components/PopinManager";
import "../styles/index.scss";

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

export default flow(withRoot)(IndexPage);
