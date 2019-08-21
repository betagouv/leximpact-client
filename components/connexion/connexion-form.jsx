import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";
import createDecorator from "final-form-calculate";
import { withStyles } from "@material-ui/core/styles";
import { Form as FinalForm, Field } from "react-final-form";

import SubmitButton from "./submit-button";
import EmailInput from "./email-input";
import RolesInput from "./roles-input";
import ErrorSnackbar from "./error-snackbar";
import { roles } from "./config.json";
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
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
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
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
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
      </Fragment>
    );
  }
}

ConnexionForm.defaultProps = {
  initialValues: {
    // valeurs par défaut du form
    domains: DEFAULT_ROLE_OBJECT.domains,
    username: null,
    role: DEFAULT_ROLE_OBJECT.key,
  },
};

ConnexionForm.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape(),
  isLoading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ConnexionForm);
