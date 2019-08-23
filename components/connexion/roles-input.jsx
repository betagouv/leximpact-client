import { Field } from "react-final-form";
import { PureComponent } from "react";
import PropTypes from "prop-types";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  formControl: {
    // NOTE flex ne s'applique pas au `fieldset`
    // le component doit donc être une `div` pour profiter de flex
    display: "flex",
    flexDirection: "row",
    marginTop: "43px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
    },
  },
  formLegend: {
    color: "#000000",
    flex: "2",
    fontSize: "24px",
    maxWidth: "130px",
    minWidth: "80px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px",
      maxWidth: "80px",
    },
  },
  formLegendAsterisk: {
    marginRight: "10px",
    textAlign: "left",
  },
  radioGroup: {
    flex: 1,
  },
  radioItem: {
    padding: "0 12px",
    [theme.breakpoints.down("xs")]: {
      padding: "0 8px",
    },
  },
  radioLabel: {
    color: "#565656",
    fontFamily: "lato",
    fontSize: "18px",
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  radioWrapper: {
    display: "flex",
    flexDirection: "row",
  },
});

class RolesInput extends PureComponent {
  renderRadioItem = (key) => {
    const { classes, roles } = this.props;
    return (
      <FormControlLabel
        key={key}
        value={key}
        label={roles[key].label}
        disabled={roles[key].disabled}
        classes={{ label: classes.radioLabel }}
        control={<Radio classes={{ root: classes.radioItem }} />}
      />
    );
  }

  render() {
    const { classes, defaultValue, roles } = this.props;
    return (
      <FormControl
        required
        component="div"
        classes={{ root: classes.formControl }}>
        <FormLabel
          required
          focused={false}
          component="div"
          classes={{
            asterisk: classes.formLegendAsterisk,
            root: classes.formLegend,
          }}>
          <b>Je suis</b>
        </FormLabel>
        <Field
          name="roles"
          type="radio"
          render={({ input }) => (
            <RadioGroup
              {...input}
              name={input.name}
              value={input.value}
              aria-label={input.name}
              onChange={input.onChange}
              defaultValue={defaultValue}
              classes={{ root: classes.radioGroup }}>
              {Object.keys(roles).map(this.renderRadioItem)}
            </RadioGroup>
          )}
        />
      </FormControl>
    );
  }
}

RolesInput.defaultProps = {};

RolesInput.propTypes = {
  classes: PropTypes.shape().isRequired,
  defaultValue: PropTypes.string.isRequired,
  roles: PropTypes.shape().isRequired,
};

export default withStyles(styles)(RolesInput);
