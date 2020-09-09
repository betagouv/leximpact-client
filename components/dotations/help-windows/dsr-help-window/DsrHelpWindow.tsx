import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import { PureComponent } from "react";

import { HelpWindow } from "../../../common";
import styles from "./DsrHelpWindow.module.scss";

export class DsrHelpWindow extends PureComponent {
  render() {
    return (
      <HelpWindow name="dsr" title="Qu’est-ce que la dotation de solidarité rurale ?">
        <div className={styles.container}>
          La Dotation de Solidarité Rurale, estimée dans ce simulateur, reconnaissable
          sous le cigle “DSR” ou le symbole
          {" "}
          <LocalFloristIcon />
          , est une part de la dotation d’aménagement des communes.
          <br />
          <br />
          La DSR se divise en trois parts, dites fractions :
          <ul>
            <li>la première fraction, “bourg-centre” ;</li>
            <li>la seconde fraction, “de péréquation” ;</li>
            <li>la troisième fraction, “cible”.</li>
          </ul>
          Selon l’article L2334-20 du CGCT, elle a pour objet de “
          <em>
            tenir compte,
            d&apos;une part, des charges qu&apos;ils [les communes et chefs-lieux
            d’arrondissement éligibles] supportent pour contribuer au maintien de la
            vie sociale en milieu rural, d&apos;autre part, de l&apos;insuffisance de
            leurs ressources fiscales
          </em>
          ”.
          <br />
          <br />
          <img alt="DSR" src="/static/images/dsr.png" />
        </div>
      </HelpWindow>
    );
  }
}
