import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

import {
  BaseInputOutput,
  FormulaOutput,
} from "../articles-inputs";
import { Parameter } from "../articles-inputs/parameter";
import fillArrayWith from "../utils/array/fillArrayWith";
import Alinea0 from "./article-alinea-0";
import Alinea2 from "./article-alinea-2";
import Alinea3 from "./article-alinea-3";
import Alinea4a from "./article-alinea-4a";
import ArticleHeader from "./article-header";
import BoutonAjouterTranche from "./article-tranches/bouton-ajouter-tranche";
import BoutonSupprimerTranche from "./article-tranches/bouton-supprimer-tranche";
import styles2 from "./articles-component.module.scss";

const stylesTheme = theme => ({
  paper: {
    margin: "1em",
    padding: "0 0 10px 0",
    [theme.breakpoints.down("xs")]: {
      margin: "0em",
    },
  },
  titleArticleCGI: {
    color: "#6C6C6C",
    fontFamily: "Lora",
    fontSize: "18px",
    paddingLeft: "6px",
    [theme.breakpoints.down("xs")]: {
      color: "#6C6C6C",
      fontFamily: "Lora",
      fontSize: "14px",
      paddingLeft: "6px",
    },
  },
});

const style = {
  Button: {
    margin: "10px",
    padding: "3px",
  },
  Div: {
    marginBottom: "1.5em",
    marginLeft: "1.5em",
    marginRight: "1.5em",
    marginTop: "0",
  },
  DivTitreTheme: {
    marginBottom: "0em",
    marginLeft: "1.5em",
    marginRight: "1.5em",
    marginTop: "1em",
  },
  StyleTitreThematique: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: "20px",
    fontVariantCaps: "all-small-caps",
    fontWeight: "bold",
    textAlign: "left",
  },
};

class ArticlesComponent extends React.Component {
  // const nbt = props.reformeBase.impot_revenu.bareme.seuils.length;

  renderBaseOutputInput = name => <BaseInputOutput name={name} />;

  renderFormulaOutput = (name, facteur = 1) => (
    <FormulaOutput facteur={facteur} name={name} />
  );

  gimmeIRPartsOfArticle = (i) => {
    const {
      handleArticleChange,
      reforme,
      reformeBase,
      reformePLF,
    } = this.props;
    const s = reforme.impot_revenu.bareme.seuils;
    const t = reforme.impot_revenu.bareme.taux;
    const bases = reformeBase.impot_revenu.bareme.seuils;
    const baset = reformeBase.impot_revenu.bareme.taux;
    const plfs = reformePLF && reformePLF.impot_revenu.bareme.seuils;
    const plft = reformePLF && reformePLF.impot_revenu.bareme.taux;

    const nbt = s.length;
    const styleAUtiliser = i > 4 ? styles2.newBracket : styles2.bracket;
    // Part 1
    if (i === 0) {
      const baseValue = bases[Math.min(i, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i, plfs.length - 1)] : null;
      return (
        <Typography
          key={i}
          className={styleAUtiliser}
          color="inherit"
          variant="body2">
          {
            "1. L'impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède"
          }
          <Parameter
            editable
            baseValue={baseValue}
            plfValue={plfValue}
            reformValue={s[i]}
            onReformChange={value => handleArticleChange(value, `seuil${i}`)}
          />
          € le taux de&nbsp;:
        </Typography>
      );
    }
    // Last part
    if (i === nbt) {
      const baseValuet = baset[Math.min(i, baset.length) - 1];
      const plfValuet = plft ? plft[Math.min(i, plft.length) - 1] : null;
      const baseValue = bases[Math.min(i - 1, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i - 1, plfs.length - 1)] : null;

      return (
        <Typography
          key={i}
          className={styleAUtiliser}
          color="inherit"
          variant="body2">
          –
          <Parameter
            editable
            baseValue={baseValuet}
            plfValue={plfValuet}
            reformInputSize="small"
            reformValue={t[i - 1]}
            onReformChange={value => handleArticleChange(value, `taux${i - 1}`)}
          />
          %
          <br />
          pour la fraction supérieure à&nbsp;
          <Parameter
            baseValue={baseValue}
            editable={false}
            plfValue={plfValue}
            reformValue={s[i - 1]}
          />
          €.
        </Typography>
      );
    }
    // Other parts :
    const baseValuet = baset[Math.min(i, baset.length) - 1];
    const plfValuet = plft ? plft[Math.min(i, plft.length) - 1] : null;
    const baseValue = bases[Math.min(i, bases.length - 1)];
    const plfValue = plfs ? plfs[Math.min(i, plfs.length - 1)] : null;
    const baseValueminus1 = bases[Math.min(i - 1, bases.length - 1)];
    const plfValueminus1 = plfs ? plfs[Math.min(i - 1, plfs.length - 1)] : null;

    return (
      <Typography
        key={i}
        className={styleAUtiliser}
        color="inherit"
        variant="body2">
        –
        <Parameter
          editable
          baseValue={baseValuet}
          plfValue={plfValuet}
          reformInputSize="small"
          reformValue={t[i - 1]}
          onReformChange={value => handleArticleChange(value, `taux${i - 1}`)}
        />
        %
        <br />
        pour la fraction supérieure à&nbsp;
        <Parameter
          baseValue={baseValueminus1}
          editable={false}
          plfValue={plfValueminus1}
          reformValue={s[i - 1]}
        />
        €
        <br />
        et inférieure ou égale à&nbsp;
        <Parameter
          editable
          baseValue={baseValue}
          plfValue={plfValue}
          reformValue={s[i]}
          onReformChange={value => handleArticleChange(value, `seuil${i}`)}
        />
        € ;
      </Typography>
    );
  };

  render() {
    const {
      classes,
      handleAddTranche,
      handleArticleChange,
      handleRemoveTranche,
      handleResetVarArticle,
      handleResetVarArticleExistant,
      reforme,
      reformePLF,
    } = this.props;
    const count = reforme.impot_revenu.bareme.seuils.length + 1;
    const articleTranches = fillArrayWith(count, this.gimmeIRPartsOfArticle);

    return (
      <Paper className={classes.paper}>
        <ArticleHeader
          montrerPLF={!!reformePLF}
          resetVarArticle={handleResetVarArticle}
          resetVarArticleExistant={handleResetVarArticleExistant} />
        <Divider />
        <div style={style.DivTitreTheme}>
          <Typography style={style.StyleTitreThematique}>
            Barème et taux
            <span className={classes.titleArticleCGI}>
                - Article 197 du CGI - I.1
            </span>
          </Typography>
          <Divider />
        </div>
        <div style={style.Div}>
          <Alinea0 style={style} />
          {articleTranches}
          <Grid container spacing={0}>
            <Grid item sm={3}>
              <BoutonAjouterTranche style={style} onClick={handleAddTranche} />
            </Grid>
            <Grid item sm={6}>
              <BoutonSupprimerTranche
                style={style}
                onClick={handleRemoveTranche}
              />
            </Grid>
          </Grid>
          <Alinea2 baseOutputInput={this.renderBaseOutputInput} style={style} />
          <Alinea3 baseOutputInput={this.renderBaseOutputInput} style={style} />
          <Alinea4a
            baseOutputInput={this.renderBaseOutputInput}
            formulaOutputInput={this.renderFormulaOutput}
            style={style}
            onInputChange={handleArticleChange}
          />
        </div>
      </Paper>
    );
  }
}

ArticlesComponent.defaultProps = {
  reformePLF: null,
};

ArticlesComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleAddTranche: PropTypes.func.isRequired,
  handleArticleChange: PropTypes.func.isRequired,
  handleRemoveTranche: PropTypes.func.isRequired,
  handleResetVarArticle: PropTypes.func.isRequired,
  handleResetVarArticleExistant: PropTypes.func.isRequired,
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
  reformePLF: PropTypes.shape({
    impot_revenu: PropTypes.shape({
      bareme: PropTypes.shape({
        seuils: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  }),
};

export default withStyles(stylesTheme, { withTheme: true })(ArticlesComponent);
