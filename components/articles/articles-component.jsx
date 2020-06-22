import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";
import React, { Fragment } from "react";

import {
  BaseInputOutput,
  FormulaOutput,
} from "../articles-inputs";
import { Parameter } from "../articles-inputs/parameter";
import {
  PrimaryExpandablePanel, SecondaryExpandablePanel, TertiaryExpandablePanel,
} from "../expandable-panels";
import fillArrayWith from "../utils/array/fillArrayWith";
import Alinea3 from "./article-alinea-3";
import Alinea4a from "./article-alinea-4a";
import styles from "./articles.module.scss";
import { Button } from "./buttons";
import { Plafonds, ReglesGenerales, ReglesSpecifiques } from "./quotient-familial";

class ArticlesComponent extends React.Component {
  renderBaseOutputInput = name => <BaseInputOutput name={name} />;

  renderFormulaOutput = (name, facteur = 1) => (
    <FormulaOutput facteur={facteur} name={name} />
  );

  gimmeIRPartsOfArticle = (i) => {
    const {
      amendement,
      base,
      handleArticleChange,
      plf,
    } = this.props;
    const s = amendement.impot_revenu.bareme.seuils;
    const t = amendement.impot_revenu.bareme.taux;
    const bases = base.impot_revenu.bareme.seuils;
    const baset = base.impot_revenu.bareme.taux;
    const plfs = plf && plf.impot_revenu.bareme.seuils;
    const plft = plf && plf.impot_revenu.bareme.taux;

    const nbt = s.length;
    const newTranche = i > 4;
    // Part 1
    if (i === 0) {
      const baseValue = bases[Math.min(i, bases.length - 1)];
      const plfValue = plfs ? plfs[Math.min(i, plfs.length - 1)] : null;
      return (
        <div
          key={i}>
          {
            "1. L'impôt est calculé en appliquant à la fraction de chaque part de revenu qui excède"
          }
          <Parameter
            editable
            amendementValue={s[i]}
            baseValue={baseValue}
            plfValue={plfValue}
            onAmendementChange={value => handleArticleChange(value, `seuil${i}`)}
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
          className={newTranche ? styles.newTranche : undefined}>
          –
          <Parameter
            editable
            amendementInputSize="small"
            amendementValue={t[i - 1]}
            baseValue={baseValuet}
            plfValue={plfValuet}
            onAmendementChange={value => handleArticleChange(value, `taux${i - 1}`)}
          />
          %
          <br />
          pour la fraction supérieure à&nbsp;
          <Parameter
            amendementValue={s[i - 1]}
            baseValue={baseValue}
            editable={false}
            plfValue={plfValue}
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
        className={newTranche ? styles.newTranche : undefined}>
        –
        <Parameter
          editable
          amendementInputSize="small"
          amendementValue={t[i - 1]}
          baseValue={baseValuet}
          plfValue={plfValuet}
          onAmendementChange={value => handleArticleChange(value, `taux${i - 1}`)}
        />
        %
        <br />
        pour la fraction supérieure à&nbsp;
        <Parameter
          amendementValue={s[i - 1]}
          baseValue={baseValueminus1}
          editable={false}
          plfValue={plfValueminus1}
        />
        €
        <br />
        et inférieure ou égale à&nbsp;
        <Parameter
          editable
          amendementValue={s[i]}
          baseValue={baseValue}
          plfValue={plfValue}
          onAmendementChange={value => handleArticleChange(value, `seuil${i}`)}
        />
        € ;
      </div>
    );
  };

  render() {
    const isQfEnabled = document.location.href.indexOf("qf=true") !== -1;
    const {
      amendement,
      handleAddTranche,
      handleRemoveTranche,
    } = this.props;
    const count = amendement.impot_revenu.bareme.seuils.length + 1;
    const articleTranches = fillArrayWith(count, this.gimmeIRPartsOfArticle);

    return (
      <Fragment>
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
                <Button caption="Ajouter ou" icons={<AddIcon />} onClick={handleAddTranche} />
              </Grid>
              <Grid item sm={6}>
                <Button caption="Supprimer une tranche" icons={<DeleteIcon />} onClick={handleRemoveTranche} />
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
              <Plafonds baseOutputInput={this.renderBaseOutputInput} />
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
  plf: null,
};

ArticlesComponent.propTypes = {
  amendement: PropTypes.shape({
    impot_revenu: PropTypes.shape({
      bareme: PropTypes.shape({
        seuils: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  }).isRequired,
  base: PropTypes.shape({
    impot_revenu: PropTypes.shape({
      bareme: PropTypes.shape({
        seuils: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  }).isRequired,
  handleAddTranche: PropTypes.func.isRequired,
  handleArticleChange: PropTypes.func.isRequired,
  handleRemoveTranche: PropTypes.func.isRequired,
  plf: PropTypes.shape({
    impot_revenu: PropTypes.shape({
      bareme: PropTypes.shape({
        seuils: PropTypes.arrayOf(PropTypes.number),
      }),
    }),
  }),
};

export default ArticlesComponent;
