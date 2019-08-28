import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import OutputField from "../../articles-inputs/fields/output-field";
import LexExpansionPanel from "../expandable-panels/expansion-panel";
import LexExpansionPanelDetails from "../expandable-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../expandable-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

const styleTitreThematique = {
  color: "#B1B1B1",
  fontFamily: "Lato",
  fontSize: "20px",
  fontVariantCaps: "all-small-caps",
  fontWeight: "bold",
  textAlign: "left",
};

// permet de gérer le style du label de "supprimer la décote"
const StyledFormControlLabel = withStyles({
  label: {
    color: "#565656",
    display: "inline",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    lineHeight: "10px",
  },
  root: {
    display: "block",
  },
})(FormControlLabel);

class Alinea4a extends PureComponent {
  render() {
    const {
      baseOutputInput,
      expandArticlePanelHandler,
      formulaOutputInput,
      isPanelExpanded,
      style,
    } = this.props;
    return (
      <LexExpansionPanel
        square
        expanded={isPanelExpanded}
        style={style.Typography}
        onChange={expandArticlePanelHandler}>
        <LexExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          style={styleExpansionpanel}>
          <Typography style={styleTitreThematique}>Décote</Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography color="inherit" variant="body2">
            4. a. Le montant de l&apos;impôt résultant de l&apos;application des
            dispositions précédentes est diminué, dans la limite de son montant,
            de la différence entre
            {" "}
            {baseOutputInput("decote.seuil_celib")}
€ et
            les
            {" "}
            <OutputField style={style.VarCodeexistant} value="trois quarts" />
            {" "}
[
            {baseOutputInput("decote.taux")}
            %] de son montant pour les contribuables célibataires, divorcés ou
            veufs et de la différence entre
            {baseOutputInput("decote.seuil_couple")}
            {" "}
€ et les
            {" "}
            <OutputField style={style.VarCodeexistant} value="trois quarts" />
            {" "}
[
            {formulaOutputInput("decote.taux")}
            %] de son montant pour les contribuables soumis à imposition
            commune.
            <StyledFormControlLabel
              disabled
              control={(
                <Switch
                  // checked={this.state.checkedB}
                  // onChange={this.handleChange("checkedB")}
                  // value="checkedB"
                  color="secondary"
                />
              )}
              label="Supprimer la décote"
              // Mettre les variables de l'amendement à 0 quand le switch est passé.
            />
          </Typography>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

Alinea4a.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  formulaOutputInput: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
};

export default Alinea4a;
