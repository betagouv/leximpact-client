import { connect } from "react-redux";

import { removeCasType, showEditCasTypesPopin, simulateCasTypes } from "../../../redux/actions";
import SimpleCard from "./simple-card-component";

const mapStateToProps = ({ casTypes, resBrut, results }, { index }) => {
  const isLoading = results.casTypes.isFetching;
  const { name } = casTypes[index];
  const descCasType = casTypes[index];
  const resultats = {
    apres: resBrut.apres[index],
    avant: resBrut.avant[index],
    plf: resBrut.plf ? resBrut.plf[index] : null,
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
    dispatch(simulateCasTypes());
  },
  handleShowEditCasTypesPopin: index => () => dispatch(showEditCasTypesPopin(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
