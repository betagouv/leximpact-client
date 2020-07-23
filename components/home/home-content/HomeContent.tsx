import { PureComponent } from "react";

import { HomeNavigation } from "./home-navigation";
import styles from "./HomeContent.module.scss";

export class HomeContent extends PureComponent {
  render() {
    return (
      <div className={styles.page}>
        <HomeNavigation />
      </div>
    );
  }
}
