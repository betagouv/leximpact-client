import { connect } from "react-redux";

import ImpactComponent from "./impact-component";

const mapStateToProps = ({
  casTypes, resBrut, token, totalPop,
}) => {
  const isUserLogged = Boolean(token);
  return {
    casTypes,
    isUserLogged,
    resBrut,
    totalPop,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImpactComponent);
