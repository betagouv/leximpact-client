import { connect } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../redux/reducers";
import ImpactComponent from "./impact-component";

const mapStateToProps = ({
  descriptions,
  display,
  token,
}: RootState) => {
  const isUserLogged = Boolean(token);
  return {
    casTypes: descriptions.ir.casTypes,
    isInformationPanelVisible: display.isInformationPanelVisible,
    isUserLogged,
  };
};

export default connect(mapStateToProps)(ImpactComponent);
