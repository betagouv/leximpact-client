import { connect } from "react-redux";

import { fetchCalculateCompare, removeCasType, showEditCasTypesPopin } from "../../../redux/actions";
import SimpleCard from "./simple-card-component";

const mapStateToProps = ({ casTypes, loading, resBrut }, { index }) => {
  const isLoading = loading;
  const { name } = casTypes[index];
  const descCasType = casTypes[index];
  const resultats = {
    apres: resBrut.apres[index],
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
  handleRemoveCasType: index => () => {
    dispatch(removeCasType(index));
    dispatch(fetchCalculateCompare());
  },
  handleShowEditCasTypesPopin: index => () => dispatch(showEditCasTypesPopin(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
