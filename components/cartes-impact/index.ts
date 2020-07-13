import { connect } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../redux/reducers";
import ImpactComponent from "./impact-component";

const mapStateToProps = ({
  casTypes,
  display,
  results,
  token,
}: RootState) => {
  const isUserLogged = Boolean(token);
  return {
    casTypes,
    isInformationPanelVisible: display.isInformationPanelVisible,
    isUserLogged,
    totalPop: results.totalPop,
  };
};

export default connect(mapStateToProps)(ImpactComponent);
