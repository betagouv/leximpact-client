import { Typography } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import InputField from "../../articles-inputs/fields/input-field";
import OutputField from "../../articles-inputs/fields/output-field";
import LexExpansionPanel from "../expandable-panels/expansion-panel";
import LexExpansionPanelDetails from "../expandable-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../expandable-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class Alinea4a extends PureComponent {
  render() {
    const {
      baseDecoteSeuilCelib,
      baseDecoteSeuilCouple,
      baseOutputInput,
      decoteSeuilCelib,
      decoteSeuilCouple,
      expandArticlePanelHandler,
      formulaOutputInput,
      isPanelExpanded,
      onInputChange,
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
          <Typography color="inherit" variant="body2">
            4. a. Le montant de l&apos;impôt résultant de l&apos;application des
            dispositions précédentes est diminué, dans...
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography color="inherit" variant="body2">
            ...la limite de son montant, de la différence entre
            {" "}
            <OutputField
              style={style.VarCodeexistant}
              value={baseDecoteSeuilCelib}
            />
            <InputField
              name="decote.seuil_celib"
              style={style.InputSeuil}
              value={decoteSeuilCelib}
              onChange={onInputChange}
            />
            € et les
            {" "}
            <OutputField style={style.VarCodeexistant} value="trois quarts" />
            {" "}
[
            {baseOutputInput("decote.taux")}
            %] de son montant pour les contribuables célibataires, divorcés ou
            veufs et de la différence entre
            <OutputField
              style={style.VarCodeexistant}
              value={baseDecoteSeuilCouple}
            />
            <InputField
              name="decote.seuil_couple"
              style={style.InputSeuil}
              value={decoteSeuilCouple}
              onChange={onInputChange}
            />
            {" "}
            € et les
            {" "}
            <OutputField style={style.VarCodeexistant} value="trois quarts" />
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
  baseDecoteSeuilCelib: PropTypes.number.isRequired,
  baseDecoteSeuilCouple: PropTypes.number.isRequired,
  baseOutputInput: PropTypes.func.isRequired,
  decoteSeuilCelib: PropTypes.number.isRequired,
  decoteSeuilCouple: PropTypes.number.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  formulaOutputInput: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default Alinea4a;
