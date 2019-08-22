import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import { fetchMetadataCasTypes } from "../../redux/actions";
import ReformeurComponent from "./reformeur-component";

const mapStateToProps = (state, { width }) => {
  const useMobileView = width === "xs" || width === "sm";
  const isUserConnected = Boolean(state.token || false);
  return { isUserConnected, useMobileView };
};

const mapDispatchToProps = dispatch => ({
  fetchMetadataCasTypesHandler: () => {
    const action = fetchMetadataCasTypes();
    dispatch(action);
  },
});

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ReformeurComponent);
