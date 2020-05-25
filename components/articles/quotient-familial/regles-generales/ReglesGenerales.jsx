import { PureComponent } from "react";

import styles from "../../articles.module.scss";

export class ReglesGenerales extends PureComponent {
  render() {
    return (
      <div className={styles.text}>
        I. Le nombre de parts à prendre en considération pour la division du revenu imposable prévue à l'article 193 est déterminé conformément aux dispositions suivantes :
        <br />
        [Tableau]
      </div>
    );
  }
}
