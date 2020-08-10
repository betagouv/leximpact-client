import { Fragment, PureComponent } from "react";

import { ExpandablePanelSubTitle, ExpandableText, ParameterValues } from "../../../common";

export class DfEcretementPereque extends PureComponent {
  render() {
    // Article L2334-20 du CGCT
    return (
      <Fragment>
        <ExpandablePanelSubTitle
          subTitle="§5"
          title="Communes concernées"
        />
        À compter de 2015, les communes dont le potentiel fiscal par habitant
        est inférieur à 0,75 fois le potentiel fiscal moyen par habitant constaté
        pour l&apos;ensemble des communes bénéficient d&apos;une attribution au titre de la
        dotation forfaitaire égale à celle calculée en application du présent III.
        <br />
        <br />
        Pour les communes dont le potentiel fiscal par habitant est supérieur ou
        égal à 0,75 fois le potentiel fiscal moyen par habitant constaté pour
        l&apos;ensemble des communes, le montant calculé en application du premier alinéa
        du présent III est diminué, dans les conditions prévues à l&apos;article L. 2334-7-1,
        en proportion de leur population et de l&apos;écart relatif entre le potentiel fiscal
        par habitant de la commune et 0,75 fois le potentiel fiscal moyen par habitant
        constaté pour l&apos;ensemble des communes.
        <br />
        <br />
        <ExpandablePanelSubTitle
          subTitle="§5"
          title="Conditions d&apos;application"
        />
        Cette minoration ne peut être supérieure à 1 % des recettes réelles de
        fonctionnement de leur budget principal, minorées des atténuations de produits,
        des recettes exceptionnelles et du produit des mises à disposition de personnels
        facturées dans le cadre d&apos;une mutualisation de services entre
        l&apos;établissement public de coopération intercommunale à fiscalité propre et ses
        communes membres, telles que constatées au 1er janvier de l&apos;année de répartition
        dans les derniers comptes de gestion disponibles.
        <br />
        <br />
        Pour les communes membres de la métropole du Grand Paris,&nbsp;
        <ExpandableText>
        les recettes réelles de fonctionnement sont en outre diminuées
        d&apos;un montant correspondant à la dotation individuelle versée au fonds de
        compensation des charges territoriales en application du H du XV de
        l&apos;article 59 de la loi n° 2015-991 du 7 août 2015 portant nouvelle organisation
        territoriale de la République, telle que constatée au 1er janvier de
        l&apos;année de répartition dans les derniers comptes de gestion disponibles.
        Cette minoration ne peut excéder le montant de la dotation forfaitaire calculée
        en application du présent III.
        </ExpandableText>
        <br />
        <br />
        <ExpandableText caption="Définition des éléments pris en compte">
        Pour les communes concernées l&apos;année de répartition par les dispositions
        de l&apos;avant-dernier alinéa du présent III, la dotation forfaitaire prise en compte
        pour l&apos;application de cette minoration est la dotation forfaitaire perçue
        l&apos;année précédente après application du même alinéa. Le potentiel fiscal pris en
        compte pour l&apos;application du présent alinéa est celui calculé l&apos;année précédente
        en application de l&apos;article L. 2334-4. La population prise en compte pour la
        détermination du potentiel fiscal par habitant est corrigée par un coefficient
        logarithmique dont la valeur varie de 1 à 2 en fonction croissante de la population de
        la commune, défini pour l&apos;application du présent III.
        </ExpandableText>
      </Fragment>
    );
  }
}
