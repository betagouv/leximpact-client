import { connect } from "react-redux";

import { expandArticlePanel } from "../../actions";
import ArticleAlinea0 from "./article-alinea-0-component";

const PANEL_NAME = "panel0";

const mapStateToProps = ({ currentExpandedArticlePanel }) => {
  const isPanelExpanded = currentExpandedArticlePanel === PANEL_NAME;
  return {
    isPanelExpanded,
  };
};

const mapDispatchToProps = dispatch => ({
  expandArticlePanelHandler: () => dispatch(expandArticlePanel(PANEL_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleAlinea0);
