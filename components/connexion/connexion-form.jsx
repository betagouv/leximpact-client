import { withStyles } from "@material-ui/core/styles";
import createDecorator from "final-form-calculate";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";
import { Field, Form as FinalForm } from "react-final-form";

import { roles } from "./config.json";
import EmailInput from "./email-input";
import ErrorSnackbar from "./error-snackbar";
import RolesInput from "./roles-input";
import SubmitButton from "./submit-button";
import { getDefaultRoleFromConfig, updateDomainsWhenRoleChange } from "./utils";

const DEFAULT_ROLES = { ...roles };
const DEFAULT_ROLE_OBJECT = getDefaultRoleFromConfig();

const FORM_DECORATORS = createDecorator({
  // NOTE les decorateurs permettent de changer
  // la valeur d'un champ en fonction d'un autre champ
  // NOTE les décorateurs ne doivent pas
  // etre passé dans le render d'un composant
  field: "roles",
  updates: { domains: updateDomainsWhenRoleChange },
});

const styles = theme => ({
  form: {
    marginTop: theme.spacing.unit,
    width: "100%", // Fix IE 11 issue.
  },
});

class ConnexionForm extends PureComponent {
  render() {
    const {
      classes, handleFormSubmit, initialValues, isLoading,
    } = this.props;
    return (
      <Fragment>
        <FinalForm
          decorators={[FORM_DECORATORS]}
          initialValues={initialValues}
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
                  defaultValue={initialValues.role}
                  roles={DEFAULT_ROLES}
                />
                <EmailInput domains={domains} />
                <SubmitButton disabled={canSubmitForm} isLoading={isLoading} />
                <Field component="input" name="domains" type="hidden" />
                <ErrorSnackbar message={submitError} />
              </form>
            );
          }}
          onSubmit={handleFormSubmit}
        />
      </Fragment>
    );
  }
}

ConnexionForm.defaultProps = {
  initialValues: {
    // valeurs par défaut du form
    domains: DEFAULT_ROLE_OBJECT.domains,
    role: DEFAULT_ROLE_OBJECT.key,
    username: null,
  },
};

ConnexionForm.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape(),
  isLoading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ConnexionForm);
