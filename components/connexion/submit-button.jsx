/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { CircularProgress, Fab } from "@material-ui/core";

const styles = () => ({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  fab: {
    width: "370px",
    color: "#FFFFFF",
    fontSize: "16px",
    minWidth: "370px",
    maxWidth: "370px",
    marginTop: "41px",
    letterSpacing: "0.15px",
  },
  circularProgress: {
    marginTop: "41px",
  },
});

class SubmitButton extends PureComponent {
  render() {
    const { classes, disabled, isLoading } = this.props;
    return (
      <div className={classes.container}>
        {!isLoading && (
          <Fab
            classes={{ root: classes.fab }}
            color="secondary"
            disabled={disabled}
            type="submit"
            variant="extended">
            <span>Continuer</span>
          </Fab>
        )}
        {isLoading && (
          <CircularProgress
            classes={{ root: classes.circularProgress }}
            color="secondary"
          />
        )}
      </div>
    );
  }
}

SubmitButton.propTypes = {
  classes: PropTypes.shape().isRequired,
  isLoading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SubmitButton);
