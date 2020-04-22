import { connect } from "react-redux";

import { fetchSimPop, simulateCasTypes } from "../../redux/actions";
import CarteEtatComponent from "./carte-etat-component";

const mapStateToProps = ({ loadingEtat, totalPop }) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { deciles, frontieres_deciles, total } = totalPop;
  return {
    deciles,
    frontieresDeciles: frontieres_deciles,
    isDisabledEtat,
    isLoadingEtat,
    total,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(fetchSimPop());
    dispatch(simulateCasTypes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarteEtatComponent);
