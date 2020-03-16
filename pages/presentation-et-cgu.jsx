import "../styles/pages-textes.scss";

import { Grid } from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { flow } from "lodash";
import Head from "next/head";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import AppHeader from "../components/app-header";
import TextePresentationGenerale from "../components/presentation-cgu/texte-presentation-generale";
import TextePresentationLeximpactPop from "../components/presentation-cgu/texte-presentation-leximpact-pop";
import TextePresentationOpenLeximpact from "../components/presentation-cgu/texte-presentation-open-leximpact";
import withRoot from "../lib/withRoot";

const styles = () => ({
  gridSection: {
    margin: "0 auto",
    maxWidth: "800px",
    paddingBottom: "30px",
    paddingLeft: "30px",
    paddingRight: "30px",
    paddingTop: "10px",
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
        <TextePresentationGenerale />
        <Grid
          container
          alignItems="flex-start"
          className={classes.gridSection}
          direction="row"
          justify="space-between">
          <Grid item className={classes.griditemOpen} xs={6}>
            <TextePresentationOpenLeximpact />
          </Grid>

          <Grid item className={classes.griditemPop} xs={6}>
            <TextePresentationLeximpactPop />
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
