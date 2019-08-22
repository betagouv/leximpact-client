import { get } from "lodash";
import { connect } from "react-redux";

import { expandArticlePanel } from "../../../redux/actions";
import ArticleAlinea4a from "./article-alinea-4a-component";

const PANEL_NAME = "panel4a";

const mapStateToProps = ({
  currentExpandedArticlePanel,
  reforme,
  reformeBase: base,
}) => {
  const isPanelExpanded = currentExpandedArticlePanel === PANEL_NAME;
  const decoteSeuilCelib = get(reforme, "impot_revenu.decote.seuil_celib");
  const decoteSeuilCouple = get(reforme, "impot_revenu.decote.seuil_couple");
  const baseDecoteSeuilCelib = get(base, "impot_revenu.decote.seuil_celib");
  const baseDecoteSeuilCouple = get(base, "impot_revenu.decote.seuil_celib");
  return {
    baseDecoteSeuilCelib,
    baseDecoteSeuilCouple,
    decoteSeuilCelib,
    decoteSeuilCouple,
    isPanelExpanded,
  };
};

const mapDispatchToProps = dispatch => ({
  expandArticlePanelHandler: () => dispatch(expandArticlePanel(PANEL_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleAlinea4a);
