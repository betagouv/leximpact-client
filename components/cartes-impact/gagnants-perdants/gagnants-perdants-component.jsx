import familyManGirlBoy from "@iconify/icons-twemoji/family-man-girl-boy";
import familyManGirlGirl from "@iconify/icons-twemoji/family-man-girl-girl";
import peopleHoldingHands from "@iconify/icons-twemoji/people-holding-hands";
import { Icon, InlineIcon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Close as CloseIcon, Edit as EditIcon } from "@material-ui/icons";
import { get } from "lodash";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import GreyTooltip from "./grey-tooltip";
import SimpleCardImpactImpots from "./impact-impots";

const styles = () => ({
  badge: {
    backgroundColor: "#666666",
    height: 10,
    right: 3,
    top: 5,
    width: 10,
  },
  badgeRoot: {
    verticalAlign: "inherit",
  },
  cardContainer: {
    minWidth: 50,
    paddingBottom: 0,
    display: "flex",
  },
  cardContent: {
    "&:last-child": {
      paddingBottom: 0,
    },
    padding: 0,
  },
  cardEditDeleteButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    margin: 0,
    marginLeft: 9,
    padding: 0,
  },
  cardHeader: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 5,
  },
  cardHeaderButtons: {
    maxWidth: 60,
    minWidth: 60,
    width: 60,
  },
  cardName: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: 18,
    fontWeight: "bold",
    lineHeight: "1.1rem",
  },
  divTitre: {
    display: "inline-block",
    paddingLeft: "3px",
  },
  iconsContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingTop: 5,
  },
  residenceIcon: {
    margin: 0,
    padding: 0,
  },
  impactContainer: {
    paddingLeft: 15,
    paddingBottom: 0,
    paddingTop: 0,
  },
  revenusMensuelLegend: {
    color: "#909090",
    fontFamily: "Lato",
    fontSize: 12,
  },
  revenusMensuelValue: {
    color: "#000000",
    fontFamily: "Lato",
    fontSize: 18,
    fontWeight: "normal",
    textTransform: "none",
  },
  revenusMensuelWrapper: {
    padding: 0,
  },
  subtitleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    padding: "0 0 10px 10px",
    textJustify: "none",
  },
  styleTypeImpact: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1em",
    fontWeight: "bold",
    textJustify: "none",
  },
  titleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
    padding: "0 0 0 10px",
    textJustify: "none",
  },
});

class GagnantsPerdantsCard extends PureComponent {
  render() {
    const {
      classes,
      //    handleRemoveCasType,
      //    index,
      isLoading,
      //    resultats,
    } = this.props;
    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <div className={classes.divTitre}>
              <Icon height="40" icon={familyManGirlGirl} width="40" />
            </div>
            <div className={classes.divTitre}>
              <Typography className={classes.titleCard}>
                Foyers fiscaux touchés
              </Typography>
              <Typography className={classes.subtitleCard}>
                en millions de personnes par rapport au droit existant
              </Typography>
            </div>

            <div className={classes.cardHeaderButtons}>
              <IconButton
                disableRipple
                aria-label="Delete"
                classes={{ root: classes.cardEditDeleteButton }}
                //  onClick={handleRemoveCasType(index)}>
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </div>
          </div>

          <div className={classes.impactContainer}>
            <div>
              <Typography classes={{ root: classes.styleTypeImpact }}>
                <span>Baisse d'impôts</span>
              </Typography>
              <Typography
                disabled
                classes={{ root: classes.revenusMensuelWrapper }}>
                <span className={classes.revenusMensuelValue}> </span>
              </Typography>
            </div>
          </div>

          <Divider />

          <div className={classes.impactContainer}>
            <div>
              <Typography classes={{ root: classes.styleTypeImpact }}>
                <span>Pas de changement</span>
              </Typography>
              <Typography classes={{ root: classes.revenusMensuelLegend }}>
                <span>Reste exonérés d'impôts</span>
              </Typography>
              <Typography
                disabled
                classes={{ root: classes.revenusMensuelWrapper }}>
                <span className={classes.revenusMensuelValue}> </span>
              </Typography>
            </div>
            <div>
              <Typography classes={{ root: classes.revenusMensuelLegend }}>
                <span>Même impôt payé</span>
              </Typography>
              <Typography
                disabled
                classes={{ root: classes.revenusMensuelWrapper }}>
                <span className={classes.revenusMensuelValue}> </span>
              </Typography>
            </div>
          </div>

          <Divider />

          <div className={classes.impactContainer}>
            <div>
              <Typography classes={{ root: classes.styleTypeImpact }}>
                <span>Augmentation des impôts</span>
              </Typography>
              <Typography classes={{ root: classes.revenusMensuelLegend }}>
                <span>Entrée dans l'impôt</span>
              </Typography>
              <Typography
                disabled
                classes={{ root: classes.revenusMensuelWrapper }}>
                <span className={classes.revenusMensuelValue}> </span>
              </Typography>
            </div>
            <div>
              <Typography classes={{ root: classes.revenusMensuelLegend }}>
                <span>Augmentation</span>
              </Typography>
              <Typography
                disabled
                classes={{ root: classes.revenusMensuelWrapper }}>
                <span className={classes.revenusMensuelValue}> </span>
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
}
GagnantsPerdantsCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleRemoveCasType: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resultats: PropTypes.shape({
    apres: PropTypes.number.isRequired,
    avant: PropTypes.number.isRequired,
    plf: PropTypes.number.isRequired,
  }).isRequired,
};

export default withStyles(styles)(GagnantsPerdantsCard);
