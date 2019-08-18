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
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import LexExpansionPanel from "../expandable-panels/expansion-panel";
import LexExpansionPanelDetails from "../expandable-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../expandable-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class ArticleAlinea3 extends PureComponent {
  render() {
    const {
      baseOutputInput,
      isPanelExpanded,
      expandArticlePanelHandler,
      style,
    } = this.props;
    return (
      <LexExpansionPanel
        style={style.Typography}
        square
        expanded={isPanelExpanded}
        onChange={expandArticlePanelHandler}>
        <LexExpansionPanelSummary
          style={styleExpansionpanel}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body2" color="inherit">
            3. Le montant de l&apos;impôt résultant de l&apos;application des
            dispositions précédentes est réduit de...
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography variant="body2" color="inherit">
            ...
            {baseOutputInput("plafond_qf.abat_dom.taux_GuadMarReu")}
            %, dans la limite de
            {baseOutputInput("plafond_qf.abat_dom.plaf_GuadMarReu")}
€ pour les
            contribuables domiciliés dans les départements de la Guadeloupe, de
            la Martinique et de la Réunion ; cette réduction est égale à
            {" "}
            {baseOutputInput("plafond_qf.abat_dom.taux_GuyMay")}
            %, dans la limite de
            {baseOutputInput("plafond_qf.abat_dom.plaf_GuyMay")}
            €, pour les contribuables domiciliés dans les départements de la
            Guyane et de Mayotte ;
          </Typography>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

ArticleAlinea3.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
};

export default ArticleAlinea3;
