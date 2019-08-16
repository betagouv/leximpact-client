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

import LexExpansionPanel from "../article/panels/expansion-panel";
import LexExpansionPanelDetails from "../article/panels/expansion-panel-details";
import LexExpansionPanelSummary from "../article/panels/expansion-panel-summary";

const styleExpansionpanel = {
  padding: "1px",
};

class Alinea2 extends PureComponent {
  render() {
    const {
      isPanelExpanded,
      expandArticlePanelHandler,
      baseOutputInput,
      style,
    } = this.props;
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
            2. La réduction d&apos;impôt résultant de l&apos;application du
            quotient familial ...
          </Typography>
        </LexExpansionPanelSummary>

        <LexExpansionPanelDetails style={styleExpansionpanel}>
          <Typography variant="body2" color="inherit">
            ... ne peut excéder
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
