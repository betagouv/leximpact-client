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
import CarteEtat from "./carte-etat";

class Impact extends PureComponent {
  handleClick = (e) => {
    const { onClick } = this.props;
    onClick(e);
  }

  handleChangeRevenu = (i, e) => {
    const { onRevenuChange } = this.props;
    onRevenuChange(i, e.target.value);
  }

  handleChangeOutreMer = (i, v) => {
    const { onOutreMerChange } = this.props;
    onOutreMerChange(i, v);
  }

  render() {
    // include should be false to remove the graph of recettes
    const includepopulation = false;
    const {
      cas_types, loading, res_brut, total_pop,
    } = this.props;
    return (
      <Grid container spacing={24}>
        {cas_types.map((ct, i) => {
          const itemKey = `grid${i}`;
          return (
            <Grid item key={itemKey} xs={6} sm={12} md={6} lg={4} xl={3}>
              <SimpleCard
                loading={loading}
                onChange={this.handleChangeRevenu}
                onOutreMerChange={this.handleChangeOutreMer}
                index={i}
                desc_cas_type={ct}
                impots_avant={res_brut.avant[i]}
                impots_apres={res_brut.apres[i]}
              />
            </Grid>
          );
        })}
        <Grid item key="stateBudget" xs={12} sm={12} md={12} lg={12} xl={12}>
          {includepopulation ? (
            <CarteEtat resultat={total_pop} onClick={this.handleClick} />
          ) : (
            <div />
          )}
        </Grid>
      </Grid>
    );
  }
}

Impact.propTypes = {
  loading: PropTypes.bool.isRequired,
  total_pop: PropTypes.shape({
    total: PropTypes.shape(),
    deciles: PropTypes.arrayOf(PropTypes.shape()),
  }).isRequired,
  cas_types: PropTypes.arrayOf(
    PropTypes.shape({
      outre_mer: PropTypes.number,
      nombre_declarants: PropTypes.number,
      nombre_declarants_retraites: PropTypes.number,
      nombre_personnes_a_charge: PropTypes.number,
      revenu: PropTypes.number,
    }),
  ).isRequired,
  res_brut: PropTypes.shape().isRequired,
  onClick: PropTypes.func.isRequired,
  onOutreMerChange: PropTypes.func.isRequired,
  onRevenuChange: PropTypes.func.isRequired,
};

export default Impact;