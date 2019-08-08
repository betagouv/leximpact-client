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
import { flow, get } from "lodash";
import { Fragment, PureComponent } from "react";
import Router, { withRouter } from "next/router";
import { DialogContent, Dialog } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles/";
import RequestTokenForm from "components/login-form";

import withRoot from "../lib/withRoot";
import Reformeur from "../components/Reformeur";
import AppHeader from "../components/app-header";
import PopinManager from "../components/PopinManager";
import "../styles/index.scss";

const styles = () => ({
  dialog: {
    width: "100%",
    backgroundColor: "rgba(229, 220, 0, 0.5)",
  },
  dialogPaper: {
    width: "800px",
    maxWidth: "800px",
    minWidth: "630px",
    backgroundColor: "#FFFFFF",
  },
  dialogContent: {
    padding: "45px 45px 0 45px",
  },
});

function shouldShowLoginPopup(routerObject) {
  const showLoginPopup = get(routerObject, "query.showLoginPopup", false);
  return showLoginPopup === "1";
}

class IndexPage extends PureComponent {
  handleCloseLoginPopup = () => {
    Router.push("/");
  }

  renderLoginModal = () => {
    const { classes, router } = this.props;
    const showLoginPopup = shouldShowLoginPopup(router);
    return (
      <Dialog
        open={showLoginPopup}
        onClose={this.handleCloseLoginPopup}
        classes={{ root: classes.dialog, paper: classes.dialogPaper }}
      >
        <DialogContent classes={{ root: classes.dialogContent }}>
          <RequestTokenForm />
        </DialogContent>
      </Dialog>
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
        <PopinManager />
        {this.renderLoginModal()}
      </Fragment>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.shape().isRequired,
  router: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRouter,
  withRoot,
)(IndexPage);