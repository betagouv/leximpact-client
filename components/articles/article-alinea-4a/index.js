import { get } from "lodash";
import { connect } from "react-redux";

import { expandArticlePanel } from "../../../redux/actions";
import ArticleAlinea4a from "./article-alinea-4a-component";

const PANEL_NAME = "panel4a";

const mapStateToProps = ({
  currentExpandedArticlePanel,
  reforme,
  reformeBase: base,
  reformePLF
}) => {
  const isPanelExpanded = currentExpandedArticlePanel === PANEL_NAME;
  return {
    isPanelExpanded
  };
};

const mapDispatchToProps = dispatch => ({
  expandArticlePanelHandler: () => dispatch(expandArticlePanel(PANEL_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleAlinea4a);
