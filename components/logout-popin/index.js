import { withRouter } from "next/router";
import { connect } from "react-redux";
import { compose } from "redux";

import { closeCurrentPopin, fetchMetadataCasTypes } from "../../redux/actions";
import LogoutPopinComponent from "./logout-popin-component";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  fetchMetadataCasTypesHandler: () => {
    dispatch(fetchMetadataCasTypes());
  },
  onClosePopin: () => dispatch(closeCurrentPopin()),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LogoutPopinComponent);
