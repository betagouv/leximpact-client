import { Fab } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Share as ShareIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

const styles = () => ({
  roundedButton: {
    marginRight: "24px",
  },
  roundedButtonDisabled: {
    backgroundColor: "rgba(225, 225, 225, 1) !important",
  },
});

const SimulationShareButton = ({ classes }) => (
  <Fab
    disabled
    aria-label="Partager"
    classes={{ disabled: classes.roundedButtonDisabled }}
    className={classes.roundedButton}
    color="primary"
    size="small"
    variant="round">
    <ShareIcon />
  </Fab>
);

SimulationShareButton.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(SimulationShareButton);
