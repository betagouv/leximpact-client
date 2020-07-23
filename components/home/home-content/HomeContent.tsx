import { PureComponent } from "react";

import styles from "./HomeContent.module.scss";
import { HomeNavigation } from "./home-navigation";

export class HomeContent extends PureComponent {
  render() {
    return (
      <div className={styles.page}>
        <HomeNavigation />
      </div>
    )
  }
}