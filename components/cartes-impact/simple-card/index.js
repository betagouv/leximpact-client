import { connect } from "react-redux";

import {
  onRemoveCarteImpact,
  showEditCasTypesPopin,
} from "../../../redux/actions";
import SimpleCard from "./simple-card-component";

const mapStateToProps = state => ({
  isLoading: state.loading,
});

const mapDispatchToProps = dispatch => ({
  handleEditCarteImpact: index => dispatch(showEditCasTypesPopin(index)),
  handleRemoveCarteImpact: index => dispatch(onRemoveCarteImpact(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
