import FaceIcon from "@material-ui/icons/Face";
import PropTypes from "prop-types";

import { Button } from "../button";

const SimulationButton5Component = ({
  handleSimulationClick,
  showSimulatioButtonAsMobile,
}) => (
  <Button
    caption="ESTIMER ~5''"
    icon={<FaceIcon tag="cas type" />}
    isMobileView={showSimulatioButtonAsMobile}
    mobileCaption="ESTIMER"
    mobileIcon={<FaceIcon tag="cas type" />}
    type="primary"
    onClick={handleSimulationClick} />
);

SimulationButton5Component.propTypes = {
  handleSimulationClick: PropTypes.func.isRequired,
  showSimulatioButtonAsMobile: PropTypes.bool.isRequired,
};

export default SimulationButton5Component;
