import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import SimulationMenuBarComponent from "./SimulationMenuBar";

const mapStateToProps = ({ reformePLF }, { width }) => {
  const isMobileView = width === "xs" || width === "sm" || width === "md";
  const montrerPLF = !!reformePLF;
  return {
    isMobileView,
    montrerPLF,
  };
};

export default compose(
  withWidth(),
  connect(mapStateToProps),
)(SimulationMenuBarComponent);
