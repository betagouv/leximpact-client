import { connect } from "react-redux";
import { RootState } from "types";

import {
  addTranche,
  removeTranche,
  updateReformeByName,
} from "../../redux/actions";
import ArticlesComponent from "./articles-component";

const mapStateToProps = ({ parameters }: RootState) => parameters;

const mapDispatchToProps = dispatch => ({
  handleAddTranche: () => {
    dispatch(addTranche());
  },

  handleArticleChange: (value, name) => {
    dispatch(updateReformeByName(name, value));
  },

  handleRemoveTranche: () => {
    dispatch(removeTranche());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlesComponent);
