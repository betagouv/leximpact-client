import { Part } from "interfaces";
import { PureComponent } from "react";

import articleStyle from "../../articles.module.scss";
import { QfTable } from "./QfTable";
import styles from "./ReglesGenerales.module.scss";

const PARTS_MOCK: Part[] = [
  {
    celibataire: 1,
    divorce: 1,
    mariesOuPacses: 2,
    veuf: 1,
  },
  {
    celibataire: 1.5,
    divorce: 1.5,
    mariesOuPacses: 2.5,
    veuf: 2.5,
  },
  {
    celibataire: 2,
    divorce: 2,
    mariesOuPacses: 3,
    veuf: 3,
  },
];

export class ReglesGenerales extends PureComponent {
  render() {
    return (
      <div className={articleStyle.text}>
        I. Le nombre de parts à prendre en considération pour la division du revenu
        imposable prévue à l&apos;article 193 est déterminé conformément aux dispositions
        suivantes :
        <div className={styles.table}>
          <QfTable parts={PARTS_MOCK} />
        </div>
      </div>
    );
  }
}
