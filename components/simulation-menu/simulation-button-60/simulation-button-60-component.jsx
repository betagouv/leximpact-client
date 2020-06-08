import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import FaceIcon from "@material-ui/icons/Face";
import PropTypes from "prop-types";
import { Fragment } from "react";

import { Button } from "../button";

const SimulationButton60Component = ({
  handleSimulationClick,
  showSimulatioButtonAsMobile,
}) => (
  <Button
    caption="ESTIMER ~60''"
    icon={(
      <Fragment>
        <AccountBalanceIcon tag="macro" />
        <FaceIcon tag="cas type" />
      </Fragment>
    )}
    isMobileView={showSimulatioButtonAsMobile}
    mobileCaption="ESTIMER"
    mobileIcon={(
      <Fragment>
        <AccountBalanceIcon tag="macro" />
        <FaceIcon tag="cas type" />
      </Fragment>
    )}
    type="primary"
    onClick={handleSimulationClick} />
);

SimulationButton60Component.propTypes = {
  handleSimulationClick: PropTypes.func.isRequired,
  showSimulatioButtonAsMobile: PropTypes.bool.isRequired,
};

export default SimulationButton60Component;
