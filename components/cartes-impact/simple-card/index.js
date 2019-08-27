import { connect } from "react-redux";

import { onEditCarteImpact, onRemoveCarteImpact } from "../../../redux/actions";
import SimpleCard from "./simple-card-component";

const mapStateToProps = state => ({
  isLoading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  handleEditCarteImpact: index => dispatch(onEditCarteImpact(index)),
  handleRemoveCarteImpact: index => dispatch(onRemoveCarteImpact(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
