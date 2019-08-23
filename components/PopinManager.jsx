import PropTypes from "prop-types";
import { flow, get } from "lodash";
import { Fragment, PureComponent } from "react";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles/";
import { DialogContent, Dialog, Drawer } from "@material-ui/core";

import LoginForm from "./connexion";
import EnSavoirPlus from "./en-savoir-plus";
import ConfirmationConnexion from "./confirmation-connexion";
import { closeCurrentPopin } from "./actions";

const styles = (theme) => ({
  dialog: {
    width: "100%",
    backgroundColor: "rgba(229, 220, 0, 0.5)",
  },
  dialogPaper: {
    maxWidth: "800px",
    minWidth: "230px",
    backgroundColor: "#FFFFFF",
  },
  dialogContent: {
    padding: "45px 45px 0 45px",
    [theme.breakpoints.down('xs')]: {
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
        open={showConnexion}
        onClose={closeCurrentPopin}
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
        onClose={closeCurrentPopin}
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
        onClose={closeCurrentPopin}>
        <EnSavoirPlus />
      </Drawer>
    );
  }

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
