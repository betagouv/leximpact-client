import { connect } from "react-redux";

import GagnantsPerdantsCard from "./gagnants-perdants-component";

const mapStateToProps = ({ loadingEtat, totalPop }) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { foyers_fiscaux_touches } = totalPop;
  return {
    foyers_fiscaux_touches,
    isDisabledEtat,
    isLoadingEtat,
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
)(GagnantsPerdantsCard);
