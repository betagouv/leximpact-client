import lightBulb from "@iconify/icons-twemoji/light-bulb";
import { Icon } from "@iconify/react";
import {
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { withStyles } from "@material-ui/core/styles";
import { Close as CloseIcon } from "@material-ui/icons";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

const styles = () => ({
  cardContainer: {
    backgroundColor: "rgba(222, 213, 0, 0.3)",
    minWidth: 50,
    paddingBottom: 0,
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 0,
    },
    padding: 0,
    width: "moz-available",
  },
  cardEditDeleteButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    margin: 0,
    marginLeft: 0,
    padding: 0,
  },
  cardHeader: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 5,
    textAlign: "left",
  },
  divTitre: {
    display: "inline-block",
    paddingLeft: "3px",
  },
  styleExpansionPanel: {
    backgroundColor: "rgba(222, 213, 0, 0)",
    boxShadow: "none",
    padding: "0px",
  },
  subtitleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    marginBottom: "0.7em",
    marginLeft: "10px",
    textJustify: "left",
  },
  subtitleEnSavoirPlus: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    padding: "0",
  },
  titleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
    marginLeft: "10px",
    textJustify: "none",
  },
});

class InformationPanel extends PureComponent {
  render() {
    const {
      classes,
      // isPanelExpanded,
      onClose,
      // onExpandPanel,
    } = this.props;

    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <div className={classes.divTitre}>
              <Icon height="40" icon={lightBulb} width="40" />
            </div>
            <div className={classes.divTitre}>
              <Typography className={classes.titleCard}>
                Epidémie de Covid-19
              </Typography>
              <Typography className={classes.subtitleCard}>
                Les estimations de Leximpact des effets sur le budget de l&apos;État
                sont calculées à partir de données recalibrées s&apos;appuyant sur des
                enquêtes d&apos;années antérieures.
                <br />
                Étant donné les conséquences économiques de l&apos;épidémie actuelle, dans
                une mesure qu&apos;il est à ce jour impossible à prévoir, les résultats
                que nous affichons sont très probablement surestimés. Dès que nous aurons
                plus d&apos;informations, nous recalibrerons notre modèle en conséquence.
              </Typography>

              {/* <ExpansionPanel
                classes={{ root: classes.styleExpansionPanel }}
                expanded={isPanelExpanded}
                onChange={onExpandPanel}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography className={classes.subtitleEnSavoirPlus}>
                    En savoir plus
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography className={classes.subtitleEnSavoirPlus}>
                    La comparaison est effectuée entre le code existant et le
                    PLF prévu. Or, ces deux codes ne s&apos;appliquent pas aux
                    mêmes revenus. Afin d&apos;éviter qu&apos;une hausse de
                    revenu consécutive à l&apos;inflation ne se manifeste par
                    une hausse du taux d&apos;imposition, le PLF revalorise
                    souvent les seuils et les plafonds d&apos;un taux
                    correspondant au taux d&apos;inflation. La comparaison
                    effectuée par Leximpact est centrée sur les impacts de la
                    loi, et considère donc un ménage dont&nbsp;
                    <a
                      href="https://fr.wikipedia.org/wiki/Valeur_nominale_et_valeur_r%C3%A9elle"
                      rel="noopener noreferrer"
                      target="_blank">
                      le revenu nominal
                    </a>
                    &nbsp;ne change pas entre le code existant et le PLF, ce
                    qui, si on considère l&apos;inflation, signifierait une
                    baisse de leur revenu réel.
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel> */}
            </div>

            <div className={classes.cardHeaderButtons}>
              <IconButton
                disableRipple
                aria-label="Delete"
                classes={{ root: classes.cardEditDeleteButton }}
                onClick={onClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
InformationPanel.propTypes = {
  classes: PropTypes.shape().isRequired,
  // isPanelExpanded: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  // onExpandPanel: PropTypes.func.isRequired,
};

export default withStyles(styles)(InformationPanel);
