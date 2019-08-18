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
import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Divider, Paper, Typography } from "@material-ui/core";
import { get } from "lodash";
import { withStyles } from "@material-ui/core/styles";

import fillArrayWith from "../utils/array/fillArrayWith";

import ArticleHeader from "./article-header";
import Alinea0 from "./article-alinea-0";
import Alinea2 from "./article-alinea-2";
import Alinea3 from "./article-alinea-3";
import Alinea4a from "./article-alinea-4a";
import Alinea4b from "./article-alinea-4b";
import InputField from "./fields/input-field";
import OutputField from "./fields/output-field";
import BoutonAjouterTranche from "./article-tranches/bouton-ajouter-tranche";
import BoutonSupprimerTranche from "./article-tranches/bouton-supprimer-tranche";
import makeNumberGoodLooking from "./utils/make-number-good-looking";

const stylesTheme = () => ({
  paper: {
    padding: 0,
    margin: "1em",
  },
});

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

class ArticlesComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // const nbt = props.reformeBase.impot_revenu.bareme.seuils.length;
  // }

  baseOutputInput = (name) => {
    const { handleArticleChange, reforme, reformeBase } = this.props;
    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const multip = tx ? 100 : 1;

    let baseval = get(reformeBase.impot_revenu, name);
    baseval *= multip;
    baseval = makeNumberGoodLooking(baseval);

    let newval = get(reforme.impot_revenu, name);
    newval *= multip;
    newval = makeNumberGoodLooking(newval);
    return (
      <Fragment>
        <OutputField value={baseval} style={style.VarCodeexistant} />
        <InputField
          value={newval}
          onChange={handleArticleChange}
          name={name}
          style={tx ? style.InputTaux : style.InputSeuil}
        />
      </Fragment>
    );
  }

  formulaOutputInputFacteur = (name, fact) => {
    const { reforme, reformeBase } = this.props;
    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const multip = tx ? 100 : 1;

    let baseval = get(reformeBase.impot_revenu, name);
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
    const { reformeBase } = this.props;
    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const baseval = makeNumberGoodLooking(
      get(reformeBase.impot_revenu, name) * (tx ? 100 : 1),
    );
    return <OutputField value={baseval} style={style.VarCodeexistant} />;
  }

  formulaOutputInput = (name) => {
    const { reforme, reformeBase } = this.props;
    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const baseval = makeNumberGoodLooking(
      get(reformeBase.impot_revenu, name) * (tx ? 100 : 1),
    );
    const newval = makeNumberGoodLooking(
      get(reforme.impot_revenu, name) * (tx ? 100 : 1),
    );
    return (
      <React.Fragment>
        <OutputField value={baseval} style={style.VarCodeexistant} />
        <OutputField value={newval} style={style.VarCodeNew} />
      </React.Fragment>
    );
  }

  formulaOutputInputCombiLin = (name1, fact1, name2, fact2) => {
    const { reforme, reformeBase } = this.props;
    const baseval = makeNumberGoodLooking(
      get(reformeBase.impot_revenu, name1) * fact1
        + get(reformeBase.impot_revenu, name2) * fact2,
    );
    const newval = makeNumberGoodLooking(
      get(reforme.impot_revenu, name1) * fact1
        + get(reforme.impot_revenu, name2) * fact2,
    );

    return (
      <React.Fragment>
        <OutputField value={baseval} style={style.VarCodeexistant} />
        <OutputField value={newval} style={style.VarCodeNew} />
      </React.Fragment>
    );
  }

  gimmeIRPartsOfArticle = (i) => {
    const { handleArticleChange, reforme, reformeBase } = this.props;
    const s = reforme.impot_revenu.bareme.seuils;
    const t = reforme.impot_revenu.bareme.taux;
    const bases = reformeBase.impot_revenu.bareme.seuils;
    const baset = reformeBase.impot_revenu.bareme.taux;
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
            onChange={handleArticleChange}
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
            onChange={handleArticleChange}
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
          onChange={handleArticleChange}
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
          onChange={handleArticleChange}
          name={`seuil${i}`}
          style={style.InputSeuil}
        />
        {" "}
        € ;
      </Typography>
    );
  }

  render() {
    const {
      classes,
      handleArticleChange,
      handleAddTranche,
      handleRemoveTranche,
      reforme,
    } = this.props;
    const count = reforme.impot_revenu.bareme.seuils.length + 1;
    const articleTranches = fillArrayWith(count, this.gimmeIRPartsOfArticle);

    return (
      <Paper className={classes.paper}>
        <ArticleHeader />
        <Divider />
        <div style={style.Div}>
          <Alinea0 style={style} />
          {articleTranches}
          <BoutonAjouterTranche onClick={handleAddTranche} style={style} />
          <BoutonSupprimerTranche onClick={handleRemoveTranche} style={style} />
          <Alinea2 style={style} baseOutputInput={this.baseOutputInput} />
          <Alinea3 style={style} baseOutputInput={this.baseOutputInput} />
          <Alinea4a
            style={style}
            onInputChange={handleArticleChange}
            baseOutputInput={this.baseOutputInput}
            formulaOutputInput={this.formulaOutputInput}
          />
          <Alinea4b
            style={style}
            baseOutputInput={this.baseOutputInput}
            formulaOutputInput={this.formulaOutputInput}
            formulaOutputInputFacteur={this.formulaOutputInputFacteur}
            formulaOutputInputCombiLin={this.formulaOutputInputCombiLin}
          />
        </div>
      </Paper>
    );
  }
}

ArticlesComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  reforme: PropTypes.shape({
    impot_revenu: PropTypes.shape({
      bareme: PropTypes.shape({
        seuils: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  }).isRequired,
  reformeBase: PropTypes.shape({
    impot_revenu: PropTypes.shape({
      bareme: PropTypes.shape({
        seuils: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  }).isRequired,
  handleArticleChange: PropTypes.func.isRequired,
  handleAddTranche: PropTypes.func.isRequired,
  handleRemoveTranche: PropTypes.func.isRequired,
};

export default withStyles(stylesTheme, { withTheme: true })(ArticlesComponent);
