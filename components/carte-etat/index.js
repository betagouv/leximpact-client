import { connect } from "react-redux";

import { fetchSimPop } from "../../redux/actions";
import CarteEtatComponent from "./carte-etat-component";

const mapStateToProps = ({ totalPop }) => ({ totalPop });

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(fetchSimPop());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CarteEtatComponent);
