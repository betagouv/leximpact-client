import { PureComponent } from "react";

import styles from "./DotationParHab.module.scss";

interface Props {
  dotationParHab: number;
}

export class DotationParHab extends PureComponent<Props> {
  render() {
    const { dotationParHab } = this.props;
    return (
      <div className={styles.text}>
        {dotationParHab}
        <span> €/hab</span>
      </div>
    );
  }
}
