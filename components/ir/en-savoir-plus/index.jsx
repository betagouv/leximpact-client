import { connect } from "react-redux";

import { closeCurrentPopin } from "../../../redux/actions";
import EnSavoirPlus from "./EnSavoirPlus";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  onClosePopin: () => dispatch(closeCurrentPopin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnSavoirPlus);
