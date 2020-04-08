import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { Field } from "react-final-form";

const styles = () => ({
  styleBox: {
    maxWidth: 400,
  },
  title: {
    fontFamily: "Lato",
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 12,
  },
});

function CasTypesName({ classes, name }) {
  return (
    <label htmlFor={name}>
      <span className={classes.title}>Créer mon cas type</span>
      <Field className={classes.styleBox} name={name}>
        {({ input }) => (
          <TextField
            {...input}
            placeholder="Foyer fiscal type"
          />
        )}
      </Field>
    </label>
  );
}

CasTypesName.propTypes = {
  classes: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(CasTypesName);
