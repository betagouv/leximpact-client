import React from "react";
import PropTypes from "prop-types";
import { Divider, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import fillArrayWith from "../utils/array/fillArrayWith";
import InputField from "../articles-inputs/fields/input-field";
import OutputField from "../articles-inputs/fields/output-field";
import {
  BaseInputOutput,
  FormulaOutput,
  FormulaOutputCombilin,
} from "../articles-inputs";

import ArticleHeader from "./article-header";
import Alinea0 from "./article-alinea-0";
import Alinea2 from "./article-alinea-2";
import Alinea3 from "./article-alinea-3";
import Alinea4a from "./article-alinea-4a";
import Alinea4b from "./article-alinea-4b";
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
  // const nbt = props.reformeBase.impot_revenu.bareme.seuils.length;

  renderBaseOutputInput = name => <BaseInputOutput style={style} name={name} />

  renderFormulaOutput = (name, facteur = 1) => (
    <FormulaOutput style={style} name={name} facteur={facteur} />
  )

  renderFormulaOuputCombiLin = (name1, fact1, name2, fact2) => (
    <FormulaOutputCombilin
      style={style}
      name1={name1}
      fact1={fact1}
      name2={name2}
      fact2={fact2}
    />
  )

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
          <Alinea2 style={style} baseOutputInput={this.renderBaseOutputInput} />
          <Alinea3 style={style} baseOutputInput={this.renderBaseOutputInput} />
          <Alinea4a
            style={style}
            onInputChange={handleArticleChange}
            baseOutputInput={this.renderBaseOutputInput}
            formulaOutputInput={this.renderFormulaOutput}
          />
          <Alinea4b
            style={style}
            baseOutputInput={this.renderBaseOutputInput}
            formulaOutputInput={this.renderFormulaOutput}
            formulaOutputInputCombiLin={this.renderFormulaOuputCombiLin}
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
