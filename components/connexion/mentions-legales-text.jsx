import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import PropTypes from "prop-types";

const styles = theme => ({
  link: {
    color: "#B1B1B1",
    display: "inline-block",
    textDecoration: "underline",
  },
  mentionsLegales: {
    color: "#B1B1B1",
    flex: "1",
    fontFamily: "lato",
    fontSize: "14px",
    marginBottom: "43px",
    marginTop: "43px",
    alignSelf: "flex-end",
    maxWidth: "52Opx",
    textAlign: "right",
    letterSpacing: "0.3px",
    lineHeight: "17px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      marginBottom: "20px",
      marginTop: "20px",
      maxWidth: "200px",
      lineHeight: "14px",
      textAlign: "right",
    },
  },
});

const MentionsLegales = ({ classes }) => (
  <div className={classes.mentionsLegales}>
    <span>
      * LexImpact POP s’appuie sur des données couvertes par des secrets
      protégés par la loi, ainsi seules les personnes dûment habilitées peuvent
      y avoir accès. Pour plus d’informations veuillez consulter&nbsp;
    </span>
    <Link href="/presentation-et-cgu">
      <a className={classes.link}>nos conditions générales d’utilisation.</a>
    </Link>
  </div>
);

MentionsLegales.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MentionsLegales);
