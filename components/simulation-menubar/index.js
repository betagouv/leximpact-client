import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import Config from "./config";
import SimulationMenuBarComponent from "./simulation-menubar-component";

function useSimulatioButtonAsMobile(width) {
  return width === "xs" || width === "sm" || width === "md";
}

function useOptionsAsMobile(width) {
  return width !== "lg" || width !== "xl";
}

function useOutilsAsMobile(width) {
  return width === "xs" || width === "sm" || width === "md";
}

const mapStateToProps = (state, { width }) => {
  const outilsItems = [...Config.outilsMenuItems];
  const optionsItems = [...Config.optionsMenuItems];
  const showOutilsAsMobile = useOutilsAsMobile(width);
  const showOptionsAsMobile = useOptionsAsMobile(width);
  const showSimulatioButtonAsMobile = useSimulatioButtonAsMobile(width);
  return {
    optionsItems,
    outilsItems,
    showOptionsAsMobile,
    showOutilsAsMobile,
    showSimulatioButtonAsMobile,
  };
};

const mapDispatchToProps = dispatch => ({
  handleItemWithActionClick: (selected) => {
    // click sur un element du menu options ou du menu deroulant
    const isReduxAction = Boolean(selected.action && selected.action.type);
    if (!isReduxAction) return;
    const SelectedActionFunc = selected.action;
    dispatch(SelectedActionFunc());
  },
  handleSimulationClick: () => {},
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SimulationMenuBarComponent);
