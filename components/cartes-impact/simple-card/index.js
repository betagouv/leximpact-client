import { connect } from "react-redux";

import { onEditCarteImpact, onRemoveCarteImpact } from "../../../redux/actions";
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
  handleEditCarteImpact: index => dispatch(onEditCarteImpact(index)),
  handleRemoveCarteImpact: index => dispatch(onRemoveCarteImpact(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
