import { Button } from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Paper } from "@material-ui/core/Paper";
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

function TextePresentationOpenLeximpact({ classes }) {
  return (
    <Paper className={classes.paperItem}>
      <h2>OPEN LexImpact</h2>
      <p>OPEN Leximpact est un service accessible à&nbsp;toutes et tous. </p>

      <p>
        Il vous permet de simuler les impacts d&apos;une réforme sur des foyers
        fiscaux types. Le&nbsp;service ne vous permet pas de simuler votre
        situation personnelle.
      </p>

      <Divider className={classes.dividerMarge} />

      <p>
        Dans le cadre de l&apos;actuel périmètre, limité à&nbsp;l&apos;Article
        197 du Code général des impôts, concernant spécifiquement l&apos;impôt
        sur le revenu, OPEN LexImpact permet de simuler et de comparer :
      </p>
      <ul>
        <li>les impacts du code existant,</li>
        <li>
          les impacts d&apos;un amendement en faisant directement varier les
          paramètres du texte de loi,
        </li>
        <li>les impacts du projet de loi de finance pour l&apos;année N+1,</li>
      </ul>
      <p>sur des foyers fiscaux types.</p>

      <Divider className={classes.dividerMarge} />

      <p>Les paramètres modifiables dans l&apos;Article 197 du CGI sont :</p>
      <ul>
        <li>le barème de l&apos;impôt sur le revenu,</li>
        <li>les plafonds du quotient familial,</li>
        <li>la décote,</li>
        <li>la réfaction foyers modestes,</li>
        <li>la réfaction outre-mers.</li>
      </ul>

      <p>
        OPEN LexImpact permet également de modifier le revenu net à déclarer des
        foyers fiscaux types prédéfinis sur l&apos;interface.
      </p>

      <Divider className={classes.dividerMarge} />

      <p>
        L&apos;utilisation d&apos;OPEN LexImpact est libre, facultative et
        gratuite ; toute utilisation du&nbsp;service est subordonnée à
        l&apos;acceptation préalable et au respect intégral des conditions
        générales d&apos;utilisation (CGU) disponibles ci-après&nbsp;:
      </p>

      <div className={classes.espaceVide} />

      <Link href="/conditions-d-utilisation-openleximpact">
        <Button fullWidth color="secondary" size="large" variant="contained">
          CGU OPEN LexImpact
        </Button>
      </Link>
    </Paper>
  );
}

TextePresentationOpenLeximpact.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TextePresentationOpenLeximpact);
