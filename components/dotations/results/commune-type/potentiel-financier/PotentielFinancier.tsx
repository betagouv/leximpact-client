import { PureComponent } from "react";

import styles from "./PotentielFinancier.module.scss";

interface Props {
  potentielFinancier: number;
}

export class PotentielFinancier extends PureComponent<Props> {
  render() {
    const { potentielFinancier } = this.props;
    return (
      <div className={styles.text}>
        {potentielFinancier}
        <span> € potentiel financier / hab</span>
      </div>
    );
  }
}
