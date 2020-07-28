import { get } from "lodash";
import { withRouter } from "next/router";
import { connect } from "react-redux";
import { compose } from "redux";

import { closeCurrentPopin, connexionTokenLogin } from "../../../redux/actions";
import LoginPopinComponent from "./login-popin-component";

const mapStateToProps = (state, { router }) => {
  // obtient le token de connexion depuis l'URL
  const token = get(router, "query.token", null);
  return { token };
};

const mapDispatchToProps = dispatch => ({
  handleUpdateConnexionToken: token => dispatch(connexionTokenLogin(token)),
  onClosePopin: () => dispatch(closeCurrentPopin()),
});

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(LoginPopinComponent);
