import { Fragment, PureComponent } from "react";

import { ExpandablePanelSubTitle, ParameterValues } from "../../../common";
import styles from "./DsrFractionCible.module.scss";

export class DsrFractionCible extends PureComponent {
  render() {
    // Article L2334-22-1 du CGCT
    return (
      <Fragment>
        <ExpandablePanelSubTitle subTitle="§ 1 à 5" title="Éligibilité" />
        La troisième fraction de la dotation de solidarité rurale est attribuée aux [
        {" "}
        <ParameterValues
          editable
          path="dotations.communes.dsr.cible.eligibilite.premieresCommunes"
        />
        {" "}
        ] premières communes de moins de
        {" "}
        <ParameterValues
          path="dotations.communes.dsr.eligibilite.popMax"
        />
        {" "}
        habitants, parmi celles éligibles
        au moins à l&apos;une des deux premières fractions de la dotation de solidarité
        rurale, classées en fonction décroissante d&apos;un indice synthétique.
        <br />
        <br />
        Cet indice synthétique est fonction :
        <br />
        <br />
        <div className={styles.list1}>
        a) Du rapport entre le potentiel financier par habitant moyen des communes appartenant
        au même groupe démographique et le potentiel financier par habitant de la commune ;
          <br />
          <br />
        b) Du rapport entre le revenu par habitant moyen des communes appartenant au même
        groupe démographique et le revenu par habitant de la commune. Le revenu pris en
        considération est le dernier revenu fiscal de référence connu. La population prise
        en compte est celle issue du dernier recensement de population.
        </div>
        <br />
        <br />
        L&apos;indice synthétique est obtenu par addition des rapports définis aux a et b en
        pondérant le premier par
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="dotations.communes.dsr.cible.eligibilite.indiceSynthetique.ponderationPotentielFinancier"
          symbol="%"
        />
        {" "}
        et le deuxième par
        {" "}
        <ParameterValues
          editable
          amendementInputSize="small"
          path="dotations.communes.dsr.cible.eligibilite.indiceSynthetique.ponderationRevenu"
          symbol="%"
        />
        .
        <br />
        <br />
        <ExpandablePanelSubTitle subTitle="§ 6" title="Répartition" />
        Le montant attribué à ces communes au titre de cette fraction est calculé dans les
        conditions prévues à&nbsp;
        <a
          href="https://www.legifrance.gouv.fr/affichCodeArticle.do;jsessionid=77D4545E5B93968FCA804A193A0C9A54.tplgfr38s_3?idArticle=LEGIARTI000036433094&cidTexte=LEGITEXT000006070633&categorieLien=id&dateTexte="
          rel="noopener noreferrer"
          target="_blank"
        >
          l&apos;article L. 2334-22
        </a>
.
        <br />
        <br />
        <ExpandablePanelSubTitle subTitle="§ 7 à 8" title="Garanties de sortie d'éligibilité" />
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
