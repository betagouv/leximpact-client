import { connect } from "react-redux";

import {
  fetchCalculateCompare,
  updateCasTypeOutreMer,
  updateRevenusAnnuelCasType,
} from "../actions";

import ImpactComponent from "./impact-component";

const mapStateToProps = state => ({
  casTypes: state.casTypes,
  resBrut: state.resBrut,
  totalPop: state.totalPop,
});

const mapDispatchToProps = dispatch => ({
  handleOutreMerChange: (casTypeIndex, casTypeOutreMerIndex) => {
    let action = updateCasTypeOutreMer(casTypeIndex, casTypeOutreMerIndex);
    dispatch(action);
    action = fetchCalculateCompare();
    dispatch(action);
  },

  changeRevenuHandler: (casTypeIndex, inputEvent) => {
    // apres selection du revenu dans la carte du cas type
    // on met a jour le revenu annuel pour ce cas type
    // dans le state de l'application
    const casTypeRevenuMensuel = Number(inputEvent.target.value);
    let action = updateRevenusAnnuelCasType(casTypeIndex, casTypeRevenuMensuel);
    dispatch(action);
    action = fetchCalculateCompare();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ImpactComponent);
