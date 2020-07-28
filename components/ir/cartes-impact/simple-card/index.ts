import { connect } from "react-redux";

import { removeCasType, showEditCasTypesPopin, simulateCasTypes } from "../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import SimpleCard from "./simple-card-component";

const mapStateToProps = ({ descriptions, results }: RootState, { index }) => {
  const { isFetching, items } = results.casTypes;
  const { name } = descriptions.ir.casTypes[index];
  const descCasType = descriptions.ir.casTypes[index];
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
