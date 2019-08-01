/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import { get } from "lodash";
import { connect } from "react-redux";

import { expandArticlePanel } from "../../actions";

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
    isPanelExpanded,
    decoteSeuilCelib,
    decoteSeuilCouple,
    baseDecoteSeuilCouple,
    baseDecoteSeuilCelib,
  };
};

const mapDispatchToProps = dispatch => ({
  expandArticlePanelHandler: () => dispatch(expandArticlePanel(PANEL_NAME)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ArticleAlinea4a);
