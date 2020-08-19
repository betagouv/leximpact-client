import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import { SimulationPage } from "./SimulationPage";

const mapStateToProps = (state, { width }) => {
  const useMobileView = width === "xs" || width === "sm";
  return { useMobileView };
};

export default compose(
  withWidth(),
  connect(mapStateToProps),
)(SimulationPage);
