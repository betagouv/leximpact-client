import lightBulb from "@iconify/icons-twemoji/light-bulb";
import { Icon } from "@iconify/react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

const styles = () => ({
  cardContainer: {
    backgroundColor: "rgba(222, 213, 0, 0.3)",
    marginBottom: 15,
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
    textAlign: "justify",
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
      onClose,
    } = this.props;

    const isExpansionPanelVisible = false;

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
                L&apos;épidémie actuelle affectant l&apos;économie dans une mesure qu&apos;il
                est à ce jour impossible à prévoir, les résultats que nous affichons sont
                très probablement surestimés.
                <br />
                Les estimations de Leximpact des effets sur le budget de l&apos;État sont
                calculées à partir de données recalibrées s&apos;appuyant sur des enquêtes
                d&apos;années passées. Dès que nous aurons plus d&apos;informations,
                nous recalibrerons le modèle en conséquence.
              </Typography>

              {isExpansionPanelVisible && (
                <ExpansionPanel
                  classes={{ root: classes.styleExpansionPanel }}>
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography className={classes.subtitleEnSavoirPlus}>
                      En savoir plus
                    </Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    <Typography className={classes.subtitleEnSavoirPlus}>
                      Texte de &quot;En savoir plus&quot;
                    </Typography>
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )}
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
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(InformationPanel);
