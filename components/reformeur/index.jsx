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
import { Component } from "react";
import fetch from "isomorphic-fetch";
import PropTypes from "prop-types";
import { cloneDeep, set } from "lodash";
import { withStyles } from "@material-ui/core/styles";
import { Divider, Paper, Typography } from "@material-ui/core";

import Impact from "./impact";
import Article from "./article";
import ArticleHeader from "./article-header";
import ReformeDefaultData from "./reforme-default-data";

const styles = () => ({
  paper: {
    padding: 0,
    margin: "1em",
  },
});

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

// renvoie arrayToChange avec la valeur située à l'index "indexToChange" changé en "newValue"
const changeValueArray = (arrayToChange, indexToChange, newValue) => {
  const list = arrayToChange.map((item, numeroitem) => {
    if (numeroitem === indexToChange) {
      return newValue;
    }
    return item;
  });
  return list;
};

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};

class Reformeur extends Component {
  constructor(props) {
    super(props);
    const reforme = cloneDeep(ReformeDefaultData);
    const reformebase = cloneDeep(ReformeDefaultData);
    this.state = {
      loading: false,
      reforme,
      reformebase,
      res_brut: {
        apres: {
          0: 0,
          1: -600,
          2: 0,
          3: 0,
          4: -492,
          5: 0,
        },
        avant: {
          0: 0,
          1: -600,
          2: 0,
          3: 0,
          4: -492,
          5: 0,
        },
        wprm: {
          0: 1,
          1: 1,
          2: 1,
          3: 1,
          4: 1,
          5: 1,
        },
      },
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
      // indextab: 0,
      cas_types: [
        {
          outre_mer: 0,
          nombre_declarants: 1,
          nombre_declarants_retraites: 0,
          nombre_personnes_a_charge: 0,
          revenu: 15600,
        },
        {
          outre_mer: 0,
          nombre_declarants: 1,
          nombre_declarants_retraites: 0,
          nombre_personnes_a_charge: 1,
          revenu: 31200,
        },
        {
          outre_mer: 0,
          nombre_declarants: 2,
          nombre_declarants_retraites: 0,
          nombre_personnes_a_charge: 0,
          revenu: 38400,
        },
        {
          outre_mer: 0,
          nombre_declarants: 2,
          nombre_declarants_retraites: 2,
          nombre_personnes_a_charge: 0,
          revenu: 15600,
        },
        {
          outre_mer: 0,
          nombre_declarants: 2,
          nombre_declarants_retraites: 0,
          nombre_personnes_a_charge: 2,
          revenu: 55200,
        },
        {
          outre_mer: 1,
          nombre_declarants: 2,
          nombre_declarants_retraites: 0,
          nombre_personnes_a_charge: 2,
          revenu: 55200,
        },
      ],
      // cas_types_defaut: true,
    };
  }

  componentDidMount() {
    const endpoint = this.endpoint();

    fetch(`${endpoint}/metadata/description_cas_types`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then(response => response.json())
      .then((json) => {
        this.setState({ cas_types: json });
      })
      .catch(() => {
        // eslint-disable-next-line no-console
        console.log("Can’t access  response. Blocked by browser?");
      });
    // json.map(country => country.name))
    // .then(countryNames => this.setState({countryNames, loading: false}))
    // .then(json => this.setState({revenus_cas_types: json , loading : false} ))
  }

  UpdateBareme = (indexToChange, value) => {
    const { reforme } = this.state;
    const ref = reforme;
    const list = changeValueArray(
      ref.impot_revenu.bareme.seuils,
      indexToChange,
      value,
    );
    ref.impot_revenu.bareme.seuils = list;
    this.setState({ reforme: ref });
  }

  UpdateTaux = (indexToChange, value) => {
    const { reforme } = this.state;
    const ref = reforme;
    const list = changeValueArray(
      ref.impot_revenu.bareme.taux,
      indexToChange,
      value * 0.01,
    );
    ref.impot_revenu.bareme.taux = list;
    this.setState({ reforme: ref });
  }

  UpdateDecote = (dectype, value) => {
    // Pour une méthode clean mais dangereuse qui pourrait être implémentée ici, cf UpdatePlafond
    const { reforme } = this.state;
    const ref = reforme;
    if (dectype === "") {
      ref.impot_revenu.decote.seuil_couple = parseInt(value, 10);
    }
    if (dectype === "seuil_celib") {
      ref.impot_revenu.decote.seuil_celib = parseInt(value, 10);
    }
    if (dectype === "taux") {
      ref.impot_revenu.decote.taux = Math.round(parseFloat(value) * 10) / 1000;
    }
    this.setState({ reforme: ref });
  }

  UpdatePlafond = (dectype, value) => {
    const { reforme } = this.state;
    const ref = reforme;
    const regex = RegExp("^[0-9a-zA-Z_.]+$");
    const regextaux = RegExp("taux"); // Tous les noms de variables qui contiennent taux
    // sont divisés par 100. Je vois vraiment pas ce qui pourrait poser probleme avec ça.
    if (regex.test(dectype)) {
      const pathref = `impot_revenu.plafond_qf${dectype}`;
      set(ref, pathref, value * (regextaux.test(dectype) ? 0.01 : 1));
      this.setState({ reforme: ref });
    }
  }

  addTranche = () => {
    const { reforme } = this.state;
    const refbase = reforme;
    const newnbt = refbase.impot_revenu.bareme.seuils.length + 1;
    const lastseuil = refbase.impot_revenu.bareme.seuils[newnbt - 2];
    refbase.impot_revenu.bareme.seuils = reforme.impot_revenu.bareme.seuils.concat(
      lastseuil + 1,
    );
    const lasttaux = refbase.impot_revenu.bareme.taux[newnbt - 2];
    refbase.impot_revenu.bareme.taux = reforme.impot_revenu.bareme.taux.concat(
      lasttaux,
    );
    this.setState({ reforme: refbase });
  }

  removeTranche = () => {
    const { cas_types, reforme } = this.state;
    const refbase = reforme;
    const newnbt = refbase.impot_revenu.bareme.seuils.length - 1;
    if (newnbt > 0) {
      refbase.impot_revenu.bareme.seuils = reforme.impot_revenu.bareme.seuils.slice(
        0,
        newnbt,
      );
      refbase.impot_revenu.bareme.taux = reforme.impot_revenu.bareme.taux.slice(
        0,
        newnbt,
      );
      this.setState({ reforme: refbase });
      const bodyreq = this.cas_types_defaut
        ? JSON.stringify({
          deciles: false,
          reforme: refbase,
        })
        : JSON.stringify({
          reforme: refbase,
          description_cas_types: cas_types,
        });
      this.updateCompare(bodyreq);
    }
  }

  endpoint = () => process.env.API_URL

  updateCompare = (bodyreq) => {
    const endpoint = this.endpoint();
    this.setState({ loading: true });
    fetch(`${endpoint}/calculate/compare`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyreq,
    })
      .then(response => response.json())
      .then((json) => {
        this.setState({ res_brut: json.res_brut, loading: false });
      });
  }

  handleChange = (value, name) => {
    const { cas_types, reforme } = this.state;
    const newvalue = value === "" ? 0 : value;
    if (name.substring(0, 5) === "seuil") {
      const numb = parseInt(name.substring(5), 10);
      this.UpdateBareme(numb, newvalue);
    }
    if (name.substring(0, 4) === "taux") {
      const numb = parseInt(name.substring(4), 10);
      this.UpdateTaux(numb, newvalue);
    }
    if (name.substring(0, 6) === "decote") {
      const whichdecote = name.substring(7);
      this.UpdateDecote(whichdecote, newvalue);
    }
    if (name.substring(0, 10) === "plafond_qf") {
      const whichplaf = name.substring(10);
      this.UpdatePlafond(whichplaf, newvalue);
    }
    const bodyreq = this.cas_types_defaut
      ? JSON.stringify({
        deciles: false,
        reforme,
      })
      : JSON.stringify({
        reforme,
        description_cas_types: cas_types,
      });
    this.updateCompare(bodyreq);
  }

  simPop = () => {
    const endpoint = this.endpoint();
    const { reforme } = this.state;
    fetch(`${endpoint}/calculate/compare`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        deciles: true,
        reforme,
      }),
    })
      .then(response => response.json())
      .then((json) => {
        this.setState({ total_pop: json });
      });
  }

  handleRevenuChange = (i, value) => {
    const { cas_types, reforme } = this.state;
    const arrayrev = cas_types;
    arrayrev[i].revenu = value * 12;
    this.setState({ cas_types: arrayrev });
    // this.setState({ cas_types: arrayrev, cas_types_defaut: false });
    const bodyreq = JSON.stringify({
      reforme,
      description_cas_types: arrayrev,
    });
    this.updateCompare(bodyreq);
  }

  handleOutreMerChange = (i, value) => {
    const { cas_types, reforme } = this.state;
    const arrayrev = cas_types;
    arrayrev[i].outre_mer = value;
    this.setState({ cas_types: arrayrev });
    // this.setState({ cas_types: arrayrev, cas_types_defaut: false });
    const bodyreq = JSON.stringify({
      reforme,
      description_cas_types: arrayrev,
    });
    this.updateCompare(bodyreq);
  }

  render() {
    const { classes } = this.props;
    const {
      cas_types,
      loading,
      reforme,
      reformebase,
      res_brut,
      total_pop,
    } = this.state;
    return (
      <div className="main-index">
        <div className="clearfix">
          <div className="moitie-gauche">
            <Paper className={classes.paper}>
              <ArticleHeader />
              <Divider />
              <Article
                reforme={reforme}
                reformebase={reformebase}
                onChange={this.handleChange}
                addTranche={this.addTranche}
                removeTranche={this.removeTranche}
              />
            </Paper>
          </div>
          <div className="moitie-droite">
            <Impact
              loading={loading}
              onRevenuChange={this.handleRevenuChange}
              onOutreMerChange={this.handleOutreMerChange}
              res_brut={res_brut}
              total_pop={total_pop}
              onClick={this.simPop}
              cas_types={cas_types}
            />
          </div>
        </div>
      </div>
    );
  }
}

Reformeur.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles, { withTheme: true })(Reformeur);
