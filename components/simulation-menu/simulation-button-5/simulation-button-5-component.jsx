import { Button } from "@material-ui/core";
import { Cached as CachedIcon, Face as FaceIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

const SimulationButton5Component = ({
  classes,
  handleSimulationClick,
  showSimulatioButtonAsMobile,
}) => (
  <Button
    color="secondary"
    size="medium"
    variant="contained"
    onClick={handleSimulationClick}>
    <FaceIcon className={classes.marginIcon} tag="cas type" />
    {showSimulatioButtonAsMobile && "ESTIMER"}
    {!showSimulatioButtonAsMobile && "ESTIMER ~5''"}
    <CachedIcon className={classes.miniIcon} />
  </Button>
);

SimulationButton5Component.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleSimulationClick: PropTypes.func.isRequired,
  showSimulatioButtonAsMobile: PropTypes.bool.isRequired,
};

export default SimulationButton5Component;
