/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import Head from "next/head";
import PropTypes from "prop-types";
import { flow } from "lodash";
import { Fragment, PureComponent } from "react";
import { withStyles } from "@material-ui/core/styles/";

import AppHeader from "../components/app-header";
import withRoot from "../lib/withRoot";
import "../styles/index.scss";
import Link from "next/link";

const styles = () => ({
  dialog: {
    width: "100%",
    backgroundColor: "rgba(229, 220, 0, 0.5)",
  },
  dialogPaper: {
    width: "800px",
    maxWidth: "800px",
    minWidth: "630px",
    backgroundColor: "#FFFFFF",
  },
  dialogContent: {
    padding: "45px 45px 0 45px",
  },
});

class ExamplePage extends PureComponent {
  render() {
    const { classes } = this.props;
    console.log("classes", classes);
    return (
      <Fragment>
        <Head>
          <title>LexImpact</title>
        </Head>
        <AppHeader/>
        <h1>Présentation du service et conditions générales d'utilisation</h1>

            <h2>Contexte</h2>

                <p>Chaque année, toute ou partie de la population française est concernée par des changements fiscaux, 
                hérités de modifications législatives régulières.</p> 

                <p>Aujourd’hui, le Parlement dispose de peu de moyens d’évaluation des amendements 
                et propositions avant de voter la loi. Les impacts sur la population 
                et les recettes sont donc trop souvent découverts pendant les débats, 
                voire une fois la loi votée et mise à exécution.</p>

                <p>Là où le Parlement détient une expertise politique et juridique, 
                LexImpact apporte un soutien en chiffrage, permettant de vérifier, 
                dans une certaine mesure, la corrélation entre la vision politique souhaitée 
                et les impacts sur la population française.</p>

                <p>Pour cela, LexImpact apporte une capacité de simulation ex ante 
                sur un périmètre actuellement limité à l’impôt sur le revenu, qui vise à s’élargir progressivement.</p>

            <h2>Service actuel</h2> 

                <p>LexImpact est une interface qui permet d’évaluer, de façon rapide, 
                l’impact des réformes paramétriques de l'impôt sur le revenu. 
                Par exemple, les usagers du service peuvent découvrir en quasi temps réel, 
                le montant des impôts payés par des foyers fiscaux types, 
                avant et après la réforme qu’ils ont entré dans l’interface.</p>

                <p>Le service s’appuie sur <a href="https://fr.openfisca.org/">OpenFisca</a>, 
                logiciel libre créé en 2012 et maintenu par la <a href="https://www.numerique.gouv.fr/dinsic/">DINSIC</a>, 
                qui transforme le code législatif en code informatique.</p>



            <Link href="/conditions-d-utilisation-openleximpact">
                    <button type="button">conditions d&apos;utilisation OPEN LexImpact</button>
            </Link>
            <Link href="/conditions-d-utilisation-leximpactpop">
                    <button type="button">conditions d&apos;utilisation LexImpact POP</button>
            </Link>
        
      </Fragment>
    );
  }
}

ExamplePage.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRoot,
)(ExamplePage);
