import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles/";
import { flow, get } from "lodash";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import { closeCurrentPopin } from "../redux/actions";
import { LoginPopin, LogoutPopin } from "./ir";
import AjouterCasTypes from "./ir/ajouter-cas-types";
import LoginForm from "./ir/connexion";
import EnSavoirPlus from "./ir/en-savoir-plus";

const styles = theme => ({
  dialog: {
    backgroundColor: "rgba(229, 220, 0, 0.5)",
    width: "100%",
  },
  dialogContent: {
    padding: "45px 45px 0 45px",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 20px 0 20px",
    },
  },
  dialogContentCasTypes: {
    padding: 30,
    [theme.breakpoints.down("xs")]: {
      padding: "20px 20px 0 20px",
    },
  },
  dialogPaper: {
    backgroundColor: "#FFFFFF",
    maxWidth: "800px",
    minWidth: "230px",
  },
  dialogPaperCasTypes: {
    width: "580px",
  },
});

class PopinManager extends PureComponent {
  renderConnexion = (popinType) => {
    const { classes } = this.props;
    const showPopin = popinType === "connection";
    return (
      <Dialog
        classes={{ paper: classes.dialogPaper, root: classes.dialog }}
        open={showPopin}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <LoginForm />
        </DialogContent>
      </Dialog>
    );
  };

  renderAjouterCasTypes = (popinType) => {
    const { classes, router } = this.props;
    const paperClass = `${classes.dialogPaper} ${classes.dialogPaperCasTypes}`;
    const showPopin = popinType === "ajouter-cas-types";
    const pathString = "query.index";
    const routerIndex = get(router, pathString, -1);
    const index = Number(routerIndex);
    return (
      <Dialog
        classes={{ paper: paperClass, root: classes.dialog }}
        open={showPopin}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: classes.dialogContentCasTypes }}>
          <AjouterCasTypes index={index} onClosePopin={closeCurrentPopin} />
        </DialogContent>
      </Dialog>
    );
  };

  renderLoginpopin = (popinType) => {
    const { classes } = this.props;
    const showPopin = popinType === "confirmation-connexion";
    return (
      <Dialog
        classes={{ paper: classes.dialogPaper, root: classes.dialog }}
        open={showPopin}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <LoginPopin />
        </DialogContent>
      </Dialog>
    );
  };

  renderEnSavoirPlus = (popinType) => {
    const showPopin = popinType === "en-savoir-plus";
    return (
      <Drawer
        anchor="bottom"
        open={showPopin}
        variant="temporary"
        onClose={closeCurrentPopin}>
        <EnSavoirPlus />
      </Drawer>
    );
  };

  renderLogoutPopin = (popinType) => {
    const { classes } = this.props;
    const showPopin = popinType === "logout";
    return (
      <Dialog
        classes={{ paper: classes.dialogPaper, root: classes.dialog }}
        open={showPopin}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <LogoutPopin />
        </DialogContent>
      </Dialog>
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
        {this.renderLoginpopin(popinType)}
        {this.renderAjouterCasTypes(popinType)}
        {this.renderLogoutPopin(popinType)}
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
