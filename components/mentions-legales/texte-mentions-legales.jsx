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
        Equipe Leximpact de L&apos;Assemblée nationale
      </p>
      <p>126, rue de l&apos;Université - 75355 Paris 07 SP.</p>

      <div className={classes.espaceVide} />

      <h2>Site Internet</h2>
      <hr />

      <p>
        Directeur de la publication : Secrétaire général de l&apos;Assemblée nationale.
      </p>

      <p>Michel Moreau</p>

      <div className={classes.espaceVide} />

      <h2>Hébergeur</h2>
      <hr />

      <p>Hébergé sur Scalingo SAS</p>

      <p>
        15 avenue du Rhin
        <br />
        67100 Strasbourg
        <br />
        France
      </p>

      <div className={classes.espaceVide} />

      <h2>Crédits</h2>
      <hr />

      <p>
        Les emojis utilisés proviennent de la librairie&nbsp;
        <a
          href="https://twemoji.twitter.com/"
          rel="noopener noreferrer"
          target="_blank">
          Twemoji
        </a>
        , sous licence&nbsp;
        <a
          href="https://creativecommons.org/licenses/by/4.0/"
          rel="noopener noreferrer"
          target="_blank">
          CC-BY 4.0
        </a>
        .
      </p>
    </section>
  );
}

MyComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(MyComponent);
