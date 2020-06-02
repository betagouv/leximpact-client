import { connect } from "react-redux";

import { hideInformationPanel } from "../../redux/actions";
import InformationPanel from "./InformationPanel";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(hideInformationPanel()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(InformationPanel);
