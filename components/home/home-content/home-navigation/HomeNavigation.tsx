import Router from "next/router";
import { PureComponent } from "react";

import styles from "./HomeNavigation.module.scss";

export class HomeNavigation extends PureComponent {
  render() {
    return (
      <div className={styles.navigation}>
        <h1>
          Estimer les impacts
          <br />
          d&apos;une modification de la loi :
        </h1>
        <button type="button" onClick={() => Router.push("/ir")}>
          sur l&apos;impôt sur le revenu
        </button>
        <button type="button" onClick={() => Router.push("/dotations")}>
          sur les dotations aux collectivités territoriales
        </button>
      </div>
    );
  }
}
