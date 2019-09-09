import { connect } from "react-redux";

import { fetchSimPop } from "../../redux/actions";
import { fetchCalculateCompare } from "../../redux/actions";
import CarteEtatComponent from "./carte-etat-component";

const mapStateToProps = ({ loadingEtat, totalPop }) => {
  const isLoadingEtat = loadingEtat;
  const { deciles, total } = totalPop;
  return {
    deciles,
    isLoadingEtat,
    total,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(fetchSimPop());
    dispatch(fetchCalculateCompare());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarteEtatComponent);
