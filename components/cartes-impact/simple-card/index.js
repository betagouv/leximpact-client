import { connect } from "react-redux";

import { removeCasType, showEditCasTypesPopin, simulateCasTypes } from "../../../redux/actions";
import SimpleCard from "./simple-card-component";

const mapStateToProps = ({ casTypes, results }, { index }) => {
  const { isFetching, items } = results.casTypes;
  const { name } = casTypes[index];
  const descCasType = casTypes[index];
  const resultats = {
    apres: items.apres[index],
    avant: items.avant[index],
    plf: items.plf ? items.plf[index] : null,
  };
  return {
    descCasType,
    isLoading: isFetching,
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
