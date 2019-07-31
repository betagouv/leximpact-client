/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import PropTypes from "prop-types";
import { flow, get } from "lodash";
import { Fragment, PureComponent } from "react";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles/";
import { DialogContent, Dialog, Drawer } from "@material-ui/core";

import LoginForm from "./connexion";
import EnSavoirPlus from "./en-savoir-plus";
import ConfirmationConnexion from "./confirmation-connexion";
import { closeCurrentOpenedRoutingPopin } from "./actions";

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

class PopinManager extends PureComponent {
  renderConnexion = (popinType) => {
    const { classes } = this.props;
    const showConnexion = popinType === "connection";
    return (
      <Dialog
        open={showConnexion}
        onClose={closeCurrentOpenedRoutingPopin}
        classes={{ root: classes.dialog, paper: classes.dialogPaper }}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  }

  renderConfirmationConnexion = (popinType) => {
    const { classes } = this.props;
    const showConfirmationConnexion = popinType === "confirmation-connexion";
    return (
      <Dialog
        open={showConfirmationConnexion}
        onClose={closeCurrentOpenedRoutingPopin}
        classes={{ root: classes.dialog, paper: classes.dialogPaper }}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <ConfirmationConnexion />
        </DialogContent>
      </Dialog>
    );
  }

  renderEnSavoirPlus = (popinType) => {
    const showEnSavoirPlus = popinType === "en-savoir-plus";
    return (
      <Drawer
        anchor="bottom"
        variant="temporary"
        open={showEnSavoirPlus}
        onClose={closeCurrentOpenedRoutingPopin}>
        <EnSavoirPlus />
      </Drawer>
    );
  }

  render() {
    const { router } = this.props;
    const pathString = "query.showPopin";
    const popinType = get(router, pathString, false);
    return (
      <Fragment>
        {this.renderEnSavoirPlus(popinType)}
        {this.renderConnexion(popinType)}
        {this.renderConfirmationConnexion(popinType)}
      </Fragment>
    );
  }
}

PopinManager.propTypes = {
  classes: PropTypes.shape().isRequired,
  router: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRouter,
)(PopinManager);
