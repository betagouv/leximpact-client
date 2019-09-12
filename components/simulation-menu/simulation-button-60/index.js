import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchSimPop } from "../../../redux/actions";
import { fetchCalculateCompare } from "../../../redux/actions";
import SimulationButton60Component from "./simulation-button-60-component";

function useSimulatioButtonAsMobile(width) {
  return width === "xs" || width === "sm" || width === "md";
}

const mapStateToProps = (state, { width }) => {
  const showSimulatioButtonAsMobile = useSimulatioButtonAsMobile(width);
  return { showSimulatioButtonAsMobile };
};

const mapDispatchToProps = dispatch => ({
  handleSimulationClick: () => {
    dispatch(fetchSimPop());
    dispatch(fetchCalculateCompare());
  },
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SimulationButton60Component);
