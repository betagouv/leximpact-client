import { connect } from "react-redux";

import SimpleCard from "./simple-card-component";

const mapStateToProps = state => ({
  isLoading: state.loading,
});

const mapDispatchToProps = () => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SimpleCard);
