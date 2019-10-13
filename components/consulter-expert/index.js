import { connect } from "react-redux";

import { closeConsulterExpert } from "../../redux/actions";
import ConsulterExpertCard from "./consulter-expert-component";

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  onRemoveConsulterExpert: () => dispatch(closeConsulterExpert()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ConsulterExpertCard);
