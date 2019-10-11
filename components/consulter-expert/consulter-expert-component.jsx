import lightBulb from "@iconify/icons-twemoji/light-bulb";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Close as CloseIcon } from "@material-ui/icons";
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
                LexImpact fonctionne à euros constants, c&apos;est-à-dire que ce
                simulateur présente les impacts d&apos;une modification de la
                loi. Si vous souhaitez prendre en compte des hypothèses (telles
                que l&apos;inflation), il faut les ajouter dans votre simulation
                ou consulter un expert.
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
};

export default withStyles(styles)(ConsulterExpertCard);
