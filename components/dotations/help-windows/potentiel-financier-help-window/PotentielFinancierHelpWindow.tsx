import { PureComponent } from "react";

import { HelpWindow } from "../../../common";
import styles from "./PotentielFinancierHelpWindow.module.scss";

export class PotentielFinancierHelpWindow extends PureComponent {
  render() {
    return (
      <HelpWindow name="potentiel financier" title="Qu’est-ce que le potentiel financier ?">
        <div className={styles.container}>
          Le potentiel financier est un
          {" "}
          <strong>
          indicateur des ressources d&apos;une collectivité locale
          </strong>
          . Celui-ci rend compte des différentes richesses
          perçues par la commune sur son territoire.
          <br />
          <br />
          Le potentiel financier se calcule par rapport à la population dite DGF,
          en prenant en compte :
          <ul>
            <li>les revenus des impôts locaux des ménages ; </li>
            <li>les revenus des impôts locaux des entreprises ; </li>
            <li>la dotation forfaitaire de la commune ;</li>
            <li>les sommes perçues au travers de l&apos;EPCI pour les communes concernées.</li>
          </ul>
          <br />
          L&apos;indicateur peut être donné pour la commune, ou rapporté à son nombre
          d&apos;habitants, comme nous le faisons sur LexImpact. Par exemple, la commune
          de XXXX à un potentiel financier de XXXX €, ce qui représente un potentiel
          financier par habitant de XXX €.
          <br />
          <br />
          <em>
            Cette explication est volontairement simplifiée. Pour toute référence exacte,
            il faut vous fier uniquement au Code Général des Collectivités Territoriales,
            et/ou aux écrits de la DGCL.
          </em>
        </div>
      </HelpWindow>
    );
  }
}
