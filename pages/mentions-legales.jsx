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
  },

  dividerMarge: {
    marginTop: "20px",
  },

  espaceVide: {
    height: "20px",
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
        <AppHeader />

        <section className={classes.sectionText}>

           <h1>Mentions légales</h1>

            <h2>Éditeur</h2>
                <hr />

                    <p>Incubateur de services numériques de la Direction interministérielle 
                    du numérique <br /> et du système d'information et de communication 
                    de l'État (DINSIC).</p>
                    <p>20, avenue de Ségur - 75007 Paris.</p>

                    <div className={classes.espaceVide}/>

                <h2>Site Internet</h2>
                <hr />

                    <p>Directeur de la publication : directeur interministériel du numérique <br />
                    et du système d'information et de communication de l'État.</p>

                    <p>Nadi Bou Hanna</p>

                    <div className={classes.espaceVide}/>

                <h2>Hébergeur</h2>
                <hr />

                    <p>Hébergé sur Scalingo SAS</p>

                    <p>15 avenue du Rhin <br />
                    67100 Strasbourg <br />
                    France 
                    </p>

                    <div className={classes.espaceVide}/>


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
