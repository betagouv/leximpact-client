import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import warningIcon from "@iconify/icons-twemoji/warning";
import { Icon } from "@iconify/react";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    margin: "10px",
    padding: "10px",
    width: "95%",
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

class ArticleAlinea3 extends PureComponent {
  render() {
    const {
      baseOutputInput,
      classes,
      expandArticlePanelHandler,
      isPanelExpanded,
      isUserLogged,
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
          {isUserLogged
            ? (
              <div className={classes.warningOutremer}>
                <Icon icon={warningIcon} />
                <Icon icon={classicalBuilding} />
                <span>
              La modification des paramètres de la décote outre-mer est
              actuellement uniquement prise en compte pour le calcul de l&apos;impôt des
              foyers fiscaux types.
                </span>
              </div>
            ) : null}
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
          </Typography>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

ArticleAlinea3.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  classes: PropTypes.shape().isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
};

export default withStyles(styles)(ArticleAlinea3);
