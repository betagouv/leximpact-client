import { Fragment, PureComponent } from "react";

import { ExpandableText } from "../../../expandable-panels";

export class MontantDgfCommunes extends PureComponent {
  render() {
    // Article L2334-1 du CGCT
    return (
      <Fragment>
        Une dotation globale de fonctionnement est instituée en faveur des communes
        et de certains de leurs groupements. Elle se compose d&apos;une dotation
        forfaitaire et d&apos;une dotation d&apos;aménagement.
        <br />
        <br />
        Le montant de la dotation globale de fonctionnement mentionnée au premier alinéa
        est égal à la différence entre le montant de la dotation prévue à l&apos;article
        L. 1613-1 et le montant des dotations prévues aux articles L. 3334-1 et L. 4332-4.
        <br />
        <br />
        <ExpandableText
          caption="... Voir les paragraphes de la loi désormais caducs"
        >
          Pour chacune des années 2005 à 2009, la progression de la dotation globale de
          fonctionnement des communes et de leurs groupements est affectée en priorité,
          à concurrence de 120 millions d&apos;euros, à la dotation de solidarité urbaine
          et de cohésion sociale prévue à l&apos;article L. 2334-15. Si, pour chacune des
          années 2005 à 2009, le montant de l&apos;accroissement de la dotation globale de
          fonctionnement des communes et de certains de leurs groupements est inférieur à
          500 millions d&apos;euros, l&apos;affectation prévue à la phrase précédente est
          limitée à 24 % de l&apos;accroissement constaté. Pour 2009 et pour 2010, et à
          titre dérogatoire, elle s&apos;établit au minimum à 70 millions d&apos;euros.
        </ExpandableText>

      </Fragment>
    );
  }
}
