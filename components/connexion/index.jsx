import PropTypes from "prop-types";
import { PureComponent } from "react";
import { FORM_ERROR } from "final-form";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import VPNKeyIcon from "@material-ui/icons/VpnKey";

import request from "../utils/request";

import ConnexionForm from "./connexion-form";
import MentionsLegales from "./mentions-legales-text";
import ConnexionSuccess from "./connexion-form-success";
import { parseFormValuesUserEmail } from "./utils";

const styles = theme => ({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  avatar: {
    width: "80px",
    height: "80px",
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  avatarIcon: {
    width: "42px",
    height: "auto",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  spanLighter: {
    fontWeight: "lighter",
  },
  spanBolder: {
    fontWeight: "bold",
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
  }

  handleFormSubmitSuccess = (payload) => {
    this.setState({ hasBeenSubmitWithSuccess: payload, isLoading: false });
    return {};
  }

  handleFormSubmit = (formValues) => {
    this.setState({ isLoading: true });
    const email = parseFormValuesUserEmail(formValues);
    return request
      .post("/auth/login", { email })
      .then(this.handleFormSubmitSuccess)
      .catch(this.handleFormSubmitFail);
  }

  renderConnexionSuccess = () => {
    const { hasBeenSubmitWithSuccess } = this.state;
    if (!hasBeenSubmitWithSuccess) return null;
    return <ConnexionSuccess message={hasBeenSubmitWithSuccess} />;
  }

  renderConnexionForm = () => {
    const { hasBeenSubmitWithSuccess, isLoading } = this.state;
    if (hasBeenSubmitWithSuccess) return null;
    return (
      <ConnexionForm
        isLoading={isLoading}
        handleFormSubmit={this.handleFormSubmit}
      />
    );
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Avatar className={classes.avatar}>
          <VPNKeyIcon classes={{ root: classes.avatarIcon }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          <span className={classes.spanLighter}>LEXIMPACT&nbsp;</span>
          <span className={classes.spanBolder}>POP</span>
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
};

export default withStyles(styles)(Connexion);
