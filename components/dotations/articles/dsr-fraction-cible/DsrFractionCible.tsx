import { Fragment, PureComponent } from "react";

export class DsrFractionCible extends PureComponent {
  render() {
    // Article L2334-22-1 du CGCT
    return (
      <Fragment>
        La troisième fraction de la dotation de solidarité rurale est attribuée aux dix
        mille premières communes de moins de 10 000 habitants, parmi celles éligibles
        au moins à l&apos;une des deux premières fractions de la dotation de solidarité
        rurale, classées en fonction décroissante d&apos;un indice synthétique.
        <br />
        <br />
        Cet indice synthétique est fonction :
        <br />
        <br />
        a) Du rapport entre le potentiel financier par habitant moyen des communes appartenant
        au même groupe démographique et le potentiel financier par habitant de la commune ;
        <br />
        <br />
        b) Du rapport entre le revenu par habitant moyen des communes appartenant au même
        groupe démographique et le revenu par habitant de la commune. Le revenu pris en
        considération est le dernier revenu fiscal de référence connu. La population prise
        en compte est celle issue du dernier recensement de population.
        <br />
        <br />
        L&apos;indice synthétique est obtenu par addition des rapports définis aux a et b en
        pondérant le premier par 70 % et le deuxième par 30 %.
        <br />
        <br />
        Le montant attribué à ces communes au titre de cette fraction est calculé dans les
        conditions prévues à l&apos;article L. 2334-22.
        <br />
        <br />
        Lorsqu&apos;une commune cesse de remplir les conditions requises pour bénéficier de
        cette fraction de la dotation de solidarité rurale, cette commune perçoit, à titre
        de garantie non renouvelable, une attribution égale à la moitié de celle qu&apos;elle
        a perçue l&apos;année précédente.
        <br />
        <br />
        Les sommes nécessaires sont prélevées sur la fraction mentionnée au premier alinéa
        du présent article.
      </Fragment>
    );
  }
}
