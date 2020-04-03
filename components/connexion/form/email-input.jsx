import { FormGroup } from "@material-ui/core/FormGroup";
import { FormLabel } from "@material-ui/core/FormLabel";
import { Input } from "@material-ui/core/Input";
import { MenuItem } from "@material-ui/core/MenuItem";
import { Select } from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { Field } from "react-final-form";

import { validateEmailInputField } from "../utils";

const styles = theme => ({
  fieldsContainer: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  formGroup: {
    marginTop: "28px",
  },
  formLabel: {
    color: "#000000",
    fontSize: "24px",
    marginBottom: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
    },
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
  inputRoot: {
    marginRight: "6px",
    width: "316px",
  },
  menuPaper: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
  },
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
    const { classes, domains } = this.props;
    const {
      name, onChange, value, ...rest
    } = input;
    return (
      <Select
        required
        classes={{ root: classes.selectRoot }}
        inputProps={rest}
        name={name}
        value={value}
        onChange={onChange}>
        {domains.map(domainLabel => (
          <MenuItem key={domainLabel} className={classes.menuPaper} value={domainLabel}>
            {domainLabel}
          </MenuItem>
        ))}
      </Select>
    );
  };

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
  };

  render() {
    const { classes, domains } = this.props;
    return (
      <FormGroup row classes={{ root: classes.formGroup }}>
        <FormLabel classes={{ root: classes.formLabel }} component="legend">
          <b>Mon adresse e-mail officielle&nbsp;:</b>
        </FormLabel>
        <div className={classes.fieldsContainer}>
          <Field
            required
            name="username"
            render={this.renderInputField}
            validate={validateEmailInputField}
          />
          <Field
            required
            defaultValue={domains[0]}
            name="domain"
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
