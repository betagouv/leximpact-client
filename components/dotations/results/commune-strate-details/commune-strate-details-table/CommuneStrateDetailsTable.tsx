import CircularProgress from "@material-ui/core/CircularProgress";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
import { ResultValues } from "../../../../articles-inputs/parameter";
import { formatNumber } from "../../../../utils";
import styles from "./CommuneStrateDetailsTable.module.scss";

const mapStateToProps = ({ descriptions, results }: RootState) => ({
  isFetching: results.amendement.dotations.isFetching
    || results.base.dotations.isFetching
    || results.plf.dotations.isFetching,
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
                      {
                        strate.habitants === -1 ? (
                          <Fragment>
                            <div className={styles.lighter}>au-delà.</div>
                          </Fragment>
                        ) : (
                          <Fragment>
                            <div className={styles.lighter}>jusqu&apos;à</div>
                            {strate.habitants}
                            {" "}
                            h.
                          </Fragment>
                        )
                      }

                    </th>
                    <td className={styles.light}>
                      {formatNumber(strate.partPopTotale, { decimals: 0 })}
                      {" "}
                      %
                    </td>
                    <td className={styles.light}>
                      {formatNumber(strate.potentielFinancierMoyenParHab, { decimals: 2 })}
                    </td>
                    <td>
                      <ResultValues
                        path={`dotations.state.communes.dsr.strates.${index}.eligibles`} />
                    </td>
                    <td>
                      <ResultValues
                        decimals={2}
                        path={`dotations.state.communes.dsr.strates.${index}.dotationMoyenneParHab`} />
                    </td>
                    <td>
                      <ResultValues
                        decimals={0}
                        path={`dotations.state.communes.dsr.strates.${index}.partDotationTotale`} />
                      {" "}
                      %
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
