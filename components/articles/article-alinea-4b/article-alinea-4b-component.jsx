import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LexExpansionPanel from "../expandable-panels/expansion-panel";
import LexExpansionPanelDetails from "../expandable-panels/expansion-panel-details";
import LexExpansionPanelSummary from "../expandable-panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

const styleTitreThematique = {
  color: "#B1B1B1",
  fontFamily: "Lato",
  fontSize: "20px",
  fontVariantCaps: "all-small-caps",
  fontWeight: "bold",
  textAlign: "left",
};

const styleTitreThematiqueModifPLF = {
  color: "#FF6B6B",
  fontFamily: "Lora",
  fontSize: "12px",
  fontWeight: "bold",
  textAlign: "left",
  verticalAlign: "middle",
  marginTop: "10px",
  marginLeft: "6px",
};

const StyledFormControlLabel = withStyles({
  label: {
    color: "#565656",
    display: "inline-block",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    lineHeight: "10px",
  },
  root: {
    display: "block",
  },
})(FormControlLabel);

class Alinea4b extends PureComponent {
  alinea4bext() {
    const {
      baseOutputInput,
      formulaOutputInput,
      formulaOutputInputCombiLin,
    } = this.props;
    return (
      <Typography color="inherit" variant="body2">
        b. Le montant de l&apos;impôt résultant du a est réduit dans les
        conditions prévues au sixième alinéa du présent b pour les contribuables
        dont le montant des revenus du foyer fiscal, au sens du 1° du IV de
        l&apos;article 1417, est inférieur à
        {" "}
        {baseOutputInput("plafond_qf.reduction_ss_condition_revenus.seuil2")}
        {" "}
        €,
        pour la première part de quotient familial des personnes célibataires,
        veuves ou divorcées, et à
        {formulaOutputInput(
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
        {formulaOutputInput(
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
        {formulaOutputInput(
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
    const { expandArticlePanelHandler, isPanelExpanded, style } = this.props;
    return (
      <LexExpansionPanel
        square
        expanded={isPanelExpanded}
        style={style.Typography}
        onChange={expandArticlePanelHandler}>
        <LexExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          style={styleExpansionpanel}>
          <Typography style={styleTitreThematique}>
            Réfaction foyers modestes
          </Typography>
          <p style={styleTitreThematiqueModifPLF}>Abrogée par le PLF 2020</p>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          {this.alinea4bext()}
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

Alinea4b.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  formulaOutputInput: PropTypes.func.isRequired,
  formulaOutputInputCombiLin: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
};

export default Alinea4b;
