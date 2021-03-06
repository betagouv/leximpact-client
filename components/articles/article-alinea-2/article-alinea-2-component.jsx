import { Typography } from "@material-ui/core";
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

class Alinea2 extends PureComponent {
  render() {
    const {
      baseOutputInput,
      expandArticlePanelHandler,
      isPanelExpanded,
      style,
    } = this.props;
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
            Plafonds du quotient familial
          </Typography>
          <p style={styleTitreThematiqueModifPLF}>Modifiés par le PLF 2020</p>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography color="inherit" variant="body2">
            2. La réduction d&apos;impôt résultant de l&apos;application du
            quotient familial ne peut excéder
            {baseOutputInput("plafond_qf.maries_ou_pacses")}
            € par demi-part ou
            la moitié de cette somme par quart de part s&apos;ajoutant à une
            part pour les contribuables célibataires, divorcés, veufs ou soumis
            à l&apos;imposition distincte prévue au 4 de l&apos;article 6 et à
            deux parts pour les contribuables mariés soumis à une imposition
            commune. Toutefois, pour les contribuables célibataires, divorcés,
            ou soumis à l&apos;imposition distincte prévue au 4 de
            l&apos;article 6 qui répondent aux conditions fixées au II de
            l&apos;article 194, la réduction d&apos;impôt correspondant à la
            part accordée au titre du premier enfant à charge est limitée à
            {baseOutputInput("plafond_qf.celib_enf")}
            {" "}
            € Lorsque les
            contribuables entretiennent uniquement des enfants dont la charge
            est réputée également partagée entre l&apos;un et l&apos;autre des
            parents, la réduction d&apos;impôt correspondant à la demi-part
            accordée au titre de chacun des deux premiers enfants est limitée à
            la moitié de cette somme. Par dérogation aux dispositions du premier
            alinéa, la réduction d&apos;impôt résultant de l&apos;application du
            quotient familial, accordée aux contribuables qui bénéficient des
            dispositions des a, b et e du 1 de l&apos;article 195, ne peut
            excéder
            {baseOutputInput("plafond_qf.celib")}
            € ;
            <br />
            Les contribuables qui bénéficient d&apos;une demi-part au titre des
            a, b, c, d, d bis, e et f du 1 ainsi que des 2 à 6 de l&apos;article
            195 ont droit à une réduction d&apos;impôt égale à
            {" "}
            {baseOutputInput("plafond_qf.reduc_postplafond")}
            pour chacune de ces demi-parts lorsque la réduction de leur
            cotisation d&apos;impôt est plafonnée en application du premier
            alinéa. La réduction d&apos;impôt est égale à la moitié de cette
            somme lorsque la majoration visée au 2 de l&apos;article 195 est de
            un quart de part. Cette réduction d&apos;impôt ne peut toutefois
            excéder l&apos;augmentation de la cotisation d&apos;impôt résultant
            du plafonnement. Les contribuables veufs ayant des enfants à charge
            qui bénéficient d&apos;une part supplémentaire de quotient familial
            en application du I de l&apos;article 194 ont droit à une réduction
            d&apos;impôt égale à
            {baseOutputInput("plafond_qf.reduc_postplafond_veuf")}
            € pour cette
            part supplémentaire lorsque la réduction de leur cotisation
            d&apos;impôt est plafonnée en application du premier alinéa du
            présent 2. Cette réduction d&apos;impôt ne peut toutefois excéder
            l&apos;augmentation de la cotisation d&apos;impôt résultant du
            plafonnement.
          </Typography>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

Alinea2.propTypes = {
  baseOutputInput: PropTypes.func.isRequired,
  expandArticlePanelHandler: PropTypes.func.isRequired,
  isPanelExpanded: PropTypes.bool.isRequired,
  style: PropTypes.shape().isRequired,
};

export default Alinea2;
