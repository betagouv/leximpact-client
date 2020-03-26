import {
  Divider, Grid, Paper, Typography,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
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

const stylesTheme = theme => ({
  paper: {
    margin: "1em",
    padding: "0 0 10px 0",
    [theme.breakpoints.down("xs")]: {
      margin: "0em",
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
  InputSeuil: {
    fontSize: "20px",
    marginLeft: "2px",
    marginRight: "2px",
    width: "80px",
  },
  InputTaux: {
    fontSize: "20px",
    marginLeft: "0px",
    marginRight: "3px",
    width: "40px",
  },
  StyleTitreThematique: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: "20px",
    fontVariantCaps: "all-small-caps",
    fontWeight: "bold",
    textAlign: "left",
  },
  Typography: {
    padding: "5px",
  },
  TypographyNouvelleTranche: {
    color: "#00A3FF",
    padding: "5px",
  },
  Typographybouton: {
    margin: "10px",
  },
  VarCodeNew: {
    color: "#00A3FF",
    fontWeight: "bold",
    lineHeight: "10px",
  },
  VarCodeexistant: {
    backgroundColor: "#DED500",
    backgroundSize: "auto auto",
    color: "#000000",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "8px",
    padding: "3px",
    // toggle off next 2 lines if PLF is unplugged
    textDecorationColor: "#FF6B6B",
    textDecorationLine: "line-through",
    textDecorationSize: "2px",
  },
  VarCodeexistantNonBarre: {
    backgroundColor: "#DED500",
    backgroundSize: "auto auto",
    color: "#000000",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "8px",
    padding: "3px",
  },

  VarPLF: {
    color: "#FF6B6B",
    fontWeight: "bold",
    lineHeight: "10px",
    marginLeft: "3px",
    marginRight: "5px",
  },
};

class ArticlesComponent extends React.Component {
  // const nbt = props.reformeBase.impot_revenu.bareme.seuils.length;

  renderBaseOutputInput = name => <BaseInputOutput name={name} />;

  renderFormulaOutput = (name, facteur = 1) => (
    <FormulaOutput facteur={facteur} name={name} style={style} />
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
    const styleAUtiliser = i > 4 ? style.TypographyNouvelleTranche : style.Typography;
    // Part 1
    if (i === 0) {
      const baseValue = bases[Math.min(i, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i, plfs.length - 1)] : null;
      return (
        <Typography
          key={i}
          color="inherit"
          style={styleAUtiliser}
          variant="body2">
          {
            "1. L'impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède"
          }
          <Parameter
            editable
            amendmentValue={s[i]}
            initialValue={baseValue}
            plfValue={plfValue}
            onAmendmentChange={value => handleArticleChange(value, `seuil${i}`)}
          />
          € le taux de&nbsp;:
        </Typography>
      );
    }
    // Last part
    if (i === nbt) {
      const baseValuet = baset[Math.min(i, baset.length) - 1] * 100;
      const plfValuet = plft ? plft[Math.min(i, plft.length) - 1] * 100 : null;
      const baseValue = bases[Math.min(i - 1, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i - 1, plfs.length - 1)] : null;

      return (
        <Typography
          key={i}
          color="inherit"
          style={styleAUtiliser}
          variant="body2">
          –
          <Parameter
            editable
            amendmentValue={t[i - 1] * 100}
            initialValue={baseValuet}
            plfValue={plfValuet}
            onAmendmentChange={value => handleArticleChange(value, `taux${i - 1}`)}
          />
          %
          <br />
          pour la fraction supérieure à&nbsp;
          <Parameter
            amendmentValue={s[i - 1]}
            editable={false}
            initialValue={baseValue}
            plfValue={plfValue}
          />
          €.
        </Typography>
      );
    }
    // Other parts :
    const baseValuet = baset[Math.min(i, baset.length) - 1] * 100;
    const plfValuet = plft ? plft[Math.min(i, plft.length) - 1] * 100 : null;
    const baseValue = bases[Math.min(i, bases.length - 1)];
    const plfValue = plfs ? plfs[Math.min(i, plfs.length - 1)] : null;
    const baseValueminus1 = bases[Math.min(i - 1, bases.length - 1)];
    const plfValueminus1 = plfs ? plfs[Math.min(i - 1, plfs.length - 1)] : null;

    return (
      <Typography
        key={i}
        color="inherit"
        style={styleAUtiliser}
        variant="body2">
        –
        <Parameter
          editable
          amendmentValue={t[i - 1] * 100}
          initialValue={baseValuet}
          plfValue={plfValuet}
          onAmendmentChange={value => handleArticleChange(value, `taux${i - 1}`)}
        />
        %
        <br />
        pour la fraction supérieure à&nbsp;
        <Parameter
          amendmentValue={s[i - 1]}
          editable={false}
          initialValue={baseValueminus1}
          plfValue={plfValueminus1}
        />
        €
        <br />
        et inférieure ou égale à&nbsp;
        <Parameter
          editable
          amendmentValue={s[i]}
          initialValue={baseValue}
          plfValue={plfValue}
          onAmendmentChange={value => handleArticleChange(value, `seuil${i}`)}
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
