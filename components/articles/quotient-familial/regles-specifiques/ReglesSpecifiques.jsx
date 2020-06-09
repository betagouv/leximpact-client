import { PureComponent } from "react";

import styles from "../../articles.module.scss";

export class ReglesSpecifiques extends PureComponent {
  render() {
    return (
      <div className={styles.text}>
        <h3>Enfants à charge partagée</h3>
        Lorsque les époux font l&apos;objet d&apos;une imposition séparée en application du 4
        de l&apos;article 6, chacun d&apos;eux est considéré comme un célibataire ayant à sa charge
        les enfants dont il assume à titre principal l&apos;entretien.
        Dans cette situation, ainsi qu&apos;en cas de divorce, de rupture du pacte civil
        de solidarité ou de toute séparation de fait de parents non mariés, l&apos;enfant
        est considéré, jusqu&apos;à preuve du contraire, comme étant à la charge du parent
        chez lequel il réside à titre principal.
        <br />
        En cas de résidence alternée au domicile de chacun des parents et sauf disposition contraire
        dans la convention de divorce mentionnée à l&apos;article 229-1 du code civil,
        la convention homologuée par le juge, la décision judiciaire ou, le cas échéant,
        l&apos;accord entre les parents, les enfants mineurs sont réputés être à la charge égale
        de l&apos;un et de l&apos;autre parent. Cette présomption peut être écartée s&apos;il
        est justifié que l&apos;un d&apos;entre eux assume la charge principale des enfants.
        <br />
        Lorsque les enfants sont réputés être à la charge égale de chacun des parents,
        ils ouvrent droit à une majoration de :
        <br />
        a) 0,25 part pour chacun des deux premiers et 0,5 part à compter du troisième,
        lorsque par ailleurs le contribuable n&apos;assume la charge exclusive ou principale
        d&apos;aucun enfant ;
        <br />
        b) 0,25 part pour le premier et 0,5 part à compter du deuxième, lorsque par ailleurs
        le contribuable assume la charge exclusive ou principale d&apos;un enfant ;
        <br />
        c) 0,5 part pour chacun des enfants, lorsque par ailleurs le contribuable assume
        la charge exclusive ou principale d&apos;au moins deux enfants.
        <br />
        Pour l&apos;application des dispositions du premier alinéa, sont assimilées
        à des enfants à charge les personnes considérées comme étant à la charge du contribuable
        en vertu de l&apos;article 196 A bis.
        <br />
        <h3>Parent isolé</h3>
        II. Pour l&apos;imposition des contribuables célibataires ou divorcés qui vivent seuls,
        le nombre de parts prévu au I est augmenté de 0,5 lorsqu&apos;ils supportent
        à titre exclusif ou principal la charge d&apos;au moins un enfant.
        Lorsqu&apos;ils entretiennent uniquement des enfants dont la charge est réputée également
        partagée avec l&apos;autre parent, la majoration est de 0,25 pour un seul enfant et de 0,5
        si les enfants sont au moins deux.
        Ces dispositions s&apos;appliquent nonobstant la perception éventuelle
        d&apos;une pension alimentaire versée en vertu d&apos;une convention de divorce
        par consentement mutuel déposée au rang des minutes d&apos;un notaire ou d&apos;une décision
        de justice pour l&apos;entretien desdits enfants.
      </div>
    );
  }
}
