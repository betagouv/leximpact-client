import { PureComponent } from "react";

import styles from "./HabitantLabel.module.scss";
import { formatNumber } from "../../../../common";

interface Props {
  habitants: number;
}

export class HabitantLabel extends PureComponent<Props> {
  render() {
    const { habitants } = this.props;
    return (
      <span className={styles.label}>
        {formatNumber(habitants)}
        <span> hab.</span>
      </span>
    );
  }
}
