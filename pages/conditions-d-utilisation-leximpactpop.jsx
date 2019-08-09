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
    padding: "30px",

  }
    
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
        <AppHeader />
          <section className={classes.sectionText}>
              <h1>Conditions d'utilisation de LexImpact POP</h1>

                <p>Pour fournir les impacts agrégés sur le budget de l’État 
                et leurs effets sur des déciles de population, 
                LexImpact s’appuie sur une base de données, la&nbsp; 
                <a href="https://www.insee.fr/fr/metadonnees/source/serie/s1231/documentation-methodologique" target="_blank">base ERFS FPR</a>, 
                dont le service producteur est l’<a href="https://insee.fr">INSEE</a>. 
                Ces données sont couvertes par des secrets protégés par la loi, 
                et notamment le secret statistique.</p>

                <p>Dans le cadre de ce partenariat et afin de préserver le secret statistique,&nbsp;  
                <strong>ce service est uniquement ouvert aux personnes habilitées suivantes</strong>&nbsp;:</p>
                    <ul> 
                        <li>les députés et députées de l’Assemblée nationale, </li>
                        <li>leurs collaborateurs et collaboratrices parlementaires, </li>
                        <li>les administrateurs et administratrices de l’Assemblée nationale.</li>
                    </ul>

                <p>Les habilitations sont accordées et sous le contrôle exclusif des services 
                de l’Assemblée nationale et des député·e·s.</p>

                <p><strong>Il est absolument nécessaire de préserver la confidentialité 
                des données auxquelles le service vous donne accès. 
                Toute violation de cette confidentialité vous expose à des sanctions pénales</strong>&nbsp;
                comme stipulées dans l’<a href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=4DD6F3DB5C5E37E9A1B6AB6733B4A8D5.tplgfr21s_3?idArticle=LEGIARTI000006417945&cidTexte=LEGITEXT000006070719&categorieLien=id&dateTexte="
                target="_blank">
                Article 226-13 du Code pénal</a>.</p>


                <h2>Vocabulaire</h2>

                    <p>« Nous » se réfère à l'éditeur de LexImpact POP</p>
                    <p>« Vous » se réfère à un·e usager habilité·e de LexImpact POP</p>

                <h2>Utilisation</h2>

                    <p>Si vous effectuez une simulation LexImpact POP, 
                    vous acceptez ces conditions d&apos;utilisation, 
                    comme indiqué dans l&apos;<a href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=4DD6F3DB5C5E37E9A1B6AB6733B4A8D5.tplgfr21s_3?idArticle=LEGIARTI000031367350&cidTexte=LEGITEXT000031366350&categorieLien=id&dateTexte="
                    target="_blank">
                    article L. 112-9 du Code des relations entre le public et l&apos;administration</a>.</p>

                    <p>L&apos;utilisation de LexImpact POP requiert une connexion internet 
                    et un navigateur récent, LexImpact POP ne fonctionne pas sur Internet Explorer. 
                    Vous pouvez installer en autonomie Chrome ou Firefox, 
                    sans droits d&apos;administration sur votre poste.</p>

                    <p>Nous nous réservons le droit de bloquer, sans information préalable 
                    ni compensation financière, les usages mettant en péril l&apos;utilisation 
                    du logiciel par d&apos;autres usagers.
                    Cela nous permet d&apos;anticiper d&apos;éventuelles attaques par déni de service.</p>



                <h2>Conditions d&apos;accès au service</h2>

                    <p>Actuellement, seulement les personnes dûment habilitées 
                    ci-dessous sont autorisées à accéder au service :</p>
                        <ul> 
                            <li>les députés et députées de l&apos;Assemblée nationale, </li>
                            <li>leurs collaborateurs et collaboratrices parlementaires, </li>
                            <li>les administrateurs et administratrices de l&apos;Assemblée nationale.</li>
                        </ul>

                    <p><i>Si vous faîtes partie des personnes telles que listées au paragraphe précédent 
                    et que vous n&apos;arrivez pas à vous connecter à LexImpact POP :</i></p>

                        <ol> 
                            <li>Veuillez vérifier que vous avez bien utilisé votre adresse mail 
                            professionnelle de l&apos;Assemblée nationale. 
                            Les noms de domaine autorisés sont présents par défaut dans l&apos;interface. </li>

                            <li>Veuillez vérifier que vous n&apos;avez pas fait une erreur de frappe, 
                            ou que vous n&apos;avez pas écrit votre adresse mail en entier. 
                            Seule la partie précédent le @nom-de-domaine vous est en réalité demandée.</li>

                            <li>Si vous utilisez votre adresse mail professionnelle pour la première fois, 
                            il se peut qu&apos;elle n&apos;est pas été activée ; 
                            veuillez directement contacter le Service des Systèmes d&apos;Information 
                            de l&apos;Assemblée nationale.</li>

                            <li>En dernier recours, n&apos;hésitez pas à nous envoyer une demande 
                            par le biais du formulaire de contact.</li>
                        </ol>


                    <p><i>Si vous ne faîtes pas partie des personnes habilitées, 
                    que vous participez professionnellement à l&apos;élaboration de la loi 
                    et que vous souhaitez accéder au service :</i></p>
                    
                    <p>L&apos;accord de l&apos;INSEE est indispensable pour étendre 
                    l&apos;accès de l&apos;outil LexImpact POP à tout nouvel organisme. 
                    Merci de bien vouloir nous transmettre une demande 
                    par le biais de notre formulaire de contact en indiquant 
                    dans l&apos;objet « demande d’accès LexImpact POP ».</p> 
                    
                    <p>L&apos;envoi de cette demande ne vaut en aucun cas garantie 
                    d&apos;une acceptation d&apos;habilitation.</p>

                    
                    



                <h2>Vos données</h2>

                    <p>Dans le cadre du partenariat avec l&apos;INSEE et 
                    afin de préserver le secret statistique, la liste des personnes 
                    ayant accès à l&apos;outil de simulation est stockée, tenue à jour 
                    en permanence et transmise régulièrement à l&apos;INSEE. Pour accéder au service, 
                    LexImpact POP vous demande votre adresse mail. Afin d&apos;éviter les usages abusifs, 
                    LexImpact POP conserve également des données sur le nombre de simulations 
                    effectuées par usager. Ces informations ne seront en aucun cas utilisées 
                    pour d&apos;autres fins ou revendues à un tiers.</p>

                    <p>Nous mettons également à disposition un formulaire de contact 
                    dans le cas où vous auriez une demande ou bien un retour d’expérience 
                    à nous partager. Dans ce cadre, nous nous engageons à ne conserver 
                    que les données anonymisées de nos échanges. Ces informations 
                    nous permettront d&apos;améliorer le service. Toutes les données directement 
                    identifiantes (nom, adresse, …) seront supprimées dans un délai d’un an.</p>

                    <p>Nous nous engageons à ne jamais exploiter les informations 
                    que vous nous transmettrez dans un but commercial ou publicitaire. 
                    De manière générale, LexImpact POP n&apos;accepte aucune forme de publicité.</p>

                    <p>Dans le but d&apos;évaluer la performance du service et son utilité, 
                    nous collectons également des données anonymes d&apos;audience, 
                    indépendamment des simulations effectuées.</p>

                <h2>Absence de garantie de service</h2>

                    <p>Nous mettons LexImpact POP à disposition sans garantie sur sa disponibilité, 
                    en « best effort ». Cela signifie que d&apos;éventuelles indisponibilités 
                    n&apos;ouvriront pas droit à compensation financière.</p>

                <h2>Absence de garantie de résultat</h2>

                    <p> Les résultats calculés par ce simulateur ont une valeur informative 
                    et ne présentent en aucun cas une garantie pour l&apos;usager.</p>

                    <p> La simulation d&apos;impact sur un foyer fiscal type dépend 
                    à la fois de l’interface LexImpact POP mais également 
                    des mises à jour régulières d&apos;OpenFisca. Dès qu&apos;une loi est modifiée, 
                    les équipes contributrices et bénévoles d’OpenFisca se chargent 
                    de faire évoluer le code informatique pour qu&apos;il fonctionne 
                    selon la nouvelle réglementation en vigueur. Nous ne pouvons garantir 
                    le délai de cette mise à jour.</p>

                    <p> LexImpact n&apos;est pas un simulateur d&apos;impôt sur le revenu individuel, 
                    c&apos;est un outil de chiffrage conçu pour évaluer les impacts d&apos;une réforme. 
                    Les résultats calculés par ce simulateur ont une valeur informative 
                    et ne représentent en aucun cas une décision d&apos;ouverture de droits. 
                    Pour une simulation de votre impôt sur le revenu personnel,&nbsp;
                    <a href="https://www3.impots.gouv.fr/simulateur/calcul_impot/2019/index.htm">
                    le service de la DGFIP</a> est disponible.</p>

                    <p> Par ailleurs, concernant les impacts agrégés sur le budget de l&apos;État 
                    et leurs effets sur des déciles de population, LexImpact POP ne propose 
                    pas une analyse des effets comportementaux. Cela signifie que LexImpact POP 
                    se tient stricto sensu aux effets théoriques de l&apos;application de la loi, 
                    sans prendre en compte les éventuels changements de comportements des contribuables 
                    (par exemple, le départ de français à l&apos;étranger ou le retour de non résidents fiscaux).</p>

                    <p>En raison des limites inhérentes à l&apos;échantillon employé 
                    et aux méthodes utilisées pour extraire de cette base de données 
                    les informations nécessaires au calcul des effets agrégés des modifications de la loi, 
                    Leximpact POP ne saurait garantir l&apos;exactitude des prévisions affichées dans l&apos;interface, 
                    qui sont seulement données à titre indicatif. 
                    Les résultats obtenus sont à considérer comme un ordre de grandeur.</p>

                 <h2>Évolutions</h2>

                    <p>Nous pouvons faire évoluer LexImpact POP sans information préalable.
                    Nous ajoutons régulièrement des variables, 
                    raffinons l&apos;interface et modifions des formulations sur la base de vos retours 
                    et des évolutions règlementaires.</p>

                    <p>Nous pouvons suspendre l&apos;accès à LexImpact POP sans information préalable, 
                    notamment pour des raisons de maintenance.
                    Nous mettons l&apos;application à jour plusieurs fois par mois. 
                    L&apos;indisponibilité ne dépasse généralement pas une dizaine de secondes.</p>

                    <p>Nous pouvons aussi amender ces conditions d&apos;utilisation sans préavis. 
                    Les utilisateurs sont tenus de consulter régulièrement les CGU à jour.</p>

          </section>
          

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
