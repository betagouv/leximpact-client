import { Fragment, PureComponent } from "react";

import { ExpandablePanelSubTitle, ExpandableText, ParameterValues } from "../../../common";

export class DfReglesGenerales extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        III. – À compter de 2015, la dotation forfaitaire de chaque commune
        est égale au montant perçu l&apos;année précédente au titre de cette dotation.
        <br />
        Pour chaque commune, cette dotation est majorée ou minorée du produit
        de la différence entre sa population constatée au titre de l&apos;année
        de répartition et celle constatée au titre de l&apos;année précédant la
        répartition par un montant compris entre !!!! 64,46 € !!!! et !!!! 128,93 € !!!! par
        habitant en fonction croissante de la population de la commune,
        dans des conditions définies par décret en Conseil d&apos;État.
        <br />
        <ExpandableText caption="En savoir plus sur la population prise en compte">
        La population de la commune prise en compte au titre de 2019 est celle
        définie à l&apos;article L. 2334-2 du présent code majorée de 0,5 habitant
        supplémentaire par résidence secondaire pour les communes dont la
        population est inférieure à 3 500 habitants, dont le potentiel fiscal
        par habitant est inférieur au potentiel fiscal moyen par habitant des
        communes appartenant à la même strate démographique et dont la part de
        la majoration au titre des résidences secondaires dans la population
        avant application de la présente disposition est supérieure à 30 %.
        Les années suivantes, cette majoration supplémentaire s&apos;applique à la fois
        à la population prise en compte au titre de l&apos;année précédente et à
        la population prise en compte au titre de l&apos;année de répartition.
        </ExpandableText>
        <br />
        <ExpandableText caption="En savoir plus sur le potentiel fiscal pris en compte">
        Le potentiel fiscal pris en compte pour l&apos;application du présent
        alinéa est celui calculé l&apos;année précédente en application de
        l&apos;article L. 2334-4.
        </ExpandableText>
        <br />
        <br />
        <ExpandableText caption="Alinéas caducs">
        En 2015, la dotation forfaitaire à prendre en compte pour l&apos;application
        du premier alinéa du présent III est égale au montant perçu en 2014
        au titre de cette dotation en application des I et II du présent article,
        diminué du montant de la minoration prévu à l&apos;article L. 2334-7-3 pour 2014
        calculé sans tenir compte des recettes exceptionnelles constatées dans
        les derniers comptes de gestion disponibles au 1er janvier 2014.
          <br />
          <br />
        En 2015, pour les communes qui, en 2014, ont subi un prélèvement sur leur
        fiscalité en application soit du dernier alinéa du II du présent article,
        soit du III de l&apos;article L. 2334-7-2, soit de l&apos;article L. 2334-7-3, soit
        du 2 du III de l&apos;article 29 de la loi de finances pour 2003
        (n° 2002-1575du 30 décembre 2002),
        la dotation forfaitaire à prendre en compte pour l&apos;application des dispositions
        précédentes est égale au montant effectivement reçu en 2014 au titre de
        la dotation forfaitaire, minoré du montant prélevé en 2014 sur la fiscalité.
        Si le montant prélevé en 2014 sur la fiscalité excède le montant perçu en 2014
        au titre de la dotation forfaitaire, la différence est prélevée,
        à compter de 2015, sur le produit des impôts directs locaux de la commune.
        </ExpandableText>
        <br />
        <br />
        <ExpandableText caption="En savoir plus sur le cas particulier des EPCI">
          <ExpandablePanelSubTitle
            subTitle="§4"
            title="Communes adhèrant  ou appartenant à un EPCI qui devient à fiscalité professionnelle unique (FPU) cette année."
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
            subTitle="§4"
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
          l&apos;article 44 de la loi de finances pour 1999 précitée
          </a>
        &nbsp;pour 1999 précitée. Cette part est minorée, le cas échéant, en fonction de
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
        </ExpandableText>

      </Fragment>
    );
  }
}
