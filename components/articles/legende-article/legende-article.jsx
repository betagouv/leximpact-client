import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import PropTypes from "prop-types";

const stylesTheme = theme => ({
  alink: {
    "&:hover": {
      color: "#00A3FF",
      textDecoration: "underline",
    },
    color: "#FF6B6B",
    textDecoration: "none",
  },
  container: {
    margin: "2em 1em 0 1em",
    padding: "0",
    paddingBottom: "7px",
    [theme.breakpoints.down("xs")]: {
      margin: "0em",
    },
  },
  styleAmendement: {
    borderRadius: "0.3em",
    color: "#00A3FF",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "4px",
    marginRight: "4px",
    padding: "3px",
  },
  styleAvantPLF: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "4px",
    marginRight: "4px",
    padding: "3px",
  },
  styleCodeExistant: {
    backgroundColor: "#DED500",
    backgroundSize: "auto auto",
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "4px",
    marginRight: "4px",
    padding: "3px",
  },
  styleLegende: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    lineHeight: "10px",
    marginLeft: "0px",
    marginRight: "8px",
    padding: "0 3px 0 0",
  },
  styleOpenInNewIcon: {
    color: "#FF6B6B",
    fontFamily: "Lato",
    fontSize: "13px",
    fontWeight: "bold",
    lineHeight: "10px",
    texAlign: "center",
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
        <a
          className={classes.alink}
          href="http://www.assemblee-nationale.fr/15/projets/pl2272.asp"
          target="blank">
          PLF 2020
          <OpenInNewIcon className={classes.styleOpenInNewIcon} />
        </a>
      </Typography>
      <Typography inline className={classes.styleAmendement}>
        Mon amendement
      </Typography>
    </div>
  );
}

LegendeArticle.propTypes = {
  classes: PropTypes.shape().isRequired,
};
export default withStyles(stylesTheme, { withTheme: true })(LegendeArticle);
