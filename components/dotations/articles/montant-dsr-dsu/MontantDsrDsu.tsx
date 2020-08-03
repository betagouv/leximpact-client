import { Fragment, PureComponent } from "react";

import { ExpandablePanelSubTitle, ExpandableText } from "../../../common";

export class MontantDsrDsu extends PureComponent {
  render() {
    // Article L2334-1 du CGCT
    return (
      <Fragment>
        <ExpandableText caption="Lire le début de l'article définissant la dotation d'aménagement">
          Il est institué une dotation d&apos;aménagement qui regroupe une dotation au bénéfice
          des groupements de communes, une dotation nationale de péréquation, une dotation de
          solidarité urbaine et de cohésion sociale, une dotation de solidarité rurale,
          une dotation d&apos;amorçage en faveur des communes nouvelles et une dotation
          de compétences intercommunales.
          <br />
          <br />
          Le montant de la dotation d&apos;aménagement
          est égal à la différence entre l&apos;ensemble des ressources affectées
          à la dotation globale de fonctionnement des communes et l&apos;ensemble
          formé par la dotation forfaitaire prévue à l&apos;article L. 2334-7
          et la dotation forfaitaire des communes nouvelles prévue à l&apos;article L. 2113-20.
          <br />
          <br />
          Après prélèvement de la dotation d&apos;intercommunalité prévue aux articles L. 5211-28 et
          L. 5842-8, de la dotation de compensation prévue à l&apos;article L. 5211-28-1,
          de la quote-part destinée aux communes d&apos;outre-mer prévue
          à l&apos;article L. 2334-23-1,
          de la dotation d&apos;amorçage en faveur des communes nouvelles et de la dotation
          de compétences intercommunales, le solde de la dotation d&apos;aménagement est réparti
          entre la dotation nationale de péréquation, la dotation de solidarité urbaine
          et de cohésion sociale, la dotation de solidarité rurale et la dotation
          nationale de péréquation.
        </ExpandableText>
        <br />
        <br />
        <ExpandablePanelSubTitle
          subTitle="§ 3 à 6"
          title="Variation annuelle de la DSR et de la DSU" />
        À compter de 2004, la variation annuelle du solde de la dotation d&apos;aménagement
        est répartie par le comité des finances locales
        {" "}
        <ExpandableText>
        entre la dotation nationale de péréquation, la dotation de solidarité urbaine
        et de cohésion sociale et la dotation de solidarité rurale,
        ainsi qu&apos;entre les différentes parts ou fractions de ces dotations,
        quand elles existent.
        </ExpandableText>
        <br />
        En 2020, les montants mis en répartition au titre de la dotation de solidarité urbaine
        et de cohésion sociale et de la dotation de solidarité rurale augmentent au moins de
        90 millions d&apos;euros chacun par rapport aux montants mis en répartition en 2019.
        Cette augmentation est financée par les minorations prévues à l&apos;article L. 2334-7-1.
        <br />
        <br />
        BOUTON Ajouter une majoration DSR/DSU en 2021
        <br />
        <br />
        BOUTON Ajouter une minoration DSR/DSU en 2021
        <br />
        <br />
        À compter de 2012,
        {" "}
        <ExpandableText caption="paragraphe caduc">
        le montant mis en répartition au titre de la dotation
        nationale de péréquation est au moins égal à celui
        mis en répartition l&apos;année précédente.
        </ExpandableText>
        <br />
        <br />
        Le comité des finances locales peut majorer le montant des dotations mentionnées
        au présent article, en compensant les majorations correspondantes dans
        les conditions prévues à l&apos;article L. 2334-7-1.
      </Fragment>
    );
  }
}
