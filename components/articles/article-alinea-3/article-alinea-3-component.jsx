import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import warningIcon from "@iconify/icons-twemoji/warning";
import { Icon, InlineIcon } from "@iconify/react";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LexExpansionPanel from "../expandable-panels/expansion-panel";
import LexExpansionPanelDetails from "../expandable-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../expandable-panels/expansion-panel-summary";

const styles = () => ({
  warningOutremer: {
    backgroundColor: "#FFAC33",
    borderRadius: "4px",
    margin: "10px",
    padding: "10px",
    width: "95%",
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
  },
});

const styleExpansionpanel = {
  display: "inherit",
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
    display: "inline-block",
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
      classes,
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
          <Typography style={styleTitreThematique}>
            Réfaction Outre-mer
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <div className={classes.warningOutremer}>
            <Icon icon={warningIcon} />
            <Icon icon={classicalBuilding} />
            <span>
              La modification des paramètres de la décote outre-mer est
              actuellement uniquement prise en compte pour le calcul de l'impôt des
              foyers-types.
            </span>
          </div>
          <Typography color="inherit" variant="body2">
            3. Le montant de l&apos;impôt résultant de l&apos;application des
            dispositions précédentes est réduit de
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
              disabled
              control={(
                <Switch
                  // checked={this.state.checkedB}
                  // onChange={this.handleChange("checkedB")}
                  // value="checkedB"
                  color="secondary"
                />
              )}
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
  classes: PropTypes.shape().isRequired,
  baseOutputInput: PropTypes.func.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ArticleAlinea3);
