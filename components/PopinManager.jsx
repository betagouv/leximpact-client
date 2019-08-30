import { Dialog, DialogContent, Drawer } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles/";
import { flow, get } from "lodash";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import { closeCurrentPopin } from "../redux/actions";
import AjouterCasTypes from "./ajouter-cas-types";
import LoginForm from "./connexion";
import ConfirmationConnexion from "./connexion-confirmation";
import EnSavoirPlus from "./en-savoir-plus";

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

  renderAjouterCasTypes = (popinType) => {
    const { classes, router } = this.props;
    const showConfirmationConnexion = popinType === "ajouter-cas-types";
    const pathString = "query.index";
    const editIndex = get(router, pathString, -1);
    const paperClass = `${classes.dialogPaper} ${classes.dialogPaperCasTypes}`;
    return (
      <Dialog
        classes={{ paper: paperClass, root: classes.dialog }}
        open={showConfirmationConnexion}
        onClose={closeCurrentPopin}>
        <DialogContent classes={{ root: classes.dialogContentCasTypes }}>
          <AjouterCasTypes index={editIndex} onClosePopin={closeCurrentPopin} />
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
        {this.renderAjouterCasTypes(popinType)}
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
