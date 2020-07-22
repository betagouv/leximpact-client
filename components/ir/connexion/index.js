import { connect } from "react-redux";

import { closeCurrentPopin } from "../../../redux/actions";
import ConnexionComponent from "./connexion-component";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  onClosePopin: () => dispatch(closeCurrentPopin()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConnexionComponent);
