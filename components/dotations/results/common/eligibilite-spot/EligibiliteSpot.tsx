import classNames from "classnames";
import { PureComponent } from "react";

import styles from "./EligibiliteSpot.module.scss";

interface Props {
  eligible: boolean;
  small?: boolean;
}

export class EligibiliteSpot extends PureComponent<Props> {
  render() {
    const { eligible, small } = this.props;
    return (
      <div className={classNames({
        [styles.spot]: true,
        [styles.small]: !!small,
        [styles.eligible]: eligible,
      })} />
    );
  }
}
