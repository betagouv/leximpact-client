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
import "../styles/pages-textes.scss";
import Link from "next/link";
import { Paper, Grid, Button } from "@material-ui/core"
import Divider from '@material-ui/core/Divider';

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
   sectionText: {
    maxWidth: "800px",
    margin: "0 auto",
    paddingRight: "30px",
    paddingLeft: "30px",
    paddingTop: "30px",
  },

  gridSection: {
    maxWidth: "800px",
    margin: "0 auto",
    paddingRight: "30px",
    paddingLeft: "30px",
    paddingTop: "10px",
    paddingBottom: "30px",
  },

   griditemOpen: {
    paddingRight: "10px",
  },

  griditemPop: {
    paddingLeft: "10px",
  },

  paperItem: {
    padding: "20px",
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
        <section className={classes.sectionText}>
        <h1>Présentation du service <br />
        et conditions d&apos;utilisation</h1>



            <h2>Contexte</h2>
            <Divider light={false}/>

                <p>Chaque année, toute ou partie de la population française est concernée par des changements fiscaux, 
                hérités de modifications législatives régulières.</p> 

                <p>Aujourd’hui, le Parlement dispose de peu de moyens d&apos;évaluation des amendements 
                et propositions avant de voter la loi. Les impacts sur la population 
                et les recettes sont donc trop souvent découverts pendant les débats, 
                voire une fois la loi votée et mise à exécution.</p>

                <p>Là où le Parlement détient une expertise politique et juridique, 
                LexImpact apporte un soutien en chiffrage, permettant de vérifier, 
                dans une certaine mesure, la corrélation entre la vision politique souhaitée 
                et les impacts sur la population française.</p>

                <p>Pour cela, LexImpact apporte une capacité de simulation ex ante 
                sur un périmètre actuellement limité à l&apos;impôt sur le revenu, qui vise à s&apos;élargir progressivement.</p>

            <h2>Service actuel</h2> 
            <Divider/>

                <p>LexImpact est une interface qui permet d’évaluer, de façon rapide, 
                l&apos;impact des réformes paramétriques de l'impôt sur le revenu. 
                Par exemple, les usagers du service peuvent découvrir en quasi temps réel, 
                le montant des impôts payés par des foyers fiscaux types, 
                avant et après la réforme qu&apos;ils ont entré dans l’interface.</p>

                <p>Le service s&apos;appuie sur <a href="https://fr.openfisca.org/"target="_blank">OpenFisca</a>, 
                logiciel libre créé en 2012 
                et maintenu par la <a href="https://www.numerique.gouv.fr/dinsic/"target="_blank">DINSIC</a>, 
                qui transforme le code législatif en code informatique.</p>

                <p><a href="https://github.com/betagouv/leximpact-client"target="_blank">Le code de LexImpact est libre</a>, 
                sous licence AGPL-3.0, et peut donc être vérifié et amélioré par toutes et tous.</p>

                <p>LexImpact se décline en deux services distincts qui s&apos;adressent à deux usagers différents :</p>
                    <ul> 
                        <li>le grand public (OPEN LexImpact) ;</li>
                        <li>des personnes dûment habilitées participant 
                        à l&apos;élaboration de la loi (LexImpact POP).</li>
                    </ul> 

                <Divider/>

                <p>Vous trouverez ci-dessous le détail complet des fonctionnalités disponibles 
                dans chacune des versions du service :</p>
          </section>
         
          <Grid
          container
          direction="row"
          alignItems="flex-start"
          justify="space-between"
          className={classes.gridSection}
          >
          <Grid item xs={6} className={classes.griditemOpen}>
                <Paper className={classes.paperItem}>
                    <h2>OPEN LexImpact</h2>
                        <p>OPEN Leximpact est un service accessible à toutes et tous. </p>

                        <p>Il vous permet de simuler les impacts d&apos;une réforme 
                        sur des foyers fiscaux types. Le service ne vous permet pas 
                        de simuler votre situation personnelle.</p>

                        <Divider variant="middle" />

                        <p>Dans le cadre de l&apos;actuel périmètre, limité à l&apos;Article 197 
                        du Code général des impôts, concernant spécifiquement l&apos;impôt sur le revenu, 
                        OPEN LexImpact permet de simuler et de comparer :</p>
                            <ul> 
                                <li>les impacts du code existant,</li>
                                <li>les impacts d&apos;un amendement en faisant 
                                directement varier les paramètres du texte de loi,</li>
                                <li>les impacts du projet de loi de finance pour l&apos;année N+1,</li>
                            </ul>
                        <p>sur des foyers fiscaux types.</p>

                        <Divider variant="middle" />

                        <p>Les paramètres modifiables dans l&apos;Article 197 du CGI sont :</p>
                            <ul>
                                <li>le barème de l&apos;impôt sur le revenu,</li>
                                <li>les plafonds du quotient familial,</li>
                                <li>la décote,</li>
                                <li>la réfaction foyers modestes,</li>
                                <li>la réfaction outre-mers.</li>
                            </ul>

                        <p>OPEN LexImpact permet également de modifier 
                        le revenu net à déclarer des foyers fiscaux types 
                        prédéfinis sur l&apos;interface.</p>

                        <Divider variant="middle" />

                        <p>L&apos;utilisation d&apos;OPEN LexImpact est libre, facultative et gratuite ; 
                        toute utilisation du service est subordonnée à l&apos;acceptation préalable
                         et au respect intégral des conditions générales d&apos;utilisation 
                         (CGU) disponibles ci-après :</p>
                        
                        <Link href="/conditions-d-utilisation-openleximpact">
                            <Button variant="contained" color="secondary" size= "large" fullWidth="true">CGU OPEN LexImpact</Button>
                        </Link>
                      </Paper>

                </Grid>

                <Grid item xs={6} className={classes.griditemPop}>
                  <Paper className={classes.paperItem}>
                    <h2>LexImpact POP</h2>
                     <p>LexImpact POP est uniquement accessible à des personnes habilitées, 
                     parties prenantes de l&apos;élaboration de la loi.</p>

                        <p>En plus de ce que permet de faire OPEN LexImpact, 
                        LexImpact POP vous permet de simuler les impacts macros 
                        d&apos;une réforme sur la population et les recettes de l&apos;État.</p>

                        <Divider variant="middle" />

                        <p>Dans le cadre de l&apos;actuel périmètre, 
                        limité à l&apos;Article 197 du Code général des impôts, 
                        concernant spécifiquement l&apos;impôt sur le revenu, 
                        LexImpact POP permet d&apos;évaluer et de comparer : </p>
                            <ul> 
                                <li>les impacts du code existant,</li>
                                <li>les impacts d&apos;un amendement en faisant 
                                directement varier les paramètres du texte de loi,</li>
                                <li>les impacts du projet de loi de finance pour l&apos;année N+1,</li>
                            </ul>
                        <p>sur :</p>
                            <ul> 
                                  <li>des foyers fiscaux types,</li>
                                  <li>les recettes de l&apos;État,</li>
                                  <li>la répartition des recettes de l&apos;État par décile de population.</li>
                            </ul>

                        <Divider variant="middle" />

                        <p>Les paramètres modifiables dans l&apos;Article 197 du CGI sont : </p>
                            <ul>
                                <li>le barème de l&apos;impôt sur le revenu,</li>
                                <li>les plafonds du quotient familial,</li>
                                <li>la décote,</li>
                                <li>la réfaction foyers modestes,</li>
                                <li>la réfaction outre-mers.</li>
                            </ul>

                        <Divider variant="middle" />

                        <p>Afin de pouvoir chiffrer les impacts sur le budget de l&apos;État notamment, 
                        LexImpact POP s&apos;appuie sur des données représentatives de la population, 
                        couvertes par des secrets protégés par la loi. Ainsi, seules les personnes 
                        dûment habilitées peuvent y avoir accès. </p>

                        <p>Toute utilisation du service est subordonnée à l&apos;acceptation préalable 
                        et au respect intégral des conditions générales d&apos;utilisation (CGU), 
                        disponibles ci-après : </p>

                        <Link href="/conditions-d-utilisation-leximpactpop">
                              <Button variant="contained" color="secondary" size= "large" fullWidth="true"> CGU LexImpact POP</Button>
                        </Link>
                      </Paper>
                  </Grid>

              </Grid>
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
