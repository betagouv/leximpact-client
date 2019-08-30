import { get } from "lodash";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { compose } from "redux";

import { closeCurrentPopin, updateConnexionToken } from "../../redux/actions";
import ConfirmationConnextionComponent from "./connexion-confirmation-component";

const mapStateToProps = (state, { router }) => {
  // obtient le token de connexion depuis l'URL
  const token = get(router, "query.token", null);
  return { token };
};

const mapDispatchToProps = dispatch => ({
  handleUpdateConnexionToken: (token) => {
    const action = updateConnexionToken(token);
    dispatch(action);
  },
  onClosePopin: () => dispatch(closeCurrentPopin()),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(ConfirmationConnextionComponent);
