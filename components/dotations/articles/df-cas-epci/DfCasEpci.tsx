import { Fragment, PureComponent } from "react";

import { ExpandablePanelSubTitle, ExpandableText, ParameterValues } from "../../../common";

export class DfCasEpci extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        <ExpandablePanelSubTitle
          subTitle="§ 4"
          title="Communes adhérant  ou appartenant à un EPCI qui devient à fiscalité professionnelle unique (FPU) cette année."
        />
        Pour les communes membres d&apos;un établissement public de coopération
        intercommunale soumis pour la première fois aux dispositions de&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=16E8D98697B2DA85BF6D07E4A8EF48D0.tplgfr38s_3?idArticle=LEGIARTI000041731497&cidTexte=LEGITEXT000006069577&categorieLien=id"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article 1609 nonies C du code général des impôts
        </a>
        , le montant de
        la dotation forfaitaire perçue l&apos;année précédente est minoré d&apos;un
        montant égal aux crédits perçus en 2014 en application du I du D de&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichTexteArticle.do;jsessionid=D98BDF9FAF1BD9740A0AB439401BC420.tplgfr38s_3?idArticle=LEGIARTI000020627966&cidTexte=LEGITEXT000005627311"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article 44 de la loi de finances pour 1999 précitée
        </a>
        &nbsp;et indexé
        sur le taux d&apos;évolution de la dotation forfaitaire de chaque commune
        l&apos;année précédant la répartition. Ces crédits sont versés à l&apos;établissement,
        en lieu et place des communes, et le montant de la diminution à opérer
        en application du 1.2.4.2 de&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichTexteArticle.do;jsessionid=D98BDF9FAF1BD9740A0AB439401BC420.tplgfr38s_3?idArticle=LEGIARTI000041469395&cidTexte=JORFTEXT000021557902&categorieLien=id"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article 77 de la loi n° 2009-1673 du 30 décembre 2009 de finances pour 2010
        </a>
        &nbsp;est supporté par l&apos;établissement,
        en lieu et place des communes, en application de&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=16E8D98697B2DA85BF6D07E4A8EF48D0.tplgfr38s_3?idArticle=LEGIARTI000033879163&cidTexte=LEGITEXT000006070633&categorieLien=id"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article L. 5211-28-1 du présent code
        </a>
        .
        <br />
        <br />
        <ExpandablePanelSubTitle
          subTitle="§ 4"
          title="Commune quittant un groupement à fiscalité professionnelle unique (FPU) cette année"
        />
        Lorsqu&apos;une commune cesse d&apos;appartenir à un groupement de communes
        faisant application des dispositions de&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=16E8D98697B2DA85BF6D07E4A8EF48D0.tplgfr38s_3?idArticle=LEGIARTI000041731497&cidTexte=LEGITEXT000006069577&categorieLien=id"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article 1609 nonies C du code général des impôts
        </a>
        , le montant de la dotation forfaitaire perçue
        l&apos;année précédente est majoré d&apos;une part du montant perçu par le
        groupement au titre de la dotation de compensation prévue à&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033879163&cidTexte=LEGITEXT000006070633"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article L. 5211-28-1
        </a>
        &nbsp;du présent code. Cette part est calculée en fonction du montant des bases
        de taxe professionnelle des communes de ce groupement ayant servi au calcul
        de la compensation prévue au I du D de&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichTexteArticle.do;jsessionid=D98BDF9FAF1BD9740A0AB439401BC420.tplgfr38s_3?idArticle=LEGIARTI000020627966&cidTexte=LEGITEXT000005627311"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article 44 de la loi de finances pour 1999 précitée.
        </a>
        &nbsp;Cette part est minorée, le cas échéant, en fonction de
        la part du prélèvement subi par le groupement en application du 1.2.4.2 de&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichTexteArticle.do;jsessionid=D98BDF9FAF1BD9740A0AB439401BC420.tplgfr38s_3?idArticle=LEGIARTI000041469395&cidTexte=JORFTEXT000021557902&categorieLien=id"
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article 77 de la loi n° 2009-1673 du 30 décembre 2009 de finances pour 2010
        </a>
        ,
        qui a été calculée à partir du produit de la taxe sur les surfaces commerciales
        de cette commune.
        <br />
      </Fragment>
    );
  }
}
