/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2],
  react/jsx-indent-props: [2, 2],
  "jsx-a11y/anchor-is-valid": [2, {
    "components": ["Link"],
    "specialLink": ["hrefLeft", "hrefRight"]
  }]
*/
import PropTypes from "prop-types";
import Link from "next/link";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
  mentionsLegales: {
    flex: "1",
    width: "520px",
    color: "#B1B1B1",
    fontSize: "14px",
    marginTop: "43px",
    marginBottom: "43px",
    maxWidth: "52Opx",
    textAlign: "right",
    fontFamily: "lato",
    lineHeight: "17px",
    alignSelf: "flex-end",
    letterSpacing: "0.3px",
  },
  link: {
    color: "#B1B1B1",
    display: "inline-block",
    textDecoration: "underline",
  },
});

const MentionsLegales = ({ classes }) => {
  const linkDestination = "";
  return (
    <div className={classes.mentionsLegales}>
      <span>
        * LexImpact POP s’appuie sur des données couvertes par des secrets
        protégés par la loi, ainsi seules les personnes dûment habilitées
        peuvent y avoir accès. Pour plus d’informations veuillez consulter&nbsp;
      </span>
      <Link href={linkDestination}>
        <a className={classes.link}>nos conditions générales d’utilisation.</a>
      </Link>
    </div>
  );
};

MentionsLegales.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MentionsLegales);
