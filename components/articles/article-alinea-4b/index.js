import { connect } from "react-redux";

import { expandArticlePanel } from "../../../redux/actions";
import ArticleAlinea4b from "./article-alinea-4b-component";

const PANEL_NAME = "panel4b";

const mapStateToProps = ({ currentExpandedArticlePanel, reforme }) => {
  const isPanelExpanded = currentExpandedArticlePanel === PANEL_NAME;
  return {
    isPanelExpanded,
    reforme,
  };
};

const mapDispatchToProps = dispatch => ({
  expandArticlePanelHandler: () => dispatch(expandArticlePanel(PANEL_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleAlinea4b);
