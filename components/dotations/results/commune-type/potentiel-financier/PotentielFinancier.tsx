import { Fragment, PureComponent } from "react";

import { formatNumber } from "../../../../common";
import styles from "./PotentielFinancier.module.scss";

interface Props {
  potentielFinancier: number;
}

export class PotentielFinancier extends PureComponent<Props> {
  render() {
    const { potentielFinancier } = this.props;
    return (
      <Fragment>
        <div>
          {new Array(Math.trunc(potentielFinancier / 1500) + 1).fill(true).map(() => (
            <img alt="" className={styles.icon} src="/icons/picto-potentiel-financier.png" />
          ))}
        </div>
        <div className={styles.text}>
          {formatNumber(potentielFinancier, { decimals: 2 })}
          <span> € potentiel financier / hab</span>
        </div>
      </Fragment>
    );
  }
}
