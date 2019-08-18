/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }],
    camelcase: 0
*/
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";

import SimpleCard from "./simple-card";
// import CarteEtat from "./carte-etat";

class ImpactComponent extends PureComponent {
  handleClick = () => {
    // const { onClick } = this.props;
    // onClick(e);
    // click sim popuplation
  }

  render() {
    // include should be false to remove the graph of recettes
    // const includepopulation = false;
    const {
      casTypes,
      changeRevenuHandler,
      changeOutreMerHandler,
      resBrut,
      // total_pop,
    } = this.props;
    return (
      <Grid container spacing={24}>
        {casTypes.map((casType, i) => {
          const itemKey = `react::simple-card-key-index::${i}`;
          return (
            <Grid item key={itemKey} xs={6} sm={12} md={6} lg={4} xl={3}>
              <SimpleCard
                index={i}
                descCasType={casType}
                onChange={changeRevenuHandler}
                impotsAvant={resBrut.avant[i]}
                impotsApres={resBrut.apres[i]}
                onOutreMerChange={changeOutreMerHandler}
              />
            </Grid>
          );
        })}
        {/* <Grid item key="stateBudget" xs={12} sm={12} md={12} lg={12} xl={12}>
          {includepopulation ? (
            <CarteEtat resultat={total_pop} onClick={this.handleClick} />
          ) : (
            <div />
          )}
        </Grid> */}
      </Grid>
    );
  }
}

ImpactComponent.propTypes = {
  total_pop: PropTypes.shape({
    deciles: PropTypes.arrayOf(PropTypes.shape()),
    total: PropTypes.shape(),
  }).isRequired,
  casTypes: PropTypes.arrayOf(
    PropTypes.shape({
      nombre_declarants: PropTypes.number,
      nombre_declarants_retraites: PropTypes.number,
      nombre_personnes_a_charge: PropTypes.number,
      outre_mer: PropTypes.number,
      revenu: PropTypes.number,
    }),
  ).isRequired,
  resBrut: PropTypes.shape({
    apres: PropTypes.shape(),
    avant: PropTypes.shape(),
    wprm: PropTypes.shape(),
  }).isRequired,
  // onClick: PropTypes.func.isRequired,
  changeOutreMerHandler: PropTypes.func.isRequired,
  changeRevenuHandler: PropTypes.func.isRequired,
};

export default ImpactComponent;
