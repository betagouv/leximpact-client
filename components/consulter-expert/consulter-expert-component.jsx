import lightBulb from "@iconify/icons-twemoji/light-bulb";
import { Icon, InlineIcon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  AccountBalance as AccountBalanceIcon,
  ArrowDownward as ArrowDownwardIcon,
  ArrowUpward as ArrowUpwardIcon,
  Cached as CachedIcon,
  Close as CloseIcon,
  Face as FaceIcon,
  Group as GroupIcon,
  TrendingFlat as TrendingFLatIcon,
} from "@material-ui/icons";
import { get } from "lodash";
import PropTypes from "prop-types";
import React, { PureComponent } from "react";

const styles = () => ({
  buttonPosition: {
    marginTop: "41px",
    marginBottom: "114px",
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

class ConsulterExpertCard extends PureComponent {
  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.cardContainer}>
        <CardContent className={classes.cardContent}>
          <div className={classes.cardHeader}>
            <div className={classes.divTitre}>
              <Icon height="40" icon={lightBulb} width="40" />
            </div>
            <div className={classes.divTitre}>
              <Typography className={classes.titleCard}>
                Comment utiliser LexImpact ?
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
        </CardContent>
      </Card>
    );
  }
}
ConsulterExpertCard.propTypes = {
  classes: PropTypes.shape().isRequired,
  index: PropTypes.number.isRequired,
  foyers_fiscaux_touches: PropTypes.shape().isRequired,
  isDisabledEtat: PropTypes.bool.isRequired,
  isLoadingEtat: PropTypes.bool.isRequired,
  onClickSimPop: PropTypes.func.isRequired,
};

export default withStyles(styles)(ConsulterExpertCard);
