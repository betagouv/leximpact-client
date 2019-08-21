import { connect } from "react-redux";

import { updateConnexionToken } from "../actions";
import ConfirmationConnextionComponent from "./confirmation-connexion-component";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  handleUpdateConnexionToken: (token) => {
    const action = updateConnexionToken(token);
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConfirmationConnextionComponent);
