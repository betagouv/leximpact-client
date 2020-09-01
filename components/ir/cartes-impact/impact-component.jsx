import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { InformationPanel } from "../../common";
import CarteEtat from "./carte-etat";
import { GagnantsPerdantsCard } from "./gagnants-perdants";
import styles from "./impact-component.module.scss";
import SimpleCard from "./simple-card";

class ImpactComponent extends PureComponent {
  render() {
    const { casTypes, isUserLogged } = this.props;
    return (
      <div className={styles.container}>
        <Grid container spacing={3}>
          {isUserLogged && (
            <Grid item xs={12}>
              <InformationPanel name="ir" title="Epidémie de Covid-19">
                L&apos;épidémie actuelle affectant l&apos;économie dans une mesure qui
                est à ce jour impossible à prévoir, les résultats que nous affichons sont
                très probablement surestimés.
                <br />
                Les estimations de Leximpact des effets sur le budget de l&apos;État sont
                calculées à partir de données recalibrées s&apos;appuyant sur des enquêtes
                d&apos;années passées. Dès que nous aurons plus d&apos;informations,
                nous recalibrerons le modèle en conséquence.
              </InformationPanel>
            </Grid>
          )}
          {isUserLogged && (
            <Grid item lg={8} md={12} sm={6} xl={6} xs={12}>
              <CarteEtat />
            </Grid>
          )}
          {isUserLogged && (
            <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
              <GagnantsPerdantsCard />
            </Grid>
          )}
        </Grid>
        <Grid container spacing={3}>
          {casTypes.map((casType, index) => {
            const itemKey = `react::simple-card-key-index::${index}`;
            return (
              <Grid key={itemKey} item lg={4} md={6} sm={6} xl={3} xs={12}>
                <SimpleCard index={index} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    );
  }
}

ImpactComponent.propTypes = {
  casTypes: PropTypes.arrayOf(
    PropTypes.shape({
      nombre_declarants: PropTypes.number,
      nombre_declarants_retraites: PropTypes.number,
      nombre_personnes_a_charge: PropTypes.number,
      outre_mer: PropTypes.number,
      revenu: PropTypes.number,
    }),
  ).isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

export default ImpactComponent;
