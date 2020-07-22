import { Fragment, PureComponent } from "react";

import { QfTable } from "./QfTable";
import styles from "./ReglesGenerales.module.scss";

export class ReglesGenerales extends PureComponent {
  render() {
    return (
      <Fragment>
        I. Le nombre de parts à prendre en considération pour la division du revenu
        imposable prévue à l&apos;article 193 est déterminé conformément aux dispositions
        suivantes :
        <div className={styles.table}>
          <QfTable />
        </div>
      </Fragment>
    );
  }
}
