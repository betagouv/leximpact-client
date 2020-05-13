import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import {
  fetchCalculateCompare,
  fetchMetadataCasTypes,
} from "../../redux/actions";
import ReformeurComponent from "./reformeur-component";

const mapStateToProps = ({ isInformationPanelVisible }, { width }) => {
  const useMobileView = width === "xs" || width === "sm";
  return { isInformationPanelVisible, useMobileView };
};

const mapDispatchToProps = dispatch => ({
  initializeAppllicationStoreFromAPI: () => {
    // rempli le store de l'application avec les données
    // provenant de l'API
    dispatch(fetchMetadataCasTypes()).then(() => {
      // lance le calcul des cas types la premiere fois
      // que le reformeur s'affiche
      dispatch(fetchCalculateCompare());
    });
  },
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ReformeurComponent);
