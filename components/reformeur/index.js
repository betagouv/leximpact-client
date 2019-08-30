import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchMetadataCasTypes } from "../../redux/actions";
import ReformeurComponent from "./reformeur-component";

const mapStateToProps = (state, { width }) => {
  const useMobileView = width === "xs" || width === "sm";
  return { useMobileView };
};

const mapDispatchToProps = dispatch => ({
  fetchMetadataCasTypesHandler: () => {
    dispatch(fetchMetadataCasTypes());
  },
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ReformeurComponent);
