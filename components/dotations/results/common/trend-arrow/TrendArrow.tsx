import { PureComponent } from "react";

import styles from "./TrendArrow.module.scss";

interface Props {
  value?: number;
}

export class TrendArrow extends PureComponent<Props> {
  render() {
    const { value } = this.props;
    if (value === undefined) {
      return <span className={styles.icon} />;
    }
    if (value > 0) {
      return <img alt="" className={styles.icon} src="/icons/picto-dotation-tendance-monte.svg" />;
    }
    if (value < 0) {
      return <img alt="" className={styles.icon} src="/icons/picto-dotation-tendance-baisse.svg" />;
    }
    return <span className={styles.icon}>-</span>;
  }
}
