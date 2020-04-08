import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const styles = theme => ({
  circularProgress: {
    marginTop: "41px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
    },
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  fab: {
    color: "#FFFFFF",
    fontSize: "16px",
    letterSpacing: "0.15px",
    marginTop: "41px",
    width: "370px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
      maxWidth: "180px",
    },
  },
  fabDisabled: {
    backgroundColor: "rgba(225, 225, 225, 1) !important",
  },
});

class SubmitButton extends PureComponent {
  render() {
    const { classes, disabled, isLoading } = this.props;
    return (
      <div className={classes.container}>
        {!isLoading && (
          <Fab
            classes={{ disabled: classes.fabDisabled, root: classes.fab }}
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
  disabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SubmitButton);
