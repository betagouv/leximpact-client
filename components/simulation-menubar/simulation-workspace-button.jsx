import { Fab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ViewQuilt as ViewQuiltIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

const styles = () => ({
  roundedButton: {
    marginRight: "24px",
  },
  roundedButtonDisabled: {
    backgroundColor: "rgba(225, 225, 225, 1) !important",
  },
});

const SimulationWorkspaceButton = ({ classes }) => (
  <Fab
    disabled
    aria-label="Espace de travail"
    classes={{ disabled: classes.roundedButtonDisabled }}
    className={classes.roundedButton}
    color="primary"
    size="small"
    variant="round">
    <ViewQuiltIcon />
  </Fab>
);

SimulationWorkspaceButton.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(SimulationWorkspaceButton);
