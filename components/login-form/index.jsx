/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
*/
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { FORM_ERROR } from "final-form";
import { Form as FinalForm, Field } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Typography } from "@material-ui/core";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import createDecorator from "final-form-calculate";

import SubmitButton from "./submit-button";
import MentionsLegales from "./mentions-legales-text";
import EmailInput from "./email-input";
import RolesInput from "./roles-input";
import ErrorSnackbar from "./error-snackbar";
import request from "../utils/request";
import {
  getDefaultRoleFromConfig,
  parseFormValuesUserEmail,
  updateDomainsWhenRoleChange,
} from "./helpers";
import { roles } from "./config.json";

const DEFAULT_ROLES = { ...roles };
const DEFAULT_ROLE_OBJECT = getDefaultRoleFromConfig();

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

const FORM_DECORATORS = createDecorator({
  // NOTE les decorateurs permettent de changer
  // la valeur d'un champ en fonction d'un autre champ
  // NOTE les décorateurs ne doivent pas
  // etre passé dans le render d'un composant
  field: "roles",
  updates: { domains: updateDomainsWhenRoleChange },
});

class RequestTokenForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { isLoading: false };
  }

  handleFormSubmitFail = (error) => {
    this.setState({ isLoading: false });
    return { [FORM_ERROR]: error };
  }

  handleFormSubmitSuccess = form => () => {
    this.setState({ isLoading: false });
    form.reset();
  }

  handleFormSubmit = (formValues, form) => {
    this.setState({ isLoading: true });
    const email = parseFormValuesUserEmail(formValues);
    return request
      .post("/fake/path", { email })
      .then(this.handleFormSubmitSuccess(form))
      .catch(this.handleFormSubmitFail);
  }

  render() {
    const { isLoading } = this.state;
    const { classes, initialValues } = this.props;
    return (
      <div className={classes.container}>
        <Avatar className={classes.avatar}>
          <VPNKeyIcon classes={{ root: classes.avatarIcon }} />
        </Avatar>
        <Typography component="h1" variant="h5">
          <span className={classes.spanLighter}>LEXIMPACT&nbsp;</span>
          <span className={classes.spanBolder}>POP</span>
        </Typography>
        <FinalForm
          initialValues={initialValues}
          onSubmit={this.handleFormSubmit}
          decorators={[FORM_DECORATORS]}
          render={({
            handleSubmit,
            invalid,
            pristine,
            submitError,
            values,
          }) => {
            const { domains } = values;
            const canSubmitForm = isLoading || pristine || invalid;
            return (
              <form className={classes.form} onSubmit={handleSubmit}>
                <RolesInput
                  roles={DEFAULT_ROLES}
                  defaultValue={initialValues.role}
                />
                <EmailInput domains={domains} />
                <SubmitButton disabled={canSubmitForm} isLoading={isLoading} />
                <Field component="input" type="hidden" name="domains" />
                <ErrorSnackbar message={submitError} />
              </form>
            );
          }}
        />
        <MentionsLegales />
      </div>
    );
  }
}

RequestTokenForm.defaultProps = {
  initialValues: {
    // valeurs par défaut du form
    domains: DEFAULT_ROLE_OBJECT.domains,
    username: null,
    role: DEFAULT_ROLE_OBJECT.key,
  },
};

RequestTokenForm.propTypes = {
  classes: PropTypes.shape().isRequired,
  initialValues: PropTypes.shape(),
};

export default withStyles(styles)(RequestTokenForm);
