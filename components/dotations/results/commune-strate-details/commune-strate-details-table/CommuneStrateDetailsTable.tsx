import { PureComponent, Fragment } from "react";

import styles from "./CommuneStrateDetailsTable.module.scss";
import { RootState } from "../../../../../redux/reducers";
import { connect, ConnectedProps } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import { ResultValues } from "../../../../articles-inputs/parameter";

const mapStateToProps = ({ results, descriptions }: RootState) => ({
  isFetching: results.amendement.dotations.isFetching ||
    results.base.dotations.isFetching ||
    results.plf.dotations.isFetching,
  strates: descriptions.dotations.strates,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {

}

class CommuneStrateDetailsTable extends PureComponent<Props> {
  render() {
    const { isFetching, strates } = this.props;
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
          {!isFetching && (
            <tbody>
              {
                strates.map((strate, index) => (
                  <tr key={strate.habitants}>
                    <th scope="row">
                      <div className={styles.lighter}>jusqu&apos;à</div>
                      {strate.habitants} h.
                    </th>
                    <td className={styles.light}>{strate.partPopTotale} %</td>
                    <td className={styles.light}>{strate.potentielFinancierMoyenParHab}</td>
                    <td>
                      <ResultValues
                        path={`dotations.state.communes.dsr.strates.${index}.eligibles`} />
                    </td>
                    <td>
                      <ResultValues
                        path={`dotations.state.communes.dsr.strates.${index}.dotationMoyenneParHab`} />
                    </td>
                    <td>
                      <ResultValues
                        path={`dotations.state.communes.dsr.strates.${index}.partDotationTotale`} />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          )}
        </table>
        {
          isFetching && <CircularProgress />
        }
      </div>
    );
  }
}

const ConnectedCommuneStrateDetailsTable = connector(CommuneStrateDetailsTable);

export { ConnectedCommuneStrateDetailsTable as CommuneStrateDetailsTable };
