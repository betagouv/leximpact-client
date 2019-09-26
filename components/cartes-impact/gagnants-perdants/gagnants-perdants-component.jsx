import familyManGirlGirl from "@iconify/icons-twemoji/family-man-girl-girl";
import { Icon } from "@iconify/react";
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
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  Close as CloseIcon,
  TrendingFlat as TrendingFLatIcon,
} from "@material-ui/icons";
import { get } from "lodash";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

import GreyTooltip from "./grey-tooltip";

const styles = () => ({
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
  divTitre: {
    display: "inline-block",
    paddingLeft: "3px",
  },
  impactPLF: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 19,
  },
  impactReforme: {
    color: "#00A3FF",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 18,
  },
  impactPLFDetail: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 12,
  },
  impactReformeDetail: {
    color: "#00A3FF",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 12,
  },
  impactContainer: {
    paddingLeft: 15,
    paddingBottom: 0,
    paddingTop: 0,
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
  styleTypeImpactDetail: {
    color: "#909090",
    fontFamily: "Lato",
    fontSize: 12,
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
                <ArrowDownwardIcon fontSize="small" />
                <span>Baisse d'impôts</span>
              </Typography>
              <div>
                <span classeName={classes.impactPLF}> 20</span>
                <span classeName={classes.impactReforme}> 20</span>
              </div>
            </div>
          </div>
          <Divider />

          <div className={classes.impactContainer}>
            <div>
              <Typography classes={{ root: classes.styleTypeImpact }}>
                <TrendingFLatIcon fontSize="small" />
                <span>Pas de changement</span>
              </Typography>
              <div>
                <span classeName={classes.impactPLF}> 20</span>
                <span classeName={classes.impactReforme}> 20</span>
              </div>
              <Typography classes={{ root: classes.styleTypeImpactDetail }}>
                <span>dont </span>
                <span classeName={classes.impactPLFDetail}>10</span>
                <span classeName={classes.impactReformeDetail}>10</span>
                <span className={classes.styleTypeImpactDetail}>
                  de foyers toujours exonérés d'impôts
                </span>
              </Typography>
            </div>
          </div>

          <Divider />

          <div className={classes.impactContainer}>
            <div>
              <Typography classes={{ root: classes.styleTypeImpact }}>
                <ArrowUpwardIcon fontSize="small" />
                <span>Augmentation des impôts</span>
              </Typography>
              <div>
                <span classeName={classes.impactPLF}> 20</span>
                <span classeName={classes.impactReforme}> 20</span>
              </div>
              <Typography classes={{ root: classes.styleTypeImpactDetail }}>
                <span>dont</span>
                <span classeName={classes.impactPLFDetail}>10</span>
                <span classeName={classes.impactReformeDetail}>10</span>
                <span>foyers entrant dans l'impôt</span>
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
