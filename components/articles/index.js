import { connect } from "react-redux";

import {
  addTranche,
  removeTranche,
  fetchCalculateCompare,
  updateReformeByName,
} from "../actions";

import ArticlesComponent from "./articles-component";

const mapStateToProps = ({ reforme, reformeBase }) => ({
  reforme,
  reformeBase,
});

const mapDispatchToProps = dispatch => ({
  handleAddTranche: () => {
    const action = addTranche();
    dispatch(action);
  },

  handleRemoveTranche: () => {
    let action = removeTranche();
    dispatch(action);
    action = fetchCalculateCompare();
    dispatch(action);
  },

  handleArticleChange: (value, name) => {
    let action = updateReformeByName(name, value);
    dispatch(action);
    action = fetchCalculateCompare();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlesComponent);
