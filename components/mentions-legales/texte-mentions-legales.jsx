/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2]
*/
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  sectionText: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "30px",
  },
  espaceVide: {
    height: "20px",
  },
};

function MyComponent({ classes }) {
  return (
    <section className={classes.sectionText}>
      <h1>Mentions légales</h1>

      <h2>Éditeur</h2>
      <hr />

      <p>
        Incubateur de services numériques de la Direction interministérielle du
        numérique
        {" "}
        <br />
        {" "}
et du système d&apos;information et de communication de
        l&apos;État (DINSIC).
      </p>
      <p>20, avenue de Ségur - 75007 Paris.</p>

      <div className={classes.espaceVide} />

      <h2>Site Internet</h2>
      <hr />

      <p>
        Directeur de la publication : directeur interministériel du numérique
        {" "}
        <br />
        et du système d&apos;information et de communication de l&apos;État.
      </p>

      <p>Nadi Bou Hanna</p>

      <div className={classes.espaceVide} />

      <h2>Hébergeur</h2>
      <hr />

      <p>Hébergé sur Scalingo SAS</p>

      <p>
        15 avenue du Rhin
        {" "}
        <br />
        67100 Strasbourg
        {" "}
        <br />
        France
      </p>

      <div className={classes.espaceVide} />
    </section>
  );
}

MyComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MyComponent);
