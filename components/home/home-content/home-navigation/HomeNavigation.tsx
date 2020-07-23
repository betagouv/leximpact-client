import { PureComponent } from "react";
import Router from 'next/router';

import styles from "./HomeNavigation.module.scss";

export class HomeNavigation extends PureComponent {
  render() {
    return (
      <div className={styles.navigation}>
        <h1>Estimer les impacts <br/> d'une modification de la loi :</h1>
        <button onClick={() => Router.push('/')}> sur l'impôt sur le revenu</button>
        <button onClick={() => Router.push('/dotations')}> sur les dotations aux collectivités territoriales</button>
      </div>
    )
  }
}