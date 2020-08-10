import { Fragment, PureComponent } from "react";

import { ExpandablePanelSubTitle, ExpandableText, ParameterValues } from "../../../common";

export class DfCasEpci extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        <ExpandablePanelSubTitle
          subTitle="§4"
          title="Communes adhèrant  ou appartenant à un EPCI qui devient à fiscalité professionnelle unique (FPU) cette année."
        />
        Pour les communes membres d&apos;un établissement public de coopération
        intercommunale soumis pour la première fois aux dispositions de
        l&apos;article 1609 nonies C du code général des impôts, le montant de
        la dotation forfaitaire perçue l&apos;année précédente est minoré d&apos;un
        montant égal aux crédits perçus en 2014 en application du I du D de
        l&apos;article 44 de la loi de finances pour 1999 précitée et indexé
        sur le taux d&apos;évolution de la dotation forfaitaire de chaque commune
        l&apos;année précédant la répartition. Ces crédits sont versés à l&apos;établissement,
        en lieu et place des communes, et le montant de la diminution à opérer
        en application du 1.2.4.2 de l&apos;article 77 de la loi n° 2009-1673 du
        30 décembre 2009 de finances pour 2010 est supporté par l&apos;établissement,
        en lieu et place des communes, en application de l&apos;article L. 5211-28-1
        du présent code.
        <br />
        <br />
        <ExpandablePanelSubTitle
          subTitle="§4"
          title="Commune quittant un groupement à fiscalité professionnelle unique (FPU) cette année"
        />
        Lorsqu&apos;une commune cesse d&apos;appartenir à un groupement de communes
        faisant application des dispositions de l&apos;article 1609 nonies C du
        code général des impôts, le montant de la dotation forfaitaire perçue
        l&apos;année précédente est majoré d&apos;une part du montant perçu par le
        groupement au titre de la dotation de compensation prévue à l&apos;article L. 5211-28-1
        du présent code. Cette part est calculée en fonction du montant des bases
        de taxe professionnelle des communes de ce groupement ayant servi au calcul
        de la compensation prévue au I du D de l&apos;article 44 de la loi de finances
        pour 1999 précitée. Cette part est minorée, le cas échéant, en fonction de
        la part du prélèvement subi par le groupement en application du 1.2.4.2 de
        l&apos;article 77 de la loi n° 2009-1673 du 30 décembre 2009 de finances pour 2010,
        qui a été calculée à partir du produit de la taxe sur les surfaces commerciales
        de cette commune.
        <br />
      </Fragment>
    );
  }
}
