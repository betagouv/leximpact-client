import withWidth from "@material-ui/core/withWidth";
import { connect } from "react-redux";
import { compose } from "redux";

import AppHeader from "./AppHeader";

const mapStateToProps = (state, { width }) => {
  const useMobileView = width === "xs";
  const isUserLogged = Boolean(state.token || null);
  return { isUserLogged, useMobileView };
};

const mapDispatchToProps = null;

export default compose(
  withWidth(),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AppHeader);
