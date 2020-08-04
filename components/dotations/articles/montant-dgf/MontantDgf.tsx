import { Fragment, PureComponent } from "react";

import { ExpandableText, ParameterValues } from "../../../common";

export class MontantDgf extends PureComponent {
  render() {
    // Article L1613-1 du CGCT
    return (
      <Fragment>
        Le montant de la dotation globale de fonctionnement est fixé chaque année
        par la loi de finances.
        <br />
        <br />
        <ExpandableText
          caption="... Voir tous les montants depuis 2011"
        >
          En 2011, ce montant, égal à 41 307 701 000 €, est diminué de 42 844 000 € en
          application du II de l&apos;article 6 de la loi n° 2008-1443 du 30 décembre
          2008 de finances rectificative pour 2008 et du 1.2.4.2 et du II du 6 de
          l&apos;article 77 de la loi n° 2009-1673 du 30 décembre 2009 de finances pour 2010.
          <br />
          <br />
          En 2012, ce montant est égal à 41 389 752 000 €.
          <br />
          <br />
          En 2013, ce montant est égal à 41 505 415 000 €.
          <br />
          <br />
          En 2014, ce montant est égal à 40 121 044 000 €.
          <br />
          <br />
          En 2015, ce montant est égal à 36 607 053 000 €.
          <br />
          <br />
          En 2016, ce montant est égal à 33 221 814 000 €.
          <br />
          <br />
          En 2017, ce montant est égal à 30 860 013 000 €.
          <br />
          <br />
          En 2018, ce montant est égal à 26 960 322 000 €.
          <br />
          <br />
          En 2019, ce montant est égal à 26 948 048 000 €.
          <br />
          <br />
        </ExpandableText>
        <br />
        <br />
        En 2020, ce montant est égal à
        {" "}
        <ParameterValues
          editable
          amendementInputSize="xl"
          path="dotations.montants.dgf" />
        {" "}
        €.
      </Fragment>
    );
  }
}
