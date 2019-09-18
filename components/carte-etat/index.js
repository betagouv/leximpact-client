import { connect } from "react-redux";

import { fetchCalculateCompare, fetchSimPop } from "../../redux/actions";
import CarteEtatComponent from "./carte-etat-component";

const mapStateToProps = ({ disabledEtat, loadingEtat, totalPop }) => {
  const isLoadingEtat = loadingEtat;
  const { deciles, total } = totalPop;
  return {
    deciles,
    disabledEtat,
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
