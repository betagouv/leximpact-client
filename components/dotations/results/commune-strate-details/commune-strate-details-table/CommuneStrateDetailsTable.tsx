import { PureComponent } from "react";

import { Parameter } from "../../../../articles-inputs";
import styles from "./CommuneStrateDetailsTable.module.scss";

export class CommuneStrateDetailsTable extends PureComponent {
  render() {
    return (
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th rowSpan={2}>Strate démographique</th>
              <th colSpan={2}>
                Informations générales
                {/* <br />
                <span className={styles.link}>[replier ces colonnes]</span> */}
              </th>
              <th rowSpan={2}>Nombre de communes éligibles</th>
              <th rowSpan={2}>Dotation moyenne par habitant</th>
              <th rowSpan={2}>Répartition de la dotation</th>
            </tr>
            <tr>
              <th>Proportion population par strate</th>
              <th>Potentiel financier moyen par hab.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className={styles.lighter}>jusqu&apos;à</div>
                500 h.
              </th>
              <td className={styles.light}>6,4%</td>
              <td className={styles.light}>657</td>
              <td>
                <Parameter
                  amendementValue={1200}
                  baseValue={1201}
                  editable={false} />
              </td>
              <td>
                <Parameter
                  amendementValue={61}
                  baseValue={59}
                  editable={false} />
              </td>
              <td>
                <Parameter
                  amendementValue={35}
                  baseValue={36}
                  editable={false} />
              </td>
            </tr>
            <tr>
              <th scope="row">
                <div className={styles.lighter}>jusqu&apos;à</div>
                1000 h.
              </th>
              <td className={styles.light}>6,4%</td>
              <td className={styles.light}>657</td>
              <td>1200</td>
              <td>61</td>
              <td>36</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
