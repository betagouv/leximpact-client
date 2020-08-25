import { PureComponent } from "react";

import styles from "./HelpWindow.module.scss";

export class HelpWindow extends PureComponent<{}> {
  render() {
    const { children } = this.props;
    return <div className={styles.container}>{children}</div>;
  }
}
