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
import PropTypes from "prop-types";
import { flow } from "lodash";
import { Fragment, PureComponent } from "react";

import TexteCguLeximpactPop from "../components/presentation-cgu/cgu-leximpact-pop/texte-cgu-leximpact-pop";
import AppHeader from "../components/app-header";
import withRoot from "../lib/withRoot";
import "../styles/pages-textes.scss";

class ExamplePage extends PureComponent {
  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader />
        <TexteCguLeximpactPop />
      </Fragment>
    );
  }
}

ExamplePage.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default flow(withRoot)(ExamplePage);
