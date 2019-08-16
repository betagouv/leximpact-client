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
    }]
*/
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";

import LexExpansionPanel from "../article-expansion-panels/expansion-panel";
import LexExpansionPanelDetails from "../article-expansion-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../article-expansion-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class Alinea4b extends PureComponent {
  alinea4bext() {
    const {
      baseOutputInput,
      formulaOutputInput,
      formulaOutputInputFacteur,
      formulaOutputInputCombiLin,
    } = this.props;
    return (
      <Typography variant="body2" color="inherit">
        ...au sixième alinéa du présent b pour les contribuables dont le montant
        des revenus du foyer fiscal, au sens du 1° du IV de l&apos;article 1417,
        est inférieur à
        {" "}
        {baseOutputInput("plafond_qf.reduction_ss_condition_revenus.seuil2")}
        {" "}
€,
        pour la première part de quotient familial des personnes célibataires,
        veuves ou divorcées, et à
        {formulaOutputInputFacteur(
          "plafond_qf.reduction_ss_condition_revenus.seuil2",
          2,
        )}
        €, pour les deux premières parts de quotient familial des personnes
        soumises à une imposition commune. Ces seuils sont majorés de
        {" "}
        {baseOutputInput(
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
        {baseOutputInput("plafond_qf.reduction_ss_condition_revenus.seuil1")}
        {" "}
€,
        pour la première part de quotient familial des personnes célibataires,
        veuves ou divorcées, ou
        {" "}
        {formulaOutputInputFacteur(
          "plafond_qf.reduction_ss_condition_revenus.seuil1",
          2,
        )}
        €, pour les deux premières parts de quotient familial des personnes
        soumises à une imposition commune, ces seuils étant majorés le cas
        échéant dans les conditions prévues au même premier alinéa, le taux de
        la réduction d&apos;impôt est égal à
        {baseOutputInput("plafond_qf.reduction_ss_condition_revenus.taux")}
        % multiplié par le rapport entre :
        <br />
– au numérateur, la différence entre
        {" "}
        {formulaOutputInput("plafond_qf.reduction_ss_condition_revenus.seuil2")}
        €, pour les personnes célibataires, veuves ou divorcées, ou
        {formulaOutputInputFacteur(
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
        {formulaOutputInputCombiLin(
          "plafond_qf.reduction_ss_condition_revenus.seuil2",
          1,
          "plafond_qf.reduction_ss_condition_revenus.seuil1",
          -1,
        )}
        €, pour les personnes célibataires, veuves ou divorcées, ou
        {" "}
        {formulaOutputInputCombiLin(
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

  render() {
    const { isPanelExpanded, expandArticlePanelHandler, style } = this.props;
    return (
      <LexExpansionPanel
        style={style.Typography}
        square
        expanded={isPanelExpanded}
        onChange={expandArticlePanelHandler}>
        <LexExpansionPanelSummary
          style={styleExpansionpanel}
          expandIcon={<ExpandMoreIcon />}>
          <Typography variant="body2" color="inherit">
            b. Le montant de l&apos;impôt résultant du a est réduit dans les
            conditions prévues...
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          {this.alinea4bext()}
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

Alinea4b.propTypes = {
  isPanelExpanded: PropTypes.bool.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  baseOutputInput: PropTypes.func.isRequired,
  formulaOutputInput: PropTypes.func.isRequired,
  formulaOutputInputFacteur: PropTypes.func.isRequired,
  formulaOutputInputCombiLin: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default Alinea4b;
