/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2]
*/
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

const styles = {
  sectionText: {
    maxWidth: "800px",
    margin: "0 auto",
    paddingRight: "30px",
    paddingLeft: "30px",
    paddingTop: "30px",
  },
  dividerMarge: {
    marginTop: "20px",
  },
  espaceVide: {
    height: "20px",
  },
};

function TextePresentationGenerale({ classes }) {
  return (
    <section className={classes.sectionText}>
      <h1>
        Présentation du service
        {" "}
        <br />
        et conditions d&apos;utilisation
      </h1>

      <h2>Contexte</h2>
      <hr />

      <p>
        Chaque année, toute ou partie de la population française est concernée
        par des changements fiscaux, hérités de modifications législatives
        régulières.
      </p>

      <p>
        Aujourd’hui, le Parlement dispose de peu de moyens d&apos;évaluation des
        amendements et propositions avant de voter la loi. Les impacts sur la
        population et les recettes sont donc trop souvent découverts pendant
        les&nbsp;débats, voire une fois la loi votée et mise à exécution.
      </p>

      <p>
        Là où le Parlement détient une expertise politique et juridique,
        LexImpact apporte un soutien en chiffrage, permettant de vérifier, dans
        une certaine mesure, la corrélation entre la vision politique souhaitée
        et&nbsp;les&nbsp;impacts sur la population française.
      </p>

      <p>
        Pour cela, LexImpact apporte une capacité de simulation ex ante sur un
        périmètre actuellement limité à&nbsp;l&apos;impôt sur le revenu, qui
        vise à s&apos;élargir progressivement.
      </p>

      <div className={classes.espaceVide} />

      <h2>Service actuel</h2>
      <hr />

      <p>
        LexImpact est une interface qui permet d’évaluer, de façon rapide,
        l&apos;impact des réformes paramétriques de&nbsp;l&apos;impôt sur le
        revenu. Par exemple, les usagers du service peuvent découvrir en quasi
        temps réel, le&nbsp;montant des impôts payés par des foyers fiscaux
        types, avant et après la réforme qu&apos;ils ont entré
        dans&nbsp;l’interface.
      </p>

      <p>
        Le service s&apos;appuie sur
        {" "}
        <a
          href="https://fr.openfisca.org/"
          rel="noopener noreferrer"
          target="_blank"
        >
          OpenFisca
        </a>
        , logiciel libre créé en 2012 et maintenu par la
        {" "}
        <a
          href="https://www.numerique.gouv.fr/dinsic/"
          rel="noopener noreferrer"
          target="_blank"
        >
          DINSIC
        </a>
        , qui transforme le&nbsp;code législatif en code informatique.
      </p>

      <p>
        <a
          href="https://github.com/betagouv/leximpact-client"
          rel="noopener noreferrer"
          target="_blank"
        >
          Le code de LexImpact est libre
        </a>
        , sous licence AGPL-3.0, et peut donc être vérifié et amélioré par
        toutes et&nbsp;tous.
      </p>

      <p>
        LexImpact se décline en deux services distincts qui s&apos;adressent à
        deux usagers différents :
      </p>
      <ul>
        <li>le grand public (OPEN LexImpact) ;</li>
        <li>
          des personnes dûment habilitées participant à l&apos;élaboration de la
          loi (LexImpact POP).
        </li>
      </ul>

      <Divider className={classes.dividerMarge} />

      <p>
        Vous trouverez ci-dessous le détail complet des fonctionnalités
        disponibles dans chacune des versions du&nbsp;service :
      </p>

      <div className={classes.espaceVide} />
    </section>
  );
}

TextePresentationGenerale.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(TextePresentationGenerale);
