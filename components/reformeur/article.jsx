/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-fragments: [2, "element"],
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
    }]
*/
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  ExpansionPanel as MuiExpansionPanel,
  ExpansionPanelSummary as MuiExpansionPanelSummary,
  ExpansionPanelDetails as MuiExpansionPanelDetails,
  Fab,
  Typography,
} from "@material-ui/core";
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import { get } from "lodash";

import fillArrayWith from "../utils/array/fillArrayWith";

import Alinea0 from "./article/alinea-0";
import Alinea2 from "./article/alinea-2";
import Alinea3 from "./article/alinea-3";
import Alinea4a from "./article/alinea-4a";
import InputField from "./article/input-field";
import OutputField from "./article/output-field";

// prend un nombre, et retourne l'arrondi
// avec le moins de chiffres qui a moins de limdiff
// de différence avec le nombre initial.
const makeNumberGoodLooking = (initialNumber) => {
  let currfact = 1;
  let nbchiffres = 0;
  const limdiff = 0.00001;
  while (true) {
    const numnow = Math.round(initialNumber * currfact) / currfact;
    if (Math.abs(numnow - initialNumber) < limdiff || nbchiffres >= 5) {
      return initialNumber.toFixed(nbchiffres);
    }
    currfact *= 10;
    nbchiffres += 1;
  }
};

const style = {
  Typography: { padding: "5px" },
  TypographyNouvelleTranche: { padding: "5px", color: "#00A3FF" },
  Typographybouton: { margin: "10px" },
  Button: {
    padding: "3px",
    margin: "10px",
  },
  VarCodeexistant: {
    fontWeight: "bold",
    color: "#A6A00C",
    textDecoration: "underline",
    lineHeight: "10px",
    padding: "8px",
  },
  VarCodeNew: {
    fontWeight: "bold",
    color: "#00A3FF",
    lineHeight: "10px",
    padding: "8px",
  },
  InputSeuil: {
    fontSize: "20px",
    width: "70px",
    marginRight: "2px",
    marginLeft: "2px",
  },
  InputTaux: {
    fontSize: "20px",
    width: "30px",
    marginRight: "3px",
    marginLeft: "0px",
  },

  Div: {
    marginTop: "1em",
    marginLeft: "1.5em",
    marginRight: "1.5em",
    marginBottom: "1.5em",
  },
};

const ExpansionPanel = withStyles({
  root: {
    border: "0px solid rgba(0,0,0,.125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  },
  expanded: {
    margin: "auto",
    padding: "1px",
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0,0,0,0)",
    borderBottom: "0px solid rgba(0,0,0,.125)",
    marginBottom: -1,
    minHeight: 32,
    "&$expanded": {
      minHeight: 20,
    },
  },
  content: {
    "&$expanded": {
      margin: "3px 0",
      padding: "1px",
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = "ExpansionPanelSummary";

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class Article extends React.Component {
  constructor(props) {
    super(props);
    const { reforme, reformebase } = props;
    // const nbt = props.reformebase.impot_revenu.bareme.seuils.length;
    this.state = {
      expanded: "null", // état de l'extansion panel null = contenu
      reforme,
      basecode: reformebase, // Jamais modifié, utilisé pour montrer l'existant,
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  }

  handleS1Change = (value, name) => {
    const { onChange } = this.props;
    onChange(value, name);
  }

  handleAddTranche = (e) => {
    const { addTranche } = this.props;
    addTranche(e);
  }

  handleRemoveTranche = (e) => {
    const { removeTranche } = this.props;
    removeTranche(e);
  }

  baseOutputInput = (name) => {
    const { basecode, reforme } = this.state;
    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const multip = tx ? 100 : 1;

    let baseval = get(basecode.impot_revenu, name);
    baseval *= multip;
    baseval = makeNumberGoodLooking(baseval);

    let newval = get(reforme.impot_revenu, name);
    newval *= multip;
    newval = makeNumberGoodLooking(newval);

    return (
      <React.Fragment>
        <OutputField value={baseval} style={style.VarCodeexistant} />
        <InputField
          value={newval}
          onChange={this.handleS1Change}
          name={name}
          style={tx ? style.InputTaux : style.InputSeuil}
        />
      </React.Fragment>
    );
  }

  formulaOutputInputFacteur(name, fact) {
    const { basecode, reforme } = this.state;
    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const multip = tx ? 100 : 1;

    let baseval = get(basecode.impot_revenu, name);
    baseval = baseval * fact * multip;
    baseval = makeNumberGoodLooking(baseval);

    let newval = get(reforme.impot_revenu, name);
    newval = newval * fact * multip;
    newval = makeNumberGoodLooking(newval);

    return (
      <React.Fragment>
        <OutputField value={baseval} style={style.VarCodeexistant} />
        <OutputField value={newval} style={style.VarCodeNew} />
      </React.Fragment>
    );
  }

  baseOutput = (name) => {
    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const baseval = makeNumberGoodLooking(
      get(this.state.basecode.impot_revenu, name) * (tx ? 100 : 1),
    ); // eval("this.state.basecode.impot_revenu."+name) * (tx?100:1)
    return <OutputField value={baseval} style={style.VarCodeexistant} />;
  }

  formulaOutputInput = (name) => {
    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const baseval = makeNumberGoodLooking(
      get(this.state.basecode.impot_revenu, name) * (tx ? 100 : 1),
    ); // eval("this.state.basecode.impot_revenu."+name) * (tx?100:1)
    const newval = makeNumberGoodLooking(
      get(this.state.reforme.impot_revenu, name) * (tx ? 100 : 1),
    ); // eval("this.state.reforme.impot_revenu."+name) * (tx?100:1)
    return (
      <React.Fragment>
        <OutputField value={baseval} style={style.VarCodeexistant} />
        <OutputField value={newval} style={style.VarCodeNew} />
      </React.Fragment>
    );
  }

  formulaOutputInputCombiLin = (name1, fact1, name2, fact2) => {
    const baseval = makeNumberGoodLooking(
      get(this.state.basecode.impot_revenu, name1) * fact1
        + get(this.state.basecode.impot_revenu, name2) * fact2,
    );
    const newval = makeNumberGoodLooking(
      get(this.state.reforme.impot_revenu, name1) * fact1
        + get(this.state.reforme.impot_revenu, name2) * fact2,
    );

    return (
      <React.Fragment>
        <OutputField value={baseval} style={style.VarCodeexistant} />
        <OutputField value={newval} style={style.VarCodeNew} />
      </React.Fragment>
    );
  }

  // alinea4a() {
  //   const { basecode, reforme } = this.state;
  //   const scelib = reforme.impot_revenu.decote.seuil_celib;
  //   const scouple = reforme.impot_revenu.decote.seuil_couple;
  //   const basescelib = basecode.impot_revenu.decote.seuil_celib;
  //   const basescouple = basecode.impot_revenu.decote.seuil_couple;
  //
  //   return (
  //   );
  // }

  alinea4bext() {
    return (
      <Typography variant="body2" color="inherit">
        ...au sixième alinéa du présent b pour les contribuables dont le montant
        des revenus du foyer fiscal, au sens du 1° du IV de l&apos;article 1417,
        est inférieur à
        {" "}
        {this.baseOutputInput(
          "plafond_qf.reduction_ss_condition_revenus.seuil2",
        )}
        {" "}
        €, pour la première part de quotient familial des personnes
        célibataires, veuves ou divorcées, et à
        {this.formulaOutputInputFacteur(
          "plafond_qf.reduction_ss_condition_revenus.seuil2",
          2,
        )}
        €, pour les deux premières parts de quotient familial des personnes
        soumises à une imposition commune. Ces seuils sont majorés de
        {" "}
        {this.baseOutputInput(
          "plafond_qf.reduction_ss_condition_revenus.seuil_maj_enf",
        )}
        € pour chacune des demi-parts suivantes et de la moitié de ce montant
        pour chacun des quarts de part suivants.
        <br />
        Pour l&apos;application des seuils mentionnés au premier alinéa du
        présent b, le montant des revenus du foyer fiscal est majoré :
        <br />
        1° Du montant des plus-values, déterminées le cas échéant avant
        application des abattements pour durée de détention mentionnés au 1 de
        l&apos;article 150-0 D ou à l&apos;article 150-0 D ter et pour
        lesquelles il est mis fin au report d&apos;imposition dans les
        conditions prévues à l&apos;article 150-0 D bis, dans leur rédaction en
        vigueur jusqu&apos;au 31 décembre 2013 ;
        <br />
        2° Du montant des plus-values, déterminées le cas échéant avant
        application des abattements pour durée de détention mentionnés aux 1 ter
        ou 1 quater de l&apos;article 150-0 D ou à l&apos;article 150-0 D ter,
        et des créances mentionnées aux I et II de l&apos;article 167 bis, pour
        la seule détermination du premier terme de la différence mentionnée au
        deuxième alinéa du 1 du II bis du même article 167 bis ;
        <br />
        3° Du montant des plus-values mentionnées au I de l&apos;article 150-0 B
        ter, déterminées le cas échéant avant application de l&apos;abattement
        pour durée de détention mentionné aux 1 ter ou 1 quater de
        l&apos;article 150-0 D, pour la seule détermination du premier terme de
        la différence mentionné au deuxième alinéa du 2° du a du 2 ter de
        l&apos;article 200 A pour l&apos;application de la seconde phrase du 3°
        du même a.
        <br />
        Le taux de la réduction prévue au premier alinéa du présent b est de 20
        %. Toutefois, pour les contribuables dont les revenus du foyer fiscal,
        au sens du 1° du IV de l&apos;article 1417, excèdent
        {" "}
        {this.baseOutputInput(
          "plafond_qf.reduction_ss_condition_revenus.seuil1",
        )}
        {" "}
        €, pour la première part de quotient familial des personnes
        célibataires, veuves ou divorcées, ou
        {" "}
        {this.formulaOutputInputFacteur(
          "plafond_qf.reduction_ss_condition_revenus.seuil1",
          2,
        )}
        €, pour les deux premières parts de quotient familial des personnes
        soumises à une imposition commune, ces seuils étant majorés le cas
        échéant dans les conditions prévues au même premier alinéa, le taux de
        la réduction d&apos;impôt est égal à
        {this.baseOutputInput("plafond_qf.reduction_ss_condition_revenus.taux")}
        % multiplié par le rapport entre :
        <br />
– au numérateur, la différence entre
        {" "}
        {this.formulaOutputInput(
          "plafond_qf.reduction_ss_condition_revenus.seuil2",
        )}
        €, pour les personnes célibataires, veuves ou divorcées, ou
        {this.formulaOutputInputFacteur(
          "plafond_qf.reduction_ss_condition_revenus.seuil2",
          2,
        )}
        €, pour les personnes soumises à une imposition commune, ces seuils
        étant majorés le cas échéant dans les conditions prévues audit premier
        alinéa, et le montant des revenus mentionnés au troisième alinéa du
        présent b, et ;
        <br />
– au dénominateur,
        {" "}
        {this.formulaOutputInputCombiLin(
          "plafond_qf.reduction_ss_condition_revenus.seuil2",
          1,
          "plafond_qf.reduction_ss_condition_revenus.seuil1",
          -1,
        )}
        €, pour les personnes célibataires, veuves ou divorcées, ou
        {" "}
        {this.formulaOutputInputCombiLin(
          "plafond_qf.reduction_ss_condition_revenus.seuil2",
          2,
          "plafond_qf.reduction_ss_condition_revenus.seuil1",
          -2,
        )}
        €, pour les personnes soumises à une imposition commune.
        <br />
        Les montants de revenus mentionnés au présent b sont révisés chaque
        année dans la même proportion que la limite supérieure de la première
        tranche du barème de l&apos;impôt sur le revenu. Les montants obtenus
        sont arrondis, s&apos;il y a lieu, à l&apos;euro supérieur.
      </Typography>
    );
  }

  gimmeIRPartsOfArticle = (i) => {
    const s = this.state.reforme.impot_revenu.bareme.seuils;
    const t = this.state.reforme.impot_revenu.bareme.taux;
    const bases = this.state.basecode.impot_revenu.bareme.seuils;
    const baset = this.state.basecode.impot_revenu.bareme.taux;
    const nbt = s.length;
    const styleAUtiliser = i > 4 ? style.TypographyNouvelleTranche : style.Typography;
    // Part 1
    if (i === 0) {
      return (
        <Typography
          key={i}
          variant="body2"
          color="inherit"
          style={styleAUtiliser}>
          {
            "1. L'impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède"
          }
          <OutputField value={bases[i]} style={style.VarCodeexistant} />
          <InputField
            value={s[i]}
            onChange={this.handleS1Change}
            name={`seuil${i}`}
            style={style.InputSeuil}
          />
          {"€ le taux de :"}
        </Typography>
      );
    }
    // Last part
    if (i === nbt) {
      return (
        <Typography
          key={i}
          variant="body2"
          color="inherit"
          style={styleAUtiliser}>
          {"– "}

          <OutputField
            value={makeNumberGoodLooking(baset[i - 1] * 100)}
            style={style.VarCodeexistant}
          />
          <InputField
            value={t[i - 1] * 100}
            onChange={this.handleS1Change}
            name={`taux${i - 1}`}
            style={style.InputTaux}
          />
          {"% pour la fraction supérieure à "}
          <OutputField value={s[i - 1]} />
          {"€."}
        </Typography>
      );
    }
    // Other parts :
    return (
      <Typography
        key={i}
        variant="body2"
        color="inherit"
        style={styleAUtiliser}>
        –
        {" "}
        <OutputField
          value={makeNumberGoodLooking(baset[i - 1] * 100)}
          style={style.VarCodeexistant}
        />
        <InputField
          value={makeNumberGoodLooking(t[i - 1] * 100)}
          onChange={this.handleS1Change}
          name={`taux${i - 1}`}
          style={style.InputTaux}
        />
        % pour la fraction supérieure à
        {" "}
        <OutputField value={s[i - 1]} />
        € et inférieure ou égale à
        <OutputField value={bases[i]} style={style.VarCodeexistant} />
        <InputField
          value={s[i]}
          onChange={this.handleS1Change}
          name={`seuil${i}`}
          style={style.InputSeuil}
        />
        {" "}
        € ;
      </Typography>
    );
  }

  render() {
    const { expanded, reforme, basecode } = this.state;
    const styleExpansionpanel = {
      padding: "1px",
    };

    const count = reforme.impot_revenu.bareme.seuils.length + 1;
    const articleTranches = fillArrayWith(count, this.gimmeIRPartsOfArticle);

    return (
      <div style={style.Div}>
        <Alinea0 style={style} />

        {articleTranches}
        <div>
          <Fab
            style={style.Button}
            size="small"
            onClick={this.handleAddTranche}
            color="primary">
            <AddIcon />
          </Fab>
          <Typography
            inline
            variant="overline"
            color="primary"
            style={style.Typographybouton}>
            Ajouter une tranche
          </Typography>
        </div>

        <div>
          <Fab
            style={style.Button}
            size="small"
            onClick={this.handleRemoveTranche}
            color="primary">
            <DeleteIcon />
          </Fab>
          <Typography
            inline
            variant="overline"
            color="primary"
            style={style.Typographybouton}>
            Supprimer une tranche
          </Typography>
        </div>

        <Alinea2 style={style} baseOutputInput={this.baseOutputInput} />
        <Alinea3 style={style} baseOutputInput={this.baseOutputInput} />
        <Alinea4a style={style} reforme={reforme} basecode={basecode} />

        {/* <ExpansionPanel
          style={style.Typography}
          square
          expanded={expanded === "panel4a"}
          onChange={this.handleChange("panel4a")}>
          <ExpansionPanelSummary
            style={styleExpansionpanel}
            expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body2" color="inherit">
              4. a. Le montant de l&apos;impôt résultant de l&apos;application
              des dispositions précédentes est diminué, dans...
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={styleExpansionpanel}>
            {this.alinea4a()}
          </ExpansionPanelDetails>
        </ExpansionPanel> */}

        <ExpansionPanel
          style={style.Typography}
          square
          expanded={expanded === "panel4b"}
          onChange={this.handleChange("panel4b")}>
          <ExpansionPanelSummary
            style={styleExpansionpanel}
            expandIcon={<ExpandMoreIcon />}>
            <Typography variant="body2" color="inherit">
              b. Le montant de l&apos;impôt résultant du a est réduit dans les
              conditions prévues...
            </Typography>
          </ExpansionPanelSummary>

          <ExpansionPanelDetails style={styleExpansionpanel}>
            {this.alinea4bext()}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

Article.propTypes = {
  reforme: PropTypes.shape({
    impot_revenu: PropTypes.shape({
      bareme: PropTypes.shape({
        seuils: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  }).isRequired,
  reformebase: PropTypes.shape({
    impot_revenu: PropTypes.shape({
      bareme: PropTypes.shape({
        seuils: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  addTranche: PropTypes.func.isRequired,
  removeTranche: PropTypes.func.isRequired,
};

export default Article;
