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
    textAlign: "left",
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
    paddingBottom: "0px",
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
    textJustify: "left",
  },
  styleGroupIconRouge: {
    color: "#FF6B6B",
    verticalAlign: "text-bottom",
  },
  styleGroupIconBleu: {
    color: "#00A3FF",
    verticalAlign: "text-bottom",
  },
  styleIconGagnant: {
    color: "#13CC03",
    verticalAlign: "bottom",
  },
  styleIconNeutre: {
    color: "#B1B1B1",
    verticalAlign: "bottom",
  },
  styleIconPerdant: {
    color: "#FFAC33",
    verticalAlign: "bottom",
  },
  styleTypeImpact: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1em",
    fontWeight: "regular",
    textJustify: "none",
    paddingLeft: "10px",
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
    textJustify: "none",
  },
});

class GagnantsPerdantsCard extends PureComponent {
  render() {
    const {
      classes,
      foyers_fiscaux_touches,
      isDisabledEtat,
      isLoadingEtat,
    } = this.props;


    const baisse_plf = Math.round(get(foyers_fiscaux_touches,"avant_to_plf.gagnant",0)/100000)/10;
    const baisse_reforme = Math.round(get(foyers_fiscaux_touches,"avant_to_apres.gagnant",0)/100000)/10;
    const neutre_plf = Math.round( (get(foyers_fiscaux_touches,"avant_to_plf.neutre",0)+ get(foyers_fiscaux_touches,"avant_to_plf.neutre_zero",0))/100000)/10;
    const neutre_reforme = Math.round( (get(foyers_fiscaux_touches,"avant_to_apres.neutre",0)+ get(foyers_fiscaux_touches,"avant_to_apres.neutre_zero",0))/100000)/10;
    const neutre_zero_plf = Math.round(get(foyers_fiscaux_touches,"avant_to_plf.neutre_zero",0)/100000)/10;
    const neutre_zero_reforme = Math.round(get(foyers_fiscaux_touches,"avant_to_apres.neutre_zero",0)/100000)/10;
    const hausse_plf = Math.round( (get(foyers_fiscaux_touches,"avant_to_plf.perdant",0)+ get(foyers_fiscaux_touches,"avant_to_plf.perdant_zero",0))/100000)/10;
    const hausse_reforme = Math.round( (get(foyers_fiscaux_touches,"avant_to_apres.perdant",0)+ get(foyers_fiscaux_touches,"avant_to_apres.perdant_zero",0))/100000)/10;
    const hausse_zero_plf = Math.round(get(foyers_fiscaux_touches,"avant_to_plf.perdant_zero",0)/100000)/10;
    const hausse_zero_reforme = Math.round(get(foyers_fiscaux_touches,"avant_to_apres.perdant_zero",0)/100000)/10;



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
                fontSize="medium"
              />
              <Typography inline classes={{ root: classes.styleTypeImpact }}>
                Baisse de l'IR
              </Typography>
              <div className={classes.containerImpact}>
                <div>
                  <Typography inline classes={{ root: classes.impactPLF }}>
                    <span> {baisse_plf} </span>
                    {" "}
                  </Typography>
                  <Typography inline classes={{ root: classes.impactPLFUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon
                    classes={{ root: classes.styleGroupIconRouge }}
                    fontSize="small"
                  />
                </div>

                <div>
                  <Typography inline classes={{ root: classes.impactReforme }}>
                    <span> {baisse_reforme}</span>
                    {" "}
                  </Typography>
                  <Typography
                    inline
                    classes={{ root: classes.impactReformeUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon
                    classes={{ root: classes.styleGroupIconBleu }}
                    fontSize="small"
                  />
                </div>
              </div>
            </div>
          </div>

          <Divider />

          <div className={classes.impactContainer}>
            <div>
              <TrendingFLatIcon
                classes={{ root: classes.styleIconNeutre }}
                fontSize="medium"
              />
              <Typography inline classes={{ root: classes.styleTypeImpact }}>
                Pas de changement
              </Typography>
              <div className={classes.containerImpact}>
                <div>
                  <Typography inline classes={{ root: classes.impactPLF }}>
                    <span> {neutre_plf}</span>
                    {" "}
                  </Typography>
                  <Typography inline classes={{ root: classes.impactPLFUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon
                    classes={{ root: classes.styleGroupIconRouge }}
                    fontSize="small"
                  />
                </div>

                <div>
                  <Typography inline classes={{ root: classes.impactReforme }}>
                    <span> {neutre_reforme}</span>
                    {" "}
                  </Typography>
                  <Typography
                    inline
                    classes={{ root: classes.impactReformeUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon
                    classes={{ root: classes.styleGroupIconBleu }}
                    fontSize="small"
                  />
                </div>
              </div>

              <Typography classes={{ root: classes.styleTypeImpactDetail }}>
                <span>dont </span>
                <Typography inline classes={{ root: classes.impactPLFDetail }}>
                  <span> {neutre_zero_plf}</span>
                  <span>M</span>
                </Typography>
                <Typography
                  inline
                  classes={{ root: classes.impactReformeDetail }}>
                  <span> {neutre_zero_reforme}</span>
                  <span>M</span>
                </Typography>
                <span className={classes.styleTypeImpactDetail}>
                  de foyers toujours exonérés d'IR
                </span>
              </Typography>
            </div>
          </div>

          <Divider />

          <div className={classes.impactContainer}>
            <div>
              <ArrowUpwardIcon
                classes={{ root: classes.styleIconPerdant }}
                fontSize="medium"
              />
              <Typography inline classes={{ root: classes.styleTypeImpact }}>
                Augmentation de l'IR
              </Typography>

              <div className={classes.containerImpact}>
                <div>
                  <Typography inline classes={{ root: classes.impactPLF }}>
                    <span> {hausse_plf}</span>
                    {" "}
                  </Typography>
                  <Typography inline classes={{ root: classes.impactPLFUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon
                    classes={{ root: classes.styleGroupIconRouge }}
                    fontSize="small"
                  />
                </div>
                <div>
                  <Typography inline classes={{ root: classes.impactReforme }}>
                    <span> {hausse_reforme}</span>
                    {" "}
                  </Typography>
                  <Typography
                    inline
                    classes={{ root: classes.impactReformeUnite }}>
                    <span>M</span>
                  </Typography>
                  <GroupIcon
                    classes={{ root: classes.styleGroupIconBleu }}
                    fontSize="small"
                  />
                </div>
              </div>
              <Typography classes={{ root: classes.styleTypeImpactDetail }}>
                <span>dont</span>
                <Typography inline classes={{ root: classes.impactPLFDetail }}>
                  <span> {hausse_zero_plf}</span>
                  <span>M</span>
                </Typography>
                <Typography
                  inline
                  classes={{ root: classes.impactReformeDetail }}>
                  <span> {hausse_zero_reforme}</span>
                  <span>M</span>
                </Typography>
                <span>foyers entrant dans l'IR</span>
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
  index: PropTypes.number.isRequired,
  foyers_fiscaux_touches: PropTypes.shape().isRequired,
  isDisabledEtat: PropTypes.bool.isRequired,
  isLoadingEtat: PropTypes.bool.isRequired,
};

export default withStyles(styles)(GagnantsPerdantsCard);
