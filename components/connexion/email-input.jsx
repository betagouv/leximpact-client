import { PureComponent } from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import { withStyles } from "@material-ui/core/styles";
import {
  FormGroup,
  FormLabel,
  Input,
  MenuItem,
  Select,
} from "@material-ui/core";

import { validateEmailInputField } from "./utils";

const styles = theme => ({
  formGroup: {
    marginTop: "28px"
  },
  formLabel: {
    fontSize: "24px",
    color: "#000000",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
  },
  fieldsContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
  },
  inputField: {
    fontSize: "18px",
    lineHeight: "2em",
    maxWidth: "100%",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      width: "120px",
    },
  },
  inputError: {
    color: "red",
    textAlign: "right",
  },
  /*
  inputRoot: {
    marginRight: "6px",
    maxWidth: "500px",
    [theme.breakpoints.down("xs")]: {
      width: "120px",
    },
  },*/
  selectRoot: {
    fontSize: "18px",
    lineHeight: "2em",
    maxWidth: "230px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      width: "120px",
    },
  },
});

class EmailTextInput extends PureComponent {
  renderSelectField = ({ input }) => {
    const { domains, classes } = this.props;
    const {
      name, value, onChange, ...rest
    } = input;
    return (
      <Select
        required
        name={name}
        value={value}
        inputProps={rest}
        onChange={onChange}
        classes={{ root: classes.selectRoot }}>
        {domains.map(domainLabel => (
          <MenuItem key={domainLabel} value={domainLabel}>
            {domainLabel}
          </MenuItem>
        ))}
      </Select>
    );
  }

  renderInputField = ({ input }) => {
    const { classes } = this.props;
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Input
          {...input}
          required
          classes={{
            input: classes.inputField,
        /*    root: classes.inputRoot, */
          }}
        />
      </div>
    );
  }

  render() {
    const { classes, domains } = this.props;
    return (
      <FormGroup row classes={{ root: classes.formGroup }}>
        <FormLabel
          focused={false}
          component="legend"
          classes={{ root: classes.formLabel }}>
          <b>Mon adresse e-mail officielle&nbsp;:</b>
        </FormLabel>
        <div className={classes.fieldsContainer}>
          <Field
            required
            name="username"
            validate={validateEmailInputField}
            render={this.renderInputField}
          />
          <Field
            required
            name="domain"
            defaultValue={domains[0]}
            render={this.renderSelectField}
          />
        </div>
      </FormGroup>
    );
  }
}

EmailTextInput.propTypes = {
  classes: PropTypes.shape().isRequired,
  domains: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default withStyles(styles)(EmailTextInput);
