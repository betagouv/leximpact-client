import { connect } from "react-redux";

import {
  addTranche,
  removeTranche,
  resetVarArticle,
  resetVarArticleExistant,
  updateReformeByName,
} from "../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../types";
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
  handleResetVarArticle: () => {
    dispatch(resetVarArticle());
  },
  handleResetVarArticleExistant: () => {
    dispatch(resetVarArticleExistant());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticlesComponent);
