import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import CarteEtat from "../carte-etat";
import ConsulterExpertCard from "../consulter-expert";
import GagnantsPerdantsCard from "./gagnants-perdants";
import SimpleCard from "./simple-card";

class ImpactComponent extends PureComponent {
  render() {
    const { casTypes, consulterExpert, isUserLogged } = this.props;
    const displayCarteInfo = consulterExpert === "displayed";
    return (
      <Grid container spacing={24}>
        {displayCarteInfo && (
          <Grid item lg={12} md={12} sm={12} xl={12} xs={12}>
            {/* affichage de la carte etat */}
            <ConsulterExpertCard />
          </Grid>
        )}
        {isUserLogged && (
          <Grid item lg={8} md={12} sm={6} xl={6} xs={12}>
            {/* affichage de la carte etat */}
            <CarteEtat />
          </Grid>
        )}
        {isUserLogged && (
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            {/* affichage de la carte etat */}
            <GagnantsPerdantsCard />
          </Grid>
        )}
        {casTypes.map((casType, index) => {
          const itemKey = `react::simple-card-key-index::${index}`;
          return (
            <Grid key={itemKey} item lg={4} md={6} sm={6} xl={3} xs={12}>
              <SimpleCard index={index} />
            </Grid>
          );
        })}
        {/* <Grid item key="stateBudget" xs={12} sm={12} md={12} lg={12} xl={12}>
          {includepopulation ? (
            <CarteEtat resultat={totalPop} onClick={this.handleClick} />
          ) : (
            <div />
          )}
        </Grid> */}
      </Grid>
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
  consulterExpert: PropTypes.string.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  totalPop: PropTypes.shape({
    deciles: PropTypes.arrayOf(PropTypes.shape()),
    frontieres_deciles: PropTypes.arrayOf(PropTypes.number),
    total: PropTypes.shape(),
  }).isRequired,
};

export default ImpactComponent;
