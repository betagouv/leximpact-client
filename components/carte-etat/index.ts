import { connect } from "react-redux";

import { fetchSimPop, simulateCasTypes } from "../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../redux/reducers";
import CarteEtatComponent from "./carte-etat-component";

const mapStateToProps = ({ loadingEtat, results }: RootState) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { deciles, frontieresDeciles, total } = results.totalPop;
  return {
    deciles,
    frontieresDeciles,
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
