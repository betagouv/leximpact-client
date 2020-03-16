import chartIncreasing from "@iconify/icons-twemoji/chart-increasing";
import lightBulb from "@iconify/icons-twemoji/light-bulb";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { withStyles } from "@material-ui/core/styles";
import { Close as CloseIcon } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

const styles = () => ({
  cardContainer: {
    minWidth: 50,
    paddingBottom: 0,
    backgroundColor: "rgba(222, 213, 0, 0.3)",
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

  subtitleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    marginLeft: "10px",
    textJustify: "left",
    marginBottom: "0.7em",
  },
  styleExpansionPanel: {
    backgroundColor: "rgba(222, 213, 0, 0)",
    boxShadow: "none",
    padding: "0px",
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

class ConsulterExpertCard extends PureComponent {
  render() {
    const {
      classes,
      isPanelExpanded,
      onExpandPanel,
      onRemoveConsulterExpert,

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
                Ce que calcule LexImpact
              </Typography>
              <Typography className={classes.subtitleCard}>
                LexImpact fonctionne à euros courants.
                {" "}
                <b>
                  L&apos;inflation n&apos;est pas paramétrée dans le simulateur.
                </b>
                <br />
              </Typography>

              <ExpansionPanel
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
              </ExpansionPanel>
            </div>

            <div className={classes.cardHeaderButtons}>
              <IconButton
                disableRipple
                aria-label="Delete"
                classes={{ root: classes.cardEditDeleteButton }}
                onClick={onRemoveConsulterExpert}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
ConsulterExpertCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  onRemoveConsulterExpert: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  onExpandPanel: PropTypes.func.isRequired,
};

export default withStyles(styles)(ConsulterExpertCard);
