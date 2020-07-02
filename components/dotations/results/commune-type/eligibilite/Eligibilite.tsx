import classNames from "classnames";
import { PureComponent } from "react";

import styles from "./Eligibilite.module.scss";

interface Props {
  eligible: boolean;
}

export class Eligibilite extends PureComponent<Props> {
  render() {
    const { eligible } = this.props;
    return (
      <div className={styles.container}>
        <div>
          {eligible ? "éligible" : "non éligible"}
        </div>
        <div className={classNames({
          [styles.spot]: true,
          [styles.eligible]: eligible,
        })} />
      </div>

    );
  }
}
