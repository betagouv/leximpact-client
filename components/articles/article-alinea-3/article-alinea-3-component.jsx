import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

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

class ArticleAlinea3 extends PureComponent {
  render() {
    const {
      baseOutputInput,
      expandArticlePanelHandler,
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
          <Typography
            style={styleTitreThematique}>
              Réfaction Outre-mer
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography color="inherit" variant="body2">
            3. Le montant de l&apos;impôt résultant de l&apos;application des
            dispositions précédentes est réduit de...
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
            <StyledFormControlLabel
              disabled={true}
              control={
                <Switch
                  // checked={this.state.checkedB}
                  // onChange={this.handleChange("checkedB")}
                  // value="checkedB"
                  color="secondary"
                />
              }
              label="Supprimer la réfaction outre-mer"
              // Mettre les variables de l'amendement à 0 quand le switch est passé.
            />
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
