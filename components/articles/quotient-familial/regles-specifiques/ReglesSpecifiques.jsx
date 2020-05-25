import { PureComponent } from "react";

import styles from "../../articles.module.scss";

export class ReglesSpecifiques extends PureComponent {
  render() {
    return (
      <div className={styles.text}>
        <h3>Enfants à charge partagée</h3>
        Lorsque les époux font l'objet d'une imposition séparée en application du 4 de l'article 6, chacun d'eux est considéré comme un célibataire ayant à sa charge les enfants dont il assume à titre principal l'entretien. Dans cette situation, ainsi qu'en cas de divorce, de rupture du pacte civil de solidarité ou de toute séparation de fait de parents non mariés, l'enfant est considéré, jusqu'à preuve du contraire, comme étant à la charge du parent chez lequel il réside à titre principal.
        <br />
        En cas de résidence alternée au domicile de chacun des parents et sauf disposition contraire dans la convention de divorce mentionnée à l'article 229-1 du code civil, la convention homologuée par le juge, la décision judiciaire ou, le cas échéant, l'accord entre les parents, les enfants mineurs sont réputés être à la charge égale de l'un et de l'autre parent. Cette présomption peut être écartée s'il est justifié que l'un d'entre eux assume la charge principale des enfants.
        <br />
        Lorsque les enfants sont réputés être à la charge égale de chacun des parents, ils ouvrent droit à une majoration de :
        <br />
        a) 0,25 part pour chacun des deux premiers et 0,5 part à compter du troisième, lorsque par ailleurs le contribuable n'assume la charge exclusive ou principale d'aucun enfant ;
        <br />
        b) 0,25 part pour le premier et 0,5 part à compter du deuxième, lorsque par ailleurs le contribuable assume la charge exclusive ou principale d'un enfant ;
        <br />
        c) 0,5 part pour chacun des enfants, lorsque par ailleurs le contribuable assume la charge exclusive ou principale d'au moins deux enfants.
        <br />
        Pour l'application des dispositions du premier alinéa, sont assimilées à des enfants à charge les personnes considérées comme étant à la charge du contribuable en vertu de l'article 196 A bis.
        <br />
        <h3>Parent isolé</h3>
        II. Pour l'imposition des contribuables célibataires ou divorcés qui vivent seuls, le nombre de parts prévu au I est augmenté de 0,5 lorsqu'ils supportent à titre exclusif ou principal la charge d'au moins un enfant. Lorsqu'ils entretiennent uniquement des enfants dont la charge est réputée également partagée avec l'autre parent, la majoration est de 0,25 pour un seul enfant et de 0,5 si les enfants sont au moins deux. Ces dispositions s'appliquent nonobstant la perception éventuelle d'une pension alimentaire versée en vertu d'une convention de divorce par consentement mutuel déposée au rang des minutes d'un notaire ou d'une décision de justice pour l'entretien desdits enfants.
      </div>
    );
  }
}
