import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import Config from "./config";
import SimulationMenuBarComponent from "./simulation-menubar-component";

function useSimulatioButtonAsMobile(width) {
  return width === "xs" || width === "sm" || width === "md";
}

function useOutilsAsMobile(width) {
  return width === "xs" || width === "sm" || width === "md";
}

const mapStateToProps = ({ token }, { width }) => {
  const isUserLogged = Boolean(token);
  const outilsItems = [...Config.outilsMenuItems];
  const showOutilsAsMobile = useOutilsAsMobile(width);
  const showSimulatioButtonAsMobile = useSimulatioButtonAsMobile(width);
  return {
    isUserLogged,
    outilsItems,
    showOutilsAsMobile,
    showSimulatioButtonAsMobile,
  };
};

const mapDispatchToProps = dispatch => ({
  handleItemWithActionClick: (selected) => {
    // click sur un element du menu options ou du menu deroulant
    dispatch(selected.action());
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
