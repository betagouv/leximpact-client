import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import { disabledEtat, fetchCalculateCompare } from "../../../redux/actions";
import SimulationButton5Component from "./simulation-button-5-component";

function useSimulatioButtonAsMobile(width) {
  return width === "xs" || width === "sm" || width === "md";
}

const mapStateToProps = (state, { width }) => {
  const showSimulatioButtonAsMobile = useSimulatioButtonAsMobile(width);
  return { showSimulatioButtonAsMobile };
};

const mapDispatchToProps = dispatch => ({
  handleSimulationClick: () => {
    dispatch(fetchCalculateCompare());
    dispatch(disabledEtat());
  },
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SimulationButton5Component);
