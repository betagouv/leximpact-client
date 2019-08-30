import { Avatar, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Close as CloseIcon, VpnKey as VPNKeyIcon } from "@material-ui/icons";
import { FORM_ERROR } from "final-form";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import request from "../utils/request";
import ConnexionForm from "./connexion-form";
import ConnexionSuccess from "./connexion-form-success";
import MentionsLegales from "./form/mentions-legales-text";
import { parseFormValuesUserEmail } from "./utils";

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: 80,
    margin: theme.spacing.unit,
    width: 80,
    [theme.breakpoints.down("xs")]: {
      height: 60,
      width: 60,
    },
  },
  avatarContainer: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  avatarIcon: {
    height: 45,
    width: 45,
    [theme.breakpoints.down("xs")]: {
      height: 32,
      width: 32,
    },
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  form: {
    marginTop: theme.spacing.unit,
    width: "100%", // Fix IE 11 issue.
  },
  spanBolder: {
    fontWeight: "bold",
  },
  spanLeximpactBolder: {
    fontFamily: "Lato",
    fontSize: 34,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: 26,
    },
  },
  spanLeximpactLigther: {
    fontFamily: "Lato",
    fontSize: 34,
    fontWeight: "lighter",
    [theme.breakpoints.down("xs")]: {
      fontSize: 26,
    },
  },
  title: {
    textAlign: "center",
  },
});

class Connexion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { hasBeenSubmitWithSuccess: false, isLoading: false };
  }

  handleFormSubmitFail = (message) => {
    this.setState({ isLoading: false });
    return { [FORM_ERROR]: message };
  };

  handleFormSubmitSuccess = (payload) => {
    this.setState({ hasBeenSubmitWithSuccess: payload, isLoading: false });
    return {};
  };

  handleFormSubmit = (formValues) => {
    this.setState({ isLoading: true });
    const email = parseFormValuesUserEmail(formValues);
    return request
      .post("/auth/login", { email })
      .then(this.handleFormSubmitSuccess)
      .catch(this.handleFormSubmitFail);
  };

  renderConnexionSuccess = () => {
    const { hasBeenSubmitWithSuccess } = this.state;
    if (!hasBeenSubmitWithSuccess) return null;
    return <ConnexionSuccess message={hasBeenSubmitWithSuccess} />;
  };

  renderConnexionForm = () => {
    const { hasBeenSubmitWithSuccess, isLoading } = this.state;
    if (hasBeenSubmitWithSuccess) return null;
    return (
      <ConnexionForm
        handleFormSubmit={this.handleFormSubmit}
        isLoading={isLoading}
      />
    );
  };

  render() {
    const { classes, onClosePopin } = this.props;
    return (
      <div className={classes.container}>
        <IconButton
          classes={{ root: classes.closeButton }}
          onClick={onClosePopin}>
          <CloseIcon fontSize="small" />
        </IconButton>
        <div className={classes.avatarContainer}>
          <Avatar classes={{ root: classes.avatar }}>
            <VPNKeyIcon classes={{ root: classes.avatarIcon }} />
          </Avatar>
        </div>
        <Typography classes={{ root: classes.title }}>
          <span className={classes.spanLeximpactLigther}>LEXIMPACT&nbsp;</span>
          <span className={classes.spanLeximpactBolder}>POP</span>
        </Typography>
        {this.renderConnexionForm()}
        {this.renderConnexionSuccess()}
        <MentionsLegales />
      </div>
    );
  }
}

Connexion.propTypes = {
  classes: PropTypes.shape().isRequired,
  onClosePopin: PropTypes.func.isRequired,
};

export default withStyles(styles)(Connexion);
