import LocationCityIcon from "@material-ui/icons/LocationCity";
import { PureComponent } from "react";

import { HelpWindow } from "../../../common";
import styles from "./DsuHelpWindow.module.scss";

export class DsuHelpWindow extends PureComponent {
  render() {
    return (
      <HelpWindow name="dsu" title="Qu’est-ce que la dotation de solidarité urbaine et de cohésion sociale ?">
        <div className={styles.container}>
          La Dotation de Solidarité Urbaine et de cohésion sociale, estimée dans ce simulateur,
          reconnaissable sous le cigle “DSU” ou le symbole
          {" "}
          <LocationCityIcon />
          , est une part de la dotation d’aménagement des communes.
          <br />
          <br />
          Selon l’article L2334-15 du CGCT, elle “
          <em>
            a pour objet de contribuer à l&apos;amélioration
            des conditions de vie dans les communes urbaines confrontées à une insuffisance de
            leurs ressources et supportant des charges élevées.
          </em>
          ”.
          <br />
          <br />
          <img alt="DSU" src="/static/images/dsu.png" />
        </div>
      </HelpWindow>
    );
  }
}
