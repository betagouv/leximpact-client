import { Dialog, DialogContent, Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles/";
import { flow, get } from "lodash";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import { closeCurrentPopin } from "../redux/actions";
import ConfirmationConnexion from "./confirmation-connexion";
import LoginForm from "./connexion";
import EnSavoirPlus from "./en-savoir-plus";

const styles = theme => ({
  dialog: {
    backgroundColor: "rgba(229, 220, 0, 0.5)",
    width: "100%",
  },
  dialogContent: {
    padding: "45px 45px 0 45px",
  },
  dialogPaper: {
    maxWidth: "800px",
    minWidth: "230px",
    backgroundColor: "#FFFFFF",
  },
  dialogContent: {
    padding: "45px 45px 0 45px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 20px 0 20px",
    },
  },
});

class PopinManager extends PureComponent {
  renderConnexion = (popinType) => {
    const { classes } = this.props;
    const showConnexion = popinType === "connection";
    return (
      <Dialog
        classes={{ paper: classes.dialogPaper, root: classes.dialog }}
        open={showConnexion}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  };

  renderConfirmationConnexion = (popinType) => {
    const { classes } = this.props;
    const showConfirmationConnexion = popinType === "confirmation-connexion";
    return (
      <Dialog
        classes={{ paper: classes.dialogPaper, root: classes.dialog }}
        open={showConfirmationConnexion}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <ConfirmationConnexion />
        </DialogContent>
      </Dialog>
    );
  };

  renderEnSavoirPlus = (popinType) => {
    const showEnSavoirPlus = popinType === "en-savoir-plus";
    return (
      <Drawer
        anchor="bottom"
        open={showEnSavoirPlus}
        variant="temporary"
        onClose={closeCurrentPopin}>
        <EnSavoirPlus />
      </Drawer>
    );
  };

  render() {
    const { router } = this.props;
    const pathString = "query.popin";
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
