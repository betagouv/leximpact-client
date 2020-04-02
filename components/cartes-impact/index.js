import { connect } from "react-redux";

import ImpactComponent from "./impact-component";

const mapStateToProps = ({
  casTypes,
  consulterExpert,
  resBrut,
  token,
  totalPop,
}) => {
  const isUserLogged = Boolean(token);
  return {
    casTypes,
    consulterExpert,
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
