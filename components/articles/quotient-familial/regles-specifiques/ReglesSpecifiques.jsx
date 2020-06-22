import { PureComponent } from "react";

import { StateParameter } from "../../../articles-inputs/parameter";
import styles from "../../articles.module.scss";
import { ExpandableText } from "../../expandable-panels";

export class ReglesSpecifiques extends PureComponent {
  render() {
    return (
      <div className={styles.text}>
        <h3>Enfants à charge partagée</h3>
        <ExpandableText caption="Lorsque les époux font l'objet d'une imposition séparée">
        Lorsque les époux font l&apos;objet d&apos;une imposition séparée en application du 4 de
        l&apos;article 6, chacun d&apos;eux est considéré comme un célibataire ayant à sa charge
        les enfants dont il assume à titre principal l&apos;entretien. Dans cette situation, ainsi
        qu&apos;en cas de divorce, de rupture du pacte civil de solidarité ou de toute séparation
        de fait de parents non mariés, l&apos;enfant est considéré, jusqu&apos;à preuve du
        contraire,  comme étant à la charge du parent chez lequel il réside à titre principal.
        </ExpandableText>
        <br />
        <br />
        <ExpandableText caption="En cas de résidence alternée au domicile">
        En cas de résidence alternée au domicile de chacun des parents et sauf disposition contraire
        dans la convention de divorce mentionnée à l&apos;article 229-1 du code civil, la convention
        homologuée par le juge, la décision judiciaire ou, le cas échéant, l&apos;accord entre les
        parents, les enfants mineurs sont réputés être à la charge égale de l&apos;un et de
        l&apos;autre parent. Cette présomption peut être écartée s&apos;il est justifié que
        l&apos;un d&apos;entre eux assume la charge principale des enfants.
        </ExpandableText>
        <br />
        <br />
        Lorsque les enfants sont réputés être à la charge égale de chacun des parents, ils ouvrent
        droit à une majoration de :
        <br />
        <br />
        a)
        <StateParameter
          editable
          amendementInputSize="small"
          path="impot_revenu.calculNombreParts.partsParPACChargePartagee.zeroChargePrincipale.deuxPremiers"
        />
        part pour chacun des deux premiers et
        <StateParameter
          editable
          amendementInputSize="small"
          path="impot_revenu.calculNombreParts.partsParPACChargePartagee.zeroChargePrincipale.suivants"
        />
        part à compter du troisième, lorsque par ailleurs le contribuable n&apos;assume la charge
        exclusive ou principale d&apos;aucun enfant ;
        <br />
        <br />
        b)
        <StateParameter
          editable
          amendementInputSize="small"
          path="impot_revenu.calculNombreParts.partsParPACChargePartagee.unChargePrincipale.premier"
        />
        part pour le premier et
        <StateParameter
          editable
          amendementInputSize="small"
          path="impot_revenu.calculNombreParts.partsParPACChargePartagee.unChargePrincipale.suivants"
        />
        part à compter du deuxième, lorsque par ailleurs le contribuable assume la charge exclusive
        ou principale d&apos;un enfant ;
        <br />
        <br />
        c)
        <StateParameter
          editable
          amendementInputSize="small"
          path="impot_revenu.calculNombreParts.partsParPACChargePartagee.deuxOuPlusChargePrincipale.suivants"
        />
        part pour chacun des enfants, lorsque par ailleurs le contribuable assume la charge
        exclusive ou principale d&apos;au moins deux enfants.
        <br />
        <br />
        <ExpandableText caption="Pour l'application des dispositions">
        Pour l&apos;application des dispositions du premier alinéa, sont assimilées à des enfants
        à charge les personnes considérées comme étant à la charge du contribuable en vertu de
        l&apos;article 196 A bis.
        </ExpandableText>
        <h3>Parent isolé</h3>
        II. Pour l&apos;imposition des contribuables célibataires ou divorcés qui vivent seuls,
        le nombre de parts prévu au I est augmenté de
        <StateParameter
          editable
          amendementInputSize="small"
          path="impot_revenu.calculNombreParts.bonusParentIsole.auMoinsUnChargePrincipale"
        />
        lorsqu&apos;ils supportent à titre exclusif ou principal la charge d&apos;au moins un
        enfant.Lorsqu&apos;ils entretiennent uniquement des enfants dont la charge est réputée
        également partagée avec l&apos;autre parent, la majoration est de
        <StateParameter
          editable
          amendementInputSize="small"
          path="impot_revenu.calculNombreParts.bonusParentIsole.zeroChargePrincipaleUnPartage"
        />
        pour un seul enfant et de
        <StateParameter
          editable
          amendementInputSize="small"
          path="impot_revenu.calculNombreParts.bonusParentIsole.zeroChargeprincipaleDeuxOuPlusPartage"
        />
        si les enfants sont au moins deux. Ces dispositions s&apos;appliquent nonobstant la
        perception éventuelle d&apos;une pension alimentaire versée en vertu d&apos;une
        convention de divorce par consentement mutuel déposée au rang des minutes d&apos;un
        notaire ou d&apos;une décision de justice pour l&apos;entretien desdits enfants.
      </div>
    );
  }
}
