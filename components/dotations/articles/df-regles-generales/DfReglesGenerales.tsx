import { Fragment, PureComponent } from "react";

import { ExpandableText, ParameterValues } from "../../../common";

export class DfReglesGenerales extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        III. – À compter de 2015, la dotation forfaitaire de chaque commune
        est égale au montant perçu l&apos;année précédente au titre de cette dotation.
        Pour chaque commune, cette dotation est majorée ou minorée du produit
        de la différence entre sa population constatée au titre de l&apos;année
        de répartition et celle constatée au titre de l&apos;année précédant la
        répartition par un montant compris entre 64,46 € et 128,93 € par
        habitant en fonction croissante de la population de la commune,
        dans des conditions définies par décret en Conseil d&apos;État.
        <br />
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
        <ExpandableText caption="Alinéas caducs">
        En 2015, la dotation forfaitaire à prendre en compte pour l&apos;application
        du premier alinéa du présent III est égale au montant perçu en 2014
        au titre de cette dotation en application des I et II du présent article,
        diminué du montant de la minoration prévu à l&apos;article L. 2334-7-3 pour 2014
        calculé sans tenir compte des recettes exceptionnelles constatées dans
        les derniers comptes de gestion disponibles au 1er janvier 2014.
        En 2015, pour les communes qui, en 2014, ont subi un prélèvement sur leur
        fiscalité en application soit du dernier alinéa du II du présent article,
        soit du III de l&apos;article L. 2334-7-2, soit de l&apos;article L. 2334-7-3, soit
        du 2 du III de l&apos;article 29 de la loi de finances pour 2003 (n° 2002-1575du 30 décembre 2002),
        la dotation forfaitaire à prendre en compte pour l&apos;application des dispositions
        précédentes est égale au montant effectivement reçu en 2014 au titre de
        la dotation forfaitaire, minoré du montant prélevé en 2014 sur la fiscalité.
        Si le montant prélevé en 2014 sur la fiscalité excède le montant perçu en 2014
        au titre de la dotation forfaitaire, la différence est prélevée,
        à compter de 2015, sur le produit des impôts directs locaux de la commune.
        </ExpandableText>
      </Fragment>
    );
  }
}
