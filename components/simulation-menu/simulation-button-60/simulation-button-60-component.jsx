import Button from "@material-ui/core/Button";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CachedIcon from "@material-ui/icons/Cached";
import FaceIcon from "@material-ui/icons/Face";
import PropTypes from "prop-types";

const SimulationButton60Component = ({
  classes,
  handleSimulationClick,
  showSimulatioButtonAsMobile,
}) => (
  <Button
    color="secondary"
    size="medium"
    variant="contained"
    onClick={handleSimulationClick}>
    <AccountBalanceIcon tag="macro" />
    <FaceIcon className={classes.marginIcon} tag="cas type" />
    {showSimulatioButtonAsMobile && "ESTIMER"}
    {!showSimulatioButtonAsMobile && "ESTIMER ~60''"}
    <CachedIcon className={classes.miniIcon} />
  </Button>
);

SimulationButton60Component.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleSimulationClick: PropTypes.func.isRequired,
  showSimulatioButtonAsMobile: PropTypes.bool.isRequired,
};

export default SimulationButton60Component;
