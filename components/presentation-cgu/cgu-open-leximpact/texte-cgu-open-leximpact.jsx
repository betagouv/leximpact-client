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

function TexteCguOpenLeximpact({ classes }) {
  return (
    <section className={classes.sectionText}>
      <h1>Conditions d&apos;utilisation d&apos;OPEN LexImpact</h1>

      <h2>Vocabulaire</h2>
      <hr />

      <p>« Nous » se réfère à l&apos;éditeur d&apos;OPEN LexImpact.</p>
      <p>« Vous » se réfère à un·e usager d&apos;OPEN LexImpact.</p>

      <div className={classes.espaceVide} />

      <h2>Utilisation</h2>
      <hr />

      <p>
        OPEN LexImpact est en accès libre à l&apos;adresse&nbsp;
        <a
          href="https://leximpact.beta.gouv.fr/"
          rel="noopener noreferrer"
          target="_blank">
          leximpact.beta.gouv.fr
        </a>
        . Son utilisation est gratuite et&nbsp;facultative.
      </p>

      <p>
        Si vous effectuez une simulation, vous acceptez ces conditions
        d&apos;utilisation, comme indiqué dans l&apos;Article&nbsp;L.&nbsp;112-9
        du Code des relations entre le public et l&apos;administration.
      </p>

      <p>
        L&apos;utilisation d&apos;OPEN LexImpact requiert une connexion internet
        et un navigateur récent, OPEN LexImpact ne fonctionne pas sur Internet
        Explorer. Vous pouvez installer en autonomie Chrome ou Firefox,
        sans&nbsp;droits d&apos;administration sur votre poste.
      </p>

      <p>
        Nous nous réservons le droit de bloquer, sans information préalable ni
        compensation financière, les usages mettant en péril l&apos;utilisation
        du logiciel par d&apos;autres usagers. Cela nous permet d&apos;anticiper
        d&apos;éventuelles attaques par déni de service.
      </p>

      <div className={classes.espaceVide} />

      <h2>Vos données</h2>
      <hr />

      <p>
        Lors de l&apos;utilisation du service, OPEN LexImpact ne vous demande ni
        ne stocke d&apos;information nominative telle que noms, prénoms ou
        adresses.
      </p>

      <p>
        Toutefois, nous mettons à disposition un formulaire de contact dans le
        cas où vous auriez une demande ou&nbsp;bien un retour d&apos;expérience
        à nous partager. Dans ce cadre, nous nous engageons à ne conserver que
        les données anonymisées de nos échanges. Ces informations nous
        permettront d&apos;améliorer le service. Toutes les données directement
        identifiantes (nom, adresse, …) seront supprimées dans un délai de un
        an.
      </p>

      <p>
        Nous nous engageons à ne jamais exploiter les informations que vous nous
        transmettrez dans un but commercial ou publicitaire. De manière
        générale, OPEN LexImpact n&apos;accepte aucune forme de publicité.
      </p>

      <p>
        Dans le but d&apos;évaluer la performance du service et son utilité,
        nous collectons également des données anonymes d&apos;audience,
        indépendamment des simulations effectuées.
      </p>

      <div className={classes.espaceVide} />

      <h2>Cookies</h2>
      <hr />

      <p>
        Nous utilisons des cookies persistants afin d&apos;améliorer l&apos;expérience utilisateur. Ils permettent notamment la sauvegarde de vos cas types. Ces cookies sont conservés sur votre ordinateur même après fermeture de votre navigateur et réutilisé lors des prochaines visites sur nos sites.
      </p>
      <div className={classes.espaceVide} />

      <h2>Absence de garantie de service</h2>
      <hr />

      <p>
        Nous mettons OPEN LexImpact à disposition sans garantie sur sa
        disponibilité, avec obligation de moyens et non de résultats. Cela&nbsp;signifie que
        d&apos;éventuelles indisponibilités n&apos;ouvriront pas droit à
        compensation financière.
      </p>

      <div className={classes.espaceVide} />

      <h2>Absence de garantie de résultat</h2>
      <hr />

      <p>
        {" "}
        Les résultats calculés par ce simulateur ont une valeur informative et
        ne présentent en aucun cas une&nbsp;garantie pour l&apos;usager.
      </p>

      <p>
        {" "}
        La simulation d&apos;impact sur un foyer fiscal type dépend à la fois de
        l’interface OPEN LexImpact mais également des mises à jour régulières
        d&apos;OpenFisca. Dès qu&apos;une loi est modifiée, les équipes
        contributrices et bénévoles d’OpenFisca se chargent de faire évoluer le
        code informatique pour qu&apos;il fonctionne selon la nouvelle
        réglementation en vigueur. Nous ne pouvons garantir le délai de cette
        mise à jour.
      </p>

      <p>
        {" "}
        LexImpact n&apos;est pas un simulateur d&apos;impôt sur le revenu
        individuel, c&apos;est un outil de chiffrage conçu pour évaluer les
        impacts d&apos;une réforme. Les résultats calculés par ce simulateur ont
        une valeur informative et ne représentent en aucun cas une décision
        d&apos;ouverture de droits. Pour une simulation de votre impôt sur le
        revenu personnel,&nbsp;
        <a
          href="https://www3.impots.gouv.fr/simulateur/calcul_impot/2019/index.htm"
          rel="noopener noreferrer"
          target="_blank">
          le service de la DGFIP
        </a>
        {" "}
        est disponible.
      </p>

      <div className={classes.espaceVide} />

      <h2>Évolutions</h2>
      <hr />

      <p>
        Nous pouvons faire évoluer OPEN LexImpact sans information préalable.
        Nous ajoutons régulièrement des variables, raffinons l&apos;interface et
        modifions des formulations sur la base de vos retours et des évolutions
        règlementaires.
      </p>

      <p>
        Nous pouvons suspendre l&apos;accès à OPEN LexImpact sans information
        préalable, notamment pour des raisons de maintenance. Nous mettons
        l&apos;application à jour plusieurs fois par mois.
        L&apos;indisponibilité ne dépasse généralement pas une dizaine de
        secondes.
      </p>

      <p>
        Nous pouvons aussi amender ces conditions d&apos;utilisation sans
        préavis. Les utilisateurs sont tenus de consulter régulièrement les CGU
        à jour.
      </p>
    </section>
  );
}

TexteCguOpenLeximpact.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TexteCguOpenLeximpact);
