import { PureComponent } from "react";

import { HelpWindow } from "../../../common";
import styles from "./MontantsDsrHelpWindow.module.scss";

export class MontantsDsrHelpWindow extends PureComponent {
  render() {
    return (
      <HelpWindow name="montants dsr" title="Pourquoi deux montants sont-ils donnés en résultat pour la DSR ?">
        <div className={styles.container}>
          La dotation de solidarité rurale
          {" "}
          <strong>comprend un système de garanties</strong>
          . Ainsi,
          une commune qui perd sa DSR,
          {" "}
          <strong>hérite en réalité d’une trajectoire</strong>
          {" "}
          de baisse
          jusqu’à zéro sur plusieurs années. De même, une commune qui a une forte
          hausse de sa DSR, voit sa DSR progresser sur plusieurs années.
          <br />
          <br />
          Ces garanties sont exposés aux alinéas 15 à 18 de l’Article L2334-21, et
          aux alinéas 8 à 9 de l’Article L2334- 22. La loi indique que l’attribution
          “
          <em>
            ne peut être ni inférieure à 90 % ni supérieure à 120 % du montant perçu
            l&apos;année précédente.
          </em>
          ”
        </div>
      </HelpWindow>
    );
  }
}
