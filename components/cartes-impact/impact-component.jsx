import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import CarteEtat from "../carte-etat";
import InformationPanel from "../information-panel";
import GagnantsPerdantsCard from "./gagnants-perdants";
import styles from "./impact-component.module.scss";
import SimpleCard from "./simple-card";

class ImpactComponent extends PureComponent {
  render() {
    const { casTypes, isInformationPanelVisible, isUserLogged } = this.props;
    return (
      <div className={styles.container}>
        <Grid container spacing={24}>
          {isInformationPanelVisible && (
            <Grid item xs={12}>
              <InformationPanel />
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
        <Grid container spacing={24}>
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
  isInformationPanelVisible: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  totalPop: PropTypes.shape({
    deciles: PropTypes.arrayOf(PropTypes.shape()),
    frontieres_deciles: PropTypes.arrayOf(PropTypes.number),
    total: PropTypes.shape(),
  }).isRequired,
};

export default ImpactComponent;
