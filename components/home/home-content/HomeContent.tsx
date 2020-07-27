import { Fragment, PureComponent } from "react";

import { EnSavoirPlus } from "./en-savoir-plus";
import { HomeNavigation } from "./home-navigation";
import styles from "./HomeContent.module.scss";

export class HomeContent extends PureComponent {
  render() {
    return (
      <Fragment>
        <div className={styles.page}>
          <HomeNavigation />
        </div>
        <EnSavoirPlus />
      </Fragment>
    );
  }
}
