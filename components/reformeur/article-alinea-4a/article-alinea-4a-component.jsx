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

import InputField from "../article/input-field";
import OutputField from "../article/output-field";
import LexExpansionPanel from "../article-expansion-panels/expansion-panel";
import LexExpansionPanelDetails from "../article-expansion-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../article-expansion-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class Alinea4a extends PureComponent {
  render() {
    const {
      formulaOutputInput,
      baseOutputInput,
      isPanelExpanded,
      expandArticlePanelHandler,
      style,
      basecode,
      reforme,
    } = this.props;
    const scelib = reforme.impot_revenu.decote.seuil_celib;
    const scouple = reforme.impot_revenu.decote.seuil_couple;
    const basescelib = basecode.impot_revenu.decote.seuil_celib;
    const basescouple = basecode.impot_revenu.decote.seuil_couple;
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
            4. a. Le montant de l&apos;impôt résultant de l&apos;application des
            dispositions précédentes est diminué, dans...
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography variant="body2" color="inherit">
            ...la limite de son montant, de la différence entre
            {" "}
            <OutputField value={basescelib} style={style.VarCodeexistant} />
            <InputField
              value={scelib}
              onChange={this.handleS1Change}
              name="decote.seuil_celib"
              style={style.InputSeuil}
            />
            € et les
            {" "}
            <OutputField value="trois quarts" style={style.VarCodeexistant} />
            {" "}
[
            {baseOutputInput("decote.taux")}
            %] de son montant pour les contribuables célibataires, divorcés ou
            veufs et de la différence entre
            <OutputField value={basescouple} style={style.VarCodeexistant} />
            <InputField
              value={scouple}
              onChange={this.handleS1Change}
              name="decote.seuil_couple"
              style={style.InputSeuil}
            />
            {" "}
            € et les
            {" "}
            <OutputField value="trois quarts" style={style.VarCodeexistant} />
            {" "}
[
            {formulaOutputInput("decote.taux")}
            %] de son montant pour les contribuables soumis à imposition
            commune.
          </Typography>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

Alinea4a.propTypes = {
  formulaOutputInput: PropTypes.func.isRequired,
  baseOutputInput: PropTypes.func.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
  reforme: PropTypes.shape().isRequired,
  basecode: PropTypes.shape().isRequired,
};

export default Alinea4a;