import familyManGirlGirl from "@iconify/icons-twemoji/family-man-girl-girl";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  Close as CloseIcon,
  Group as GroupIcon,
  TrendingFlat as TrendingFLatIcon,
} from "@material-ui/icons";
import { get } from "lodash";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

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
    marginLeft: 0,
    padding: 0,
  },
  cardHeader: {
    textAlign: "right",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 5,
  },
  cardHeaderButtons: {
    maxWidth: 15,
    minWidth: 15,
    width: 15,
  },
  containerImpact: {
    justifyContent: "space-around",
    display: "flex",
    alignContent: "flex-start",
  },
  divTitre: {
    display: "inline-block",
    paddingLeft: "3px",
  },
  impactPLF: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
    alignSelf: "flex-start",
    //  paddingLeft: "20px",
  },
  impactReforme: {
    color: "#00A3FF",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf: "flex-end",

    //  paddingLeft: "70px",
  },
  impactPLFDetail: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 12,
  },
  impactPLFUnite: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontWeight: "regular",
    fontSize: 20,
    textAlign: "center",
  },
  impactReformeUnite: {
    color: "#00A3FF",
    fontFamily: "Lato",
    fontWeight: "regular",
    fontSize: 20,
    textAlign: "center",
  },

  impactReformeDetail: {
    color: "#00A3FF",
    fontFamily: "Lato",
    fontWeight: "bold",
    fontSize: 12,
  },
  impactContainer: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    paddingTop: 5,
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
  styleGagnant: {
    color: "FFFFFF",
  },
  styleIconGagnant: {
    verticalAlign: "bottom",
    color: "#13CC03",
  },
  styleIconNeutre: {
    verticalAlign: "bottom",
    color: "#B1B1B1",
  },
  styleIconPerdant: {
    verticalAlign: "bottom",
    color: "#FFAC33",
  },
  styleNeutre: {
    color: "FFFFFF",
  },
  stylePerdant: {
    color: "FFFFFF",
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
                en millions /droit existant
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
              <ArrowDownwardIcon
                classes={{ root: classes.styleIconGagnant }}
                fontSize="small"
              />
              <Typography inline classes={{ root: classes.styleTypeImpact }}>
                Baisse d'impôts
              </Typography>
              <div className={classes.containerImpact}>
                <Typography inline classes={{ root: classes.impactPLF }}>
                  <span> 20</span>
                  <Typography inline classes={{ root: classes.impactPLFUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon classeName={classes.styleIcon} fontSize="small" />
                </Typography>
                <Typography inline classes={{ root: classes.impactReforme }}>
                  <span> 20</span>
                  <Typography
                    inline
                    classes={{ root: classes.impactReformeUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon fontSize="small" />
                </Typography>
              </div>
            </div>
          </div>
          <Divider />

          <div className={classes.impactContainer}>
            <div>
              <TrendingFLatIcon
                classes={{ root: classes.styleIconNeutre }}
                fontSize="small"
              />
              <Typography inline classes={{ root: classes.styleTypeImpact }}>
                Pas de changement
              </Typography>
              <div className={classes.containerImpact}>
                <Typography inline classes={{ root: classes.impactPLF }}>
                  <span> 20</span>
                  <Typography inline classes={{ root: classes.impactPLFUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon fontSize="small" />
                </Typography>
                <Typography inline classes={{ root: classes.impactReforme }}>
                  <span> 20</span>
                  <Typography
                    inline
                    classes={{ root: classes.impactReformeUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon fontSize="small" />
                </Typography>
              </div>

              <Typography classes={{ root: classes.styleTypeImpactDetail }}>
                <span>dont </span>
                <Typography inline classes={{ root: classes.impactPLFDetail }}>
                  <span> 20</span>
                  <span>M</span>
                </Typography>
                <Typography
                  inline
                  classes={{ root: classes.impactReformeDetail }}>
                  <span> 20</span>
                  <span>M</span>
                </Typography>
                <span className={classes.styleTypeImpactDetail}>
                  de foyers toujours exonérés d'impôts
                </span>
              </Typography>
            </div>
          </div>

          <Divider />

          <div className={classes.impactContainer}>
            <div>
              <ArrowUpwardIcon
                classes={{ root: classes.styleIconPerdant }}
                fontSize="small"
              />
              <Typography inline classes={{ root: classes.styleTypeImpact }}>
                Augmentation des impôts
              </Typography>

              <div className={classes.containerImpact}>
                <Typography inline classes={{ root: classes.impactPLF }}>
                  <span> 20</span>
                  <Typography inline classes={{ root: classes.impactPLFUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon fontSize="small" />
                </Typography>
                <Typography inline classes={{ root: classes.impactReforme }}>
                  <span> 20</span>
                  <Typography
                    inline
                    classes={{ root: classes.impactReformeUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon fontSize="small" />
                </Typography>
              </div>
              <Typography classes={{ root: classes.styleTypeImpactDetail }}>
                <span>dont</span>
                <Typography inline classes={{ root: classes.impactPLFDetail }}>
                  <span> 20</span>
                  <span>M</span>
                </Typography>
                <Typography
                  inline
                  classes={{ root: classes.impactReformeDetail }}>
                  <span> 20</span>
                  <span>M</span>
                </Typography>
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
};

export default withStyles(styles)(GagnantsPerdantsCard);
