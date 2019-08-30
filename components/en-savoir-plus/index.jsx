import { connect } from "react-redux";

import { closeCurrentPopin } from "../../redux/actions";
import EnSavoirPlusComponent from "./en-savoir-plus-component";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  onClosePopin: () => dispatch(closeCurrentPopin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnSavoirPlusComponent);
