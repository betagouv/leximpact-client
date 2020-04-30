import { connect } from "react-redux";

import GagnantsPerdantsCard from "./gagnants-perdants-component";

const mapStateToProps = ({ loadingEtat, totalPop }) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { foyersFiscauxTouches } = totalPop;
  return {
    foyersFiscauxTouches,
    isDisabledEtat,
    isLoadingEtat,
  };
};

export default connect(
  mapStateToProps,
)(GagnantsPerdantsCard);
