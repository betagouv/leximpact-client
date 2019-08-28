import { connect } from "react-redux";

import { removeCasType, showEditCasTypesPopin } from "../../../redux/actions";
import SimpleCard from "./simple-card-component";

const mapStateToProps = ({ casTypes, loading, resBrut }, { index }) => {
  const isLoading = loading;
  const { name } = casTypes[index];
  const descCasType = casTypes[index];
  const resultats = {
    apres: resBrut.avant[index],
    avant: resBrut.avant[index],
    plf: resBrut.plf[index],
  };
  return {
    descCasType,
    isLoading,
    name,
    resultats,
  };
};

const mapDispatchToProps = dispatch => ({
  handleRemoveCasType: index => () => dispatch(removeCasType(index)),
  handleShowEditCasTypesPopin: index => () => dispatch(showEditCasTypesPopin(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
