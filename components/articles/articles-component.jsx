import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import {
  BaseInputOutput,
  FormulaOutput,
} from "../articles-inputs";
import { Parameter } from "../articles-inputs/parameter";
import fillArrayWith from "../utils/array/fillArrayWith";
import Alinea2 from "./article-alinea-2";
import Alinea3 from "./article-alinea-3";
import Alinea4a from "./article-alinea-4a";
import ArticleHeader from "./article-header";
import BoutonAjouterTranche from "./article-tranches/bouton-ajouter-tranche";
import BoutonSupprimerTranche from "./article-tranches/bouton-supprimer-tranche";
import styles from "./articles.module.scss";
import { PrimaryExpandablePanel, SecondaryExpandablePanel, TertiaryExpandablePanel } from "./expandable-panels";
import { ReglesGenerales, ReglesSpecifiques } from "./quotient-familial";

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
    const newTranche = i > 4;
    // Part 1
    if (i === 0) {
      const baseValue = bases[Math.min(i, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i, plfs.length - 1)] : null;
      return (
        <div
          key={i}
          className={styles.text}>
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
        </div>
      );
    }
    // Last part
    if (i === nbt) {
      const baseValuet = baset[Math.min(i, baset.length) - 1];
      const plfValuet = plft ? plft[Math.min(i, plft.length) - 1] : null;
      const baseValue = bases[Math.min(i - 1, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i - 1, plfs.length - 1)] : null;

      return (
        <div
          key={i}
          className={classNames({
            [styles.text]: true,
            [styles.newTranche]: newTranche,
          })}>
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
        </div>
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
      <div
        key={i}
        className={classNames({
          [styles.text]: true,
          [styles.newTranche]: newTranche,
        })}>
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
      </div>
    );
  };

  render() {
    const isQfEnabled = document.location.href.indexOf("qf=true") !== -1;
    const {
      handleAddTranche,
      handleRemoveTranche,
      handleResetVarArticle,
      handleResetVarArticleExistant,
      reforme,
      reformePLF,
    } = this.props;
    const count = reforme.impot_revenu.bareme.seuils.length + 1;
    const articleTranches = fillArrayWith(count, this.gimmeIRPartsOfArticle);

    return (
      <Fragment>
        <ArticleHeader
          montrerPLF={!!reformePLF}
          resetVarArticle={handleResetVarArticle}
          resetVarArticleExistant={handleResetVarArticleExistant} />
        <div style={{ marginRight: "1em" }}>
          <PrimaryExpandablePanel
            expanded
            subTitle="Article 197 du CGI - I.1"
            title="Barème"
          >
            <TertiaryExpandablePanel title="I. En ce qui concerne les contribuables ...">
              visés à l&apos;article 4 B, il est fait application des règles
              suivantes pour le calcul de l&apos;impôt sur le revenu :
            </TertiaryExpandablePanel>
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
          </PrimaryExpandablePanel>
          <PrimaryExpandablePanel
            subTitle="Articles 194, 195 et 197 du CGI"
            title="Quotient familial"
          >
            {isQfEnabled && (
              <SecondaryExpandablePanel
                subTitle="Articles 194 - I.§1"
                title="Règles générales"
              >
                <ReglesGenerales />
              </SecondaryExpandablePanel>
            )}
            <SecondaryExpandablePanel
              subTitle="Articles 197 - I.2"
              title="Plafonds"
            >
              <Alinea2 baseOutputInput={this.renderBaseOutputInput} />
            </SecondaryExpandablePanel>
            {isQfEnabled && (
              <SecondaryExpandablePanel
                subTitle="Articles 194 et 195"
                title="Règles spécifiques"
              >
                <ReglesSpecifiques />
              </SecondaryExpandablePanel>
            )}
          </PrimaryExpandablePanel>
          <PrimaryExpandablePanel
            subTitle="Article 197 du CGI - I.3"
            title="Réfaction outre-mer"
          >
            <Alinea3 baseOutputInput={this.renderBaseOutputInput} />
          </PrimaryExpandablePanel>
          <PrimaryExpandablePanel
            subTitle="Article 197 du CGI - I.4a"
            title="Décote"
          >
            <Alinea4a
              baseOutputInput={this.renderBaseOutputInput}
              formulaOutputInput={this.renderFormulaOutput}
            />
          </PrimaryExpandablePanel>
        </div>
      </Fragment>
    );
  }
}

ArticlesComponent.defaultProps = {
  reformePLF: null,
};

ArticlesComponent.propTypes = {
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

export default ArticlesComponent;
