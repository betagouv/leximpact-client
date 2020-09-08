import { PureComponent } from "react";

import { HelpWindow } from "../../../common";
import styles from "./TrendHelpWindow.module.scss";

export class TrendHelpWindow extends PureComponent {
  render() {
    return (
      <HelpWindow name="trend" title="Comment est définie la tendance ?">
        <div className={styles.container}>
          Cet indicateur vous permet de visualiser la tendance de l’impact
          sur les dotations de l’entité concernée (commune, strate démographique
          de communes ...).
          <br />
          <br />
          Nous affichons cette tendance en suivant les règles suivantes :
          <ul>
            <li>
              quand l’impact est positif, la tendance est à la hausse
              {" "}
              <img alt="" className={styles.icon} src="/icons/picto-dotation-tendance-monte.svg" />
              {" "}
              ;
              quand l’impact est négatif, la tendance est à la baisse
              {" "}
              <img alt="" className={styles.icon} src="/icons/picto-dotation-tendance-baisse.svg" />
              {" "}
              ;
              quelque soit l’amplitude de l’impact.
            </li>
            <li>
              quand il n’y a pas d’impact, il est indiqué “Pas d’évolution”.
              Ce cas intervient lorsque que les montants avant et après impact sont
              {" "}
              <em>strico sensu</em>
              {" "}
              identiques.
            </li>
          </ul>
        </div>
      </HelpWindow>
    );
  }
}
