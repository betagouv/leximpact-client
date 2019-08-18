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
    camelcase: 0,
*/
import PropTypes from "prop-types";
import { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Divider, Paper } from "@material-ui/core";

import Articles from "../articles";

import Impact from "./impact";
import ArticleHeader from "./article-header";

const styles = () => ({
  paper: {
    padding: 0,
    margin: "1em",
  },
});

class ReformeurComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total_pop: {
        total: {
          avant: 78000000000,
          apres: 78000000001,
        },
        deciles: [
          {
            apres: 0,
            avant: 0,
            poids: 64307.76825466227,
          },
          {
            apres: 0,
            avant: 0,
            poids: 64183.43260141487,
          },
          {
            apres: 0,
            avant: 0,
            poids: 64069.076685097796,
          },
          {
            apres: 0,
            avant: 0,
            poids: 64043.933126049116,
          },
          {
            apres: 13844921.403083913,
            avant: 5361568.370960628,
            poids: 64488.07944238707,
          },
          {
            apres: 84836413.06561384,
            avant: 56347916.71439952,
            poids: 63989.23676160828,
          },
          {
            apres: 165934580.50712466,
            avant: 135607522.52963728,
            poids: 64047.4107078861,
          },
          {
            apres: 278744596.67872584,
            avant: 236768570.59332725,
            poids: 64349.98292025551,
          },
          {
            apres: 505687176.9815335,
            avant: 458387176.6722295,
            poids: 63775.046068296535,
          },
          {
            apres: 2794871767.6868806,
            avant: 2740522398.065867,
            poids: 63647.22070607485,
          },
        ],
      },
    };
  }

  componentDidMount() {
    const { fetchMetadataCasTypesHandler } = this.props;
    fetchMetadataCasTypesHandler();
  }

  handleAddTranche = () => {
    // const { reforme } = this.state;
    // const refbase = reforme;
    // const newnbt = refbase.impot_revenu.bareme.seuils.length + 1;
    // const lastseuil = refbase.impot_revenu.bareme.seuils[newnbt - 2];
    // refbase.impot_revenu.bareme.seuils = reforme.impot_revenu.bareme.seuils.concat(
    //   lastseuil + 1,
    // );
    // const lasttaux = refbase.impot_revenu.bareme.taux[newnbt - 2];
    // refbase.impot_revenu.bareme.taux = reforme.impot_revenu.bareme.taux.concat(
    //   lasttaux,
    // );
    // this.setState({ reforme: refbase });
  }

  handleRemoveTranche = () => {
    // const { casTypes } = this.props;
    // const { reforme } = this.state;
    // const refbase = reforme;
    // const newnbt = refbase.impot_revenu.bareme.seuils.length - 1;
    // if (newnbt <= 0) return;
    // refbase.impot_revenu.bareme.seuils = reforme.impot_revenu.bareme.seuils.slice(
    //   0,
    //   newnbt,
    // );
    // refbase.impot_revenu.bareme.taux = reforme.impot_revenu.bareme.taux.slice(
    //   0,
    //   newnbt,
    // );
    // this.setState({ reforme: refbase });
    // const bodyreq = JSON.stringify({
    //   reforme: refbase,
    //   description_cas_types: casTypes,
    // });
    // this.updateCompare(bodyreq);
  }

  handleArticleChange = (value, name) => {
    const {
      updateReformeByNameHandler,
      updateCalculateCompareHandler,
    } = this.props;
    updateReformeByNameHandler(name, value);
    updateCalculateCompareHandler();
  }

  handleCardRevenuAnnuelChange = (casTypeIndex, inputEvent) => {
    const {
      updateCalculateCompareHandler,
      updateCasTypeRevenusHandler,
    } = this.props;
    const casTypeRevenuMensuel = Number(inputEvent.target.value);
    updateCasTypeRevenusHandler(casTypeIndex, casTypeRevenuMensuel);
    updateCalculateCompareHandler();
  }

  handleOutreMerChange = (casTypeIndex, casTypeOutreMerIndex) => {
    const {
      updateCasTypeOutreMerHandler,
      updateCalculateCompareHandler,
    } = this.props;
    updateCasTypeOutreMerHandler(casTypeIndex, casTypeOutreMerIndex);
    updateCalculateCompareHandler();
  }

  render() {
    const { classes } = this.props;
    const { total_pop } = this.state;
    return (
      <div className="main-index">
        <div className="clearfix">
          <div className="moitie-gauche">
            <Paper className={classes.paper}>
              <ArticleHeader />
              <Divider />
              <Articles
                onChange={this.handleArticleChange}
                addTranche={this.handleAddTranche}
                removeTranche={this.handleRemoveTranche}
              />
            </Paper>
          </div>
          <div className="moitie-droite">
            <Impact
              changeRevenuHandler={this.handleCardRevenuAnnuelChange}
              changeOutreMerHandler={this.handleOutreMerChange}
              total_pop={total_pop}
            />
          </div>
        </div>
      </div>
    );
  }
}

ReformeurComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  updateCalculateCompareHandler: PropTypes.func.isRequired,
  updateCasTypeRevenusHandler: PropTypes.func.isRequired,
  updateCasTypeOutreMerHandler: PropTypes.func.isRequired,
  fetchMetadataCasTypesHandler: PropTypes.func.isRequired,
  updateReformeByNameHandler: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(ReformeurComponent);
