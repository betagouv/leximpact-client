import { connect } from "react-redux";

import { removeCasType, showEditCasTypesPopin } from "../../../redux/actions";
import SimpleCard from "./simple-card-component";

const mapStateToProps = ({ casTypes, loading, resBrut }, { index }) => {
  const isLoading = loading;
  const { name } = casTypes[index];
  const descCasType = casTypes[index];
  const impotsApres = resBrut.apres[index];
  const impotsAvant = resBrut.avant[index];
  return {
    descCasType,
    impotsApres,
    impotsAvant,
    isLoading,
    name,
  };
};

const mapDispatchToProps = dispatch => ({
  handleRemoveCasType: index => dispatch(removeCasType(index)),
  handleShowEditCasTypesPopin: index => dispatch(showEditCasTypesPopin(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
