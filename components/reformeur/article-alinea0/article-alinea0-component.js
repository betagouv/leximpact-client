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

import LexExpansionPanel from "../article/panels/expansion-panel";
import LexExpansionPanelDetails from "../article/panels/expansion-panel-details";
import LexExpansionPanelSummary from "../article/panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class Alinea2 extends PureComponent {
  constructor(props) {
    super(props);
    this.name = "panel0";
  }

  render() {
    const { isPanelExpanded, expandArticlePanelHandler, style } = this.props;
    // const isExpanded = expanded === this.name;
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
            I. En ce qui concerne les contribuables ...
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography variant="body2" color="inherit">
            visés à l&apos;article 4 B, il est fait application des règles
            suivantes pour le calcul de l&apos;impôt sur le revenu :
          </Typography>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

Alinea2.propTypes = {
  style: PropTypes.shape().isRequired,
};

export default Alinea2;
