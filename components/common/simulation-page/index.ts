import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  fetchMetadataCasTypes,
  simulateCasTypes,
} from "../../../redux/actions";
import { SimulationPage } from "./SimulationPage";

const mapStateToProps = (state, { width }) => {
  const useMobileView = width === "xs" || width === "sm";
  return { useMobileView };
};

const mapDispatchToProps = dispatch => ({
  initializeAppllicationStoreFromAPI: () => {
    // rempli le store de l'application avec les données
    // provenant de l'API
    dispatch(fetchMetadataCasTypes()).then(() => {
      // lance le calcul des cas types la premiere fois
      // que le reformeur s'affiche
      dispatch(simulateCasTypes());
    });
  },
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(SimulationPage);
