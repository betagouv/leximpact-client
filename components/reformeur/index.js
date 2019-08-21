import { connect } from "react-redux";

import { fetchMetadataCasTypes } from "../actions";
import ReformeurComponent from "./reformeur-component";

const mapStateToProps = (state) => {
  const isUserConnected = Boolean(state.token || false);
  return { isUserConnected };
};

const mapDispatchToProps = dispatch => ({
  fetchMetadataCasTypesHandler: () => {
    const action = fetchMetadataCasTypes();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReformeurComponent);
