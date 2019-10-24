import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const styles = {
  espaceVide: {
    height: "20px",
  },
  sectionText: {
    margin: "0 auto",
    maxWidth: "800px",
    padding: "30px",
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

      <h2>Crédits</h2>
      <hr />

      <p>
        Pour l'interface LexImpact, nous nous sommes appuyés sur la librairie
        d'Emojis Open Source Twemoji.
        {" "}
        <br />
        Nous avons parfois également effectué des modifications.
        {" "}
        <br />
      </p>

      <p>
        {" "}
        Copyright 2019 Twitter, Inc and other contributors
        <br />
        Code licensed under the MIT License:
        {" "}
        <a
          href="http://opensource.org/licenses/MIT"
          rel="noopener noreferrer"
          target="_blank">
          http://opensource.org/licenses/MIT
        </a>
        {" "}
        <br />
        Graphics licensed under CC-BY 4.0:
        {" "}
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          rel="noopener noreferrer"
          target="_blank">
          https://creativecommons.org/licenses/by/4.0/
        </a>
      </p>
    </section>
  );
}

MyComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MyComponent);
