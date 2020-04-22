import { connect } from "react-redux";

import { expandArticlePanel } from "../../../redux/actions";
import ArticleAlinea2 from "./article-alinea-2-component";

const PANEL_NAME = "panel2";

const mapStateToProps = ({ display, reformePLF }) => {
  const isPanelExpanded = display.currentExpandedArticlePanel === PANEL_NAME;
  return {
    isPanelExpanded,
    reformePLF,
  };
};

const mapDispatchToProps = dispatch => ({
  expandArticlePanelHandler: () => dispatch(expandArticlePanel(PANEL_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleAlinea2);
