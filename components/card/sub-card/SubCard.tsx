import { PureComponent, Fragment } from "react";

import styles from "./SubCard.module.scss";

interface Props {
  icon?: JSX.Element;
  title: string;
  subTitle?: string;
}

export class SubCard extends PureComponent<Props> {
  render() {
    const { children, icon, title, subTitle } = this.props;
    return (
      <Fragment>
        <div className={styles.header}>
          {icon && <div className={styles.icon}>{icon}</div>}
          <div className={styles.titles}>
            <div className={styles.title}>
              {title}
            </div>
            {subTitle && (
              <div className={styles.subTitle}>
                {subTitle}
              </div>
            )}
          </div>
        </div>
        <div>
          {children}
        </div>
      </Fragment>
    )
  }
}
