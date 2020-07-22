import { PureComponent } from "react";

import styles from "./ExpandablePanelSubTitle.module.scss";

interface Props {
  title: string;
  subTitle: string;
}

export class ExpandablePanelSubTitle extends PureComponent<Props> {
  render() {
    const { subTitle, title } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.text}>
          <span className={styles.title}>{title}</span>
          <span className={styles.subTitle}>
            {" "}
            -
            {" "}
            {subTitle}
          </span>
        </div>
      </div>
    );
  }
}
