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

import LexExpansionPanel from "./panels/expansion-panel";
import LexExpansionPanelDetails from "./panels/expansion-panel-details";
import LexExpansionPanelSummary from "./panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class Alinea3 extends PureComponent {
  constructor(props) {
    super(props);
    this.name = "panel3";
    this.state = { expanded: false };
  }

  handleChange = () => {
    this.setState(({ expanded }) => ({ expanded: !expanded }));
  }

  render() {
    const { expanded } = this.state;
    const { baseOutputInput, style } = this.props;
    // const isExpanded = expanded === this.name;
    return (
      <LexExpansionPanel
        style={style.Typography}
        square
        expanded={expanded}
        onChange={this.handleChange}>
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

Alinea3.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default Alinea3;
