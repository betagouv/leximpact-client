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
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import withRoot from "../lib/withRoot";
import AppHeader from "../components/app-header";
import PresentationOpenLeximpact from "../components/presentation-cgu/presentation-open-leximpact";
import PresentationGenerale from "../components/presentation-cgu/presentation-generale";
import PresentationLeximpactPop from "../components/presentation-cgu/presentation-leximpact-pop";
import "../styles/pages-textes.scss";

const styles = () => ({
  gridSection: {
    maxWidth: "800px",
    margin: "0 auto",
    paddingRight: "30px",
    paddingLeft: "30px",
    paddingTop: "10px",
    paddingBottom: "30px",
  },

  griditemOpen: {
    paddingRight: "10px",
  },

  griditemPop: {
    paddingLeft: "10px",
  },
});

class ExamplePage extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader />
        <PresentationGenerale />
        <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="space-between"
          className={classes.gridSection}
        >
          <Grid item xs={6} className={classes.griditemOpen}>
            <PresentationOpenLeximpact />
          </Grid>

          <Grid item xs={6} className={classes.griditemPop}>
            <PresentationLeximpactPop />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ExamplePage.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRoot,
)(ExamplePage);
