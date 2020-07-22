import { PureComponent } from "react";

import styles from "./PotentielFinancier.module.scss";
import { formatNumber } from "../../../../utils";

interface Props {
  potentielFinancier: number;
}

export class PotentielFinancier extends PureComponent<Props> {
  render() {
    const { potentielFinancier } = this.props;
    return (
      <div className={styles.text}>
        {formatNumber(potentielFinancier, { decimals: 2 })}
        <span> € potentiel financier / hab</span>
      </div>
    );
  }
}
