import { Avatar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import { FORM_ERROR } from "final-form";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import request from "../utils/request";
import ConnexionForm from "./connexion-form";
import ConnexionSuccess from "./connexion-form-success";
import MentionsLegales from "./mentions-legales-text";
import { parseFormValuesUserEmail } from "./utils";

const styles = theme => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    height: "80px",
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down("xs")]: {
      width: "60px",
      height: "60px",
    },
  },
  avatarIcon: {
    height: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "32px",
    },
  },
  form: {
    marginTop: theme.spacing.unit,
    width: "100%", // Fix IE 11 issue.
  },
  spanBolder: {
    fontWeight: "bold",
  },
  spanLeximpactLigther: {
    fontSize: "34px",
    fontFamily: "Lato",
    fontWeight: "lighter",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
  },
  spanLeximpactBolder: {
    fontSize: "34px",
    fontFamily: "Lato",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "26px",
    },
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
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Avatar className={classes.avatar}>
          <VPNKeyIcon classes={{ root: classes.avatarIcon }} />
        </Avatar>
        <Typography>
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
};

export default withStyles(styles)(Connexion);
