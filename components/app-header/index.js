import { connect } from "react-redux";

import AppHeaderComponent from "./app-header-component";

const mapStateToProps = (state) => {
  const isUserConnected = Boolean(state.token || null);
  return { isUserConnected };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppHeaderComponent);
