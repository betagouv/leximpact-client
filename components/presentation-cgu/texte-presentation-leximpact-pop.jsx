import { Button, Paper } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
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
      <h2>LexImpact POP</h2>
      <p>
        LexImpact POP est
        {" "}
        <b>
          uniquement accessible à&nbsp;des personnes habilitées, parties
          prenantes de l&apos;élaboration de la loi.
        </b>
      </p>

      <p>
        En plus de ce que permet de faire OPEN LexImpact, LexImpact POP vous
        permet de&nbsp;simuler les impacts macros d&apos;une réforme sur la
        population et les recettes de l&apos;État.
      </p>

      <Divider className={classes.dividerMarge} />

      <p>
        Dans le cadre de l&apos;actuel périmètre, limité à&nbsp;l&apos;Article
        197 du Code général des impôts, concernant spécifiquement l&apos;impôt
        sur le revenu, LexImpact POP permet d&apos;évaluer et&nbsp;de comparer :
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

      <p>Les paramètres modifiables dans l&apos;Article 197 du CGI sont : </p>
      <ul>
        <li>le barème de l&apos;impôt sur le revenu,</li>
        <li>les plafonds du quotient familial,</li>
        <li>la décote,</li>
        <li>la réfaction foyers modestes,</li>
        <li>la réfaction outre-mers.</li>
      </ul>

      <Divider className={classes.dividerMarge} />

      <p>
        Afin de pouvoir chiffrer les impacts sur le budget de l&apos;État
        notamment, LexImpact POP s&apos;appuie sur des données représentatives
        de la population, couvertes par des secrets protégés par la loi. Ainsi,
        seules les personnes dûment habilitées peuvent y avoir accès.
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
          CGU LexImpact POP
        </Button>
      </Link>
    </Paper>
  );
}

TextePresentationLeximpactPop.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TextePresentationLeximpactPop);
