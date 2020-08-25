import { Fragment, PureComponent } from "react";

import { formatNumber, HelpButton } from "../../../../common";
import styles from "./PotentielFinancier.module.scss";

interface Props {
  potentielFinancier: number;
}

export class PotentielFinancier extends PureComponent<Props> {
  render() {
    const { potentielFinancier } = this.props;
    return (
      <Fragment>
        <div className={styles.legend}>
          Potentiel financier
        </div>
        <div>
          <span className={styles.text}>
            {formatNumber(potentielFinancier, { decimals: 0 })}
            <span> € /hab.</span>
          </span>
          <HelpButton name="potentiel financier" />
        </div>
        <div>
          {new Array(Math.trunc(potentielFinancier / 1500) + 1).fill(true).map(() => (
            <img alt="" className={styles.icon} src="/icons/picto-potentiel-financier.png" />
          ))}
        </div>
      </Fragment>
    );
  }
}
