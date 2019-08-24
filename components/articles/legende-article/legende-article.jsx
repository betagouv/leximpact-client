import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const stylesTheme = theme => ({
  container: {
    margin: "2em 1em 0 1em",
    padding: "0",
    paddingBottom: "7px",
    [theme.breakpoints.down("xs")]: {
      margin: "0em",
    },
  },
  styleLegende: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    lineHeight: "10px",
    marginLeft: "0px",
    marginRight: "8px",
    padding: "0 3px 0 0",
  },
  styleCodeExistant: {
    backgroundColor: "#DED500",
    backgroundSize: "auto auto",
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "8px",
    marginRight: "8px",
    padding: "3px",
  },
  styleAvantPLF: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "8px",
    marginRight: "8px",
    padding: "3px",
  },
  styleAmendement: {
    backgroundColor: "#FFFFFF",
    backgroundSize: "auto auto",
    color: "#00A3FF",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "8px",
    marginRight: "8px",
    padding: "3px",
  },
});

function LegendeArticle({ classes }) {
  return (
    <div className={classes.container}>
      <Typography inline className={classes.styleLegende}>
      Légende&nbsp;:
      </Typography>
      <Typography inline className={classes.styleCodeExistant}>
      Droit existant
      </Typography>
      <Typography inline className={classes.styleAvantPLF}>
      Baisse d&apos;impôt prévue en 2020
      </Typography>
      <Typography inline className={classes.styleAmendement}>
      Votre amendement de l’avant-PLF
      </Typography>
    </div>
  );
}

LegendeArticle.propTypes = {
  classes: PropTypes.shape().isRequired,
};
export default withStyles(stylesTheme, { withTheme: true })(LegendeArticle);
