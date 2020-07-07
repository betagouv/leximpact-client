import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Link from "next/link";
import PropTypes from "prop-types";

const styles = {
  dividerMarge: {
    marginTop: "20px",
  },

  espaceVide: {
    height: "20px",
  },
  paperItem: {
    padding: "20px",
  },
};

function TextePresentationLeximpactPop({ classes }) {
  return (
    <Paper className={classes.paperItem}>
      <h2>LexImpact IR en accès restreint</h2>
      <p>
        La version en accès restreint de LexImpact IR est
        {" "}
        <b>
          uniquement accessible à&nbsp;des personnes habilitées, parties
          prenantes de l&apos;élaboration de la loi.
        </b>
      </p>

      <p>
        En plus de ce que permet de faire la version ouverte de LexImpact, sa version
        en accès restreint vous permet de&nbsp;simuler les impacts macros d&apos;une réforme
        sur la population et les recettes de l&apos;État.
      </p>

      <Divider className={classes.dividerMarge} />

      <p>
        Dans le cadre de l&apos;actuel périmètre, limité à&nbsp;l&apos;Article
        197 du Code général des impôts, concernant spécifiquement l&apos;impôt
        sur le revenu, la version en accès restreint de LexImpact permet d&apos;évaluer
        et&nbsp;de comparer :
        {" "}
      </p>
      <ul>
        <li>les impacts du code existant,</li>
        <li>
          les impacts d&apos;un amendement en faisant directement varier les
          paramètres du texte de loi,
        </li>
        <li>les impacts du projet de loi de finance pour l&apos;année N+1,</li>
      </ul>
      <p>sur :</p>
      <ul>
        <li>des foyers fiscaux types,</li>
        <li>les recettes de l&apos;État,</li>
        <li>
          la répartition des recettes de l&apos;État par décile de population.
        </li>
      </ul>

      <Divider className={classes.dividerMarge} />

      <p>
        Les paramètres modifiables dans l&apos;Article 197 du
        &nbsp;<abbr title="Code général des impôts">CGI</abbr>
        &nbsp;sont :
      </p>
      <ul>
        <li>le barème de l&apos;impôt sur le revenu,</li>
        <li>les plafonds du quotient familial,</li>
        <li>la décote,</li>
        <li>la réfaction outre-mers.</li>
      </ul>

      <Divider className={classes.dividerMarge} />

      <p>
        Afin de pouvoir chiffrer les impacts sur le budget de l&apos;État
        notamment, la version en accès restreint de LexImpact s&apos;appuie sur des données
        représentatives de la population, couvertes par des secrets protégés par la loi.
        Ainsi, seules les personnes dûment habilitées peuvent y avoir accès.
        {" "}
      </p>

      <p>
        Toute utilisation du service est subordonnée à&nbsp;l&apos;acceptation
        préalable et au respect intégral des conditions générales
        d&apos;utilisation (CGU), disponibles ci-après&nbsp;:
        {" "}
      </p>

      <div className={classes.espaceVide} />

      <Link href="/conditions-d-utilisation-leximpactpop">
        <Button fullWidth color="secondary" size="large" variant="contained">
          {" "}
          CGU LexImpact en accès restreint
        </Button>
      </Link>
    </Paper>
  );
}

TextePresentationLeximpactPop.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TextePresentationLeximpactPop);
