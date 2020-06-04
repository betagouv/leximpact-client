import { PureComponent } from "react";

import articleStyle from "../../articles.module.scss";
import { QfTable } from "./QfTable";
import styles from "./ReglesGenerales.module.scss";

export class ReglesGenerales extends PureComponent {
  render() {
    return (
      <div className={articleStyle.text}>
        I. Le nombre de parts à prendre en considération pour la division du revenu
        imposable prévue à l&apos;article 193 est déterminé conformément aux dispositions
        suivantes :
        <div className={styles.table}>
          <QfTable />
        </div>
      </div>
    );
  }
}
