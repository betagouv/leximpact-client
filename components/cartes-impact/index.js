import { connect } from "react-redux";

import ImpactComponent from "./impact-component";

const mapStateToProps = ({
  casTypes,
  display,
  token,
  totalPop,
}) => {
  const isUserLogged = Boolean(token);
  return {
    casTypes,
    isInformationPanelVisible: display.isInformationPanelVisible,
    isUserLogged,
    totalPop,
  };
};

export default connect(mapStateToProps)(ImpactComponent);
