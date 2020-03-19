import familyManGirlGirl from "@iconify/icons-twemoji/family-man-girl-girl";
import { Icon } from "@iconify/react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CachedIcon from "@material-ui/icons/Cached";
import CloseIcon from "@material-ui/icons/Close";
import FaceIcon from "@material-ui/icons/Face";
import GroupIcon from "@material-ui/icons/Group";
import TrendingFLatIcon from "@material-ui/icons/TrendingFlat";
import { get } from "lodash";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

const styles = () => ({
  buttonPosition: {
    marginBottom: "114px",
    marginTop: "41px",
  },
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
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 5,
    textAlign: "left",
  },
  cardHeaderButtons: {
    maxWidth: 15,
    minWidth: 15,
    width: 15,
  },
  containerImpact: {
    alignContent: "flex-start",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "0px",
  },
  divTitre: {
    display: "inline-block",
    paddingLeft: "3px",
  },
  impactContainer: {
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 5,
  },
  impactPLF: {
    alignSelf: "flex-start",
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",

    //  paddingLeft: "20px",
  },

  impactPLFDetail: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontSize: 12,
    fontWeight: "bold",
  },
  impactPLFUnite: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontSize: 20,
    fontWeight: "regular",
    textAlign: "center",
  },

  impactReforme: {
    alignSelf: "flex-end",
    color: "#00A3FF",
    fontFamily: "Lato",
    fontSize: 25,
    fontWeight: "bold",

    //  paddingLeft: "70px",
  },
  impactReformeDetail: {
    color: "#00A3FF",
    fontFamily: "Lato",
    fontSize: 12,
    fontWeight: "bold",
  },
  impactReformeUnite: {
    color: "#00A3FF",
    fontFamily: "Lato",
    fontSize: 20,
    fontWeight: "regular",
    textAlign: "center",
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
  sourceInsee: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    lineHeight: "15px",
    marginBottom: "15px",
    marginLeft: "15px",
    marginRight: "15px",
    textAlign: "right",
  },
  styleGroupIconBleu: {
    color: "#00A3FF",
    verticalAlign: "text-bottom",
  },
  styleGroupIconRouge: {
    color: "#FF6B6B",
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
    paddingLeft: "10px",
    textJustify: "none",
  },
  styleTypeImpactDetail: {
    color: "#909090",
    fontFamily: "Lato",
    fontSize: 12,
  },
  subtitleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    marginLeft: "10px",
    textJustify: "left",
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

class GagnantsPerdantsCard extends PureComponent {
  render() {
    const {
      classes,
      foyers_fiscaux_touches,
      isDisabledEtat,
      isLoadingEtat,
      onClickSimPop,
    } = this.props;

    const baissePlf = Math.round(
      get(foyers_fiscaux_touches, "avant_to_plf.gagnant", 0) / 100000,
    ) / 10;
    const baisseReforme = Math.round(
      get(foyers_fiscaux_touches, "avant_to_apres.gagnant", 0) / 100000,
    ) / 10;
    const neutrePlf = Math.round(
      (get(foyers_fiscaux_touches, "avant_to_plf.neutre", 0)
          + get(foyers_fiscaux_touches, "avant_to_plf.neutre_zero", 0))
          / 100000,
    ) / 10;
    const neutreReforme = Math.round(
      (get(foyers_fiscaux_touches, "avant_to_apres.neutre", 0)
          + get(foyers_fiscaux_touches, "avant_to_apres.neutre_zero", 0))
          / 100000,
    ) / 10;
    const neutreZeroPlf = Math.round(
      get(foyers_fiscaux_touches, "avant_to_plf.neutre_zero", 0) / 100000,
    ) / 10;
    const neutreZeroReforme = Math.round(
      get(foyers_fiscaux_touches, "avant_to_apres.neutre_zero", 0) / 100000,
    ) / 10;
    const haussePlf = Math.round(
      (get(foyers_fiscaux_touches, "avant_to_plf.perdant", 0)
          + get(foyers_fiscaux_touches, "avant_to_plf.perdant_zero", 0))
          / 100000,
    ) / 10;
    const hausseReforme = Math.round(
      (get(foyers_fiscaux_touches, "avant_to_apres.perdant", 0)
          + get(foyers_fiscaux_touches, "avant_to_apres.perdant_zero", 0))
          / 100000,
    ) / 10;
    const hausseZeroPlf = Math.round(
      get(foyers_fiscaux_touches, "avant_to_plf.perdant_zero", 0) / 100000,
    ) / 10;
    const hausseZeroReforme = Math.round(
      get(foyers_fiscaux_touches, "avant_to_apres.perdant_zero", 0) / 100000,
    ) / 10;

    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <div className={classes.divTitre}>
              <Icon height="40" icon={familyManGirlGirl} width="40" />
            </div>
            <div className={classes.divTitre}>
              <Typography className={classes.titleCard}>
                Nombre de foyers fiscaux
              </Typography>
              <Typography className={classes.subtitleCard}>
                en millions par rapport au droit existant*
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
          {isDisabledEtat ? (
            <div>
              <center className={classes.buttonPosition}>
                <Button
                  color="secondary"
                  size="medium"
                  variant="outlined"
                  onClick={onClickSimPop}>
                  <AccountBalanceIcon />
                  <FaceIcon className={classes.marginIcon} />
                  &nbsp;Estimer ~60&quot;
                  <CachedIcon className={classes.miniIcon} />
                </Button>
              </center>
            </div>
          ) : (
            [
              isLoadingEtat ? (
                <center className={classes.buttonPosition}>
                  <CircularProgress color="secondary" />
                </center>
              ) : (
                <>
                  <div className={classes.impactContainer}>
                    <div>
                      <ArrowUpwardIcon
                        classes={{ root: classes.styleIconPerdant }}
                        fontSize="medium"
                      />
                      <Typography inline classes={{ root: classes.titleCard }}>
                        ayant une augmentation de l&apos;IR
                      </Typography>

                      <div className={classes.containerImpact}>
                        <div>
                          <Typography inline classes={{ root: classes.impactPLF }}>
                            <span>
                              {" "}
                              {haussePlf}
                            </span>
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
                            <span>
                              {" "}
                              {hausseReforme}
                            </span>
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
                          <span>
                            {" "}
                            {hausseZeroPlf}
                          </span>
                          <span>M</span>
                        </Typography>
                        <Typography
                          inline
                          classes={{ root: classes.impactReformeDetail }}>
                          <span>
                            {" "}
                            {hausseZeroReforme}
                          </span>
                          <span>M</span>
                        </Typography>
                        <span>&nbsp;de foyers entrant dans l&apos;IR</span>
                      </Typography>
                    </div>
                  </div>

                  <Divider />

                  <div className={classes.impactContainer}>
                    <div>
                      <ArrowDownwardIcon
                        classes={{ root: classes.styleIconGagnant }}
                        fontSize="medium"
                      />
                      <Typography inline classes={{ root: classes.titleCard }}>
                        ayant une baisse de l&apos;IR
                      </Typography>
                      <div className={classes.containerImpact}>
                        <div>
                          <Typography inline classes={{ root: classes.impactPLF }}>
                            <span>
                              {" "}
                              {baissePlf}
                              {" "}
                            </span>
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
                            <span>
                              {" "}
                              {baisseReforme}
                            </span>
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
                      <Typography inline classes={{ root: classes.titleCard }}>
                        non concernés
                      </Typography>
                      <div className={classes.containerImpact}>
                        <div>
                          <Typography inline classes={{ root: classes.impactPLF }}>
                            <span>
                              {" "}
                              {neutrePlf}
                            </span>
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
                            <span>
                              {" "}
                              {neutreReforme}
                            </span>
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
                          <span>
                            {" "}
                            {neutreZeroPlf}
                          </span>
                          <span>M</span>
                        </Typography>
                        <Typography
                          inline
                          classes={{ root: classes.impactReformeDetail }}>
                          <span>
                            {" "}
                            {neutreZeroReforme}
                          </span>
                          <span>M</span>
                        </Typography>
                        <span className={classes.styleTypeImpactDetail}>
                          &nbsp;de foyers toujours exonérés d&apos;IR
                        </span>
                      </Typography>
                    </div>
                  </div>

                  <Typography className={classes.sourceInsee}>
                    * Chiffrages indicatifs.
                    <br />
                    {" "}
                    Données ERFS-FPR (Insee).
                  </Typography>
                </>
              ),
            ])}
        </CardContent>
      </Card>
    );
  }
}
GagnantsPerdantsCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  foyers_fiscaux_touches: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
  isDisabledEtat: PropTypes.bool.isRequired,
  isLoadingEtat: PropTypes.bool.isRequired,
  onClickSimPop: PropTypes.func.isRequired,
};

export default withStyles(styles)(GagnantsPerdantsCard);
