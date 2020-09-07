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
          . Ainsi, une commune qui a une forte diminution de sa dotation, hérite
          en réalité d’une trajectoire de baisse sur plusieurs années. De même,
          une commune qui a une forte hausse de sa DSR, voit sa dotation progresser
          sur plusieurs années.
          <br />
          <br />
          Ces garanties sont exposés à l’alinéa 18 de l’Article L2334-21 et à
          l’alinéa 9 de l’Article L2334- 22. La loi indique que l’attribution
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
