/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
*/
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";
import Head from "next/head";
import { flow, get } from "lodash";
import Router, { withRouter } from "next/router";
import { Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles/";

import withRoot from "lib/withRoot";
import AppHeader from "components/app-header";
import Reformeur from "components/Reformeur";
import MentionsLegales from "components/mentions-legales";
import "styles/index.scss";

function styles(theme) {
  const { mixins, spacing } = theme;

  return {
    root: {
      paddingTop: spacing.unit * 5,
      textAlign: "center",
    },
    paper: {
      ...mixins.gutters(),
      paddingBottom: spacing.unit * 2,
      paddingTop: spacing.unit * 2,
      margin: "1em auto",
      width: "25em",
    },
    dorine: {
      background: "red",
    },
    article: {
      margin: "1em",
      padding: "2em",
      opacity: 1,
      position: "relative",
    },
  };
}

function shouldShowMentionsLegales(routerObject) {
  const showMentionsLegales = get(
    routerObject,
    "query.showMentionsLegales",
    false,
  );
  return showMentionsLegales === "1";
}

class IndexPage extends PureComponent {
  handleCloseMentionsLegales = () => {
    Router.push("/");
  }

  renderMentionsLegales = () => {
    const { router } = this.props;
    const showMentionsLegales = shouldShowMentionsLegales(router);
    return (
      <Drawer
        anchor="bottom"
        variant="temporary"
        open={showMentionsLegales}
        onClose={this.handleCloseMentionsLegales}
      >
        <MentionsLegales />
      </Drawer>
    );
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader />
        <Reformeur />
        {this.renderMentionsLegales()}
      </Fragment>
    );
  }
}

IndexPage.propTypes = {
  // classes: PropTypes.shape().isRequired,
  router: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRouter,
  withRoot,
)(IndexPage);
