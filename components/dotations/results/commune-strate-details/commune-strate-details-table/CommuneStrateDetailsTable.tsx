import CircularProgress from "@material-ui/core/CircularProgress";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
import { formatNumber, ResultValues } from "../../../../common";
import { TrendArrow } from "../../common";
import styles from "./CommuneStrateDetailsTable.module.scss";

const mapStateToProps = ({ descriptions, results }: RootState) => ({
  isFetching: results.amendement.dotations.isFetching
    || results.base.dotations.isFetching
    || results.plf.dotations.isFetching,
  strates: descriptions.dotations.strates.map((description, index) => ({
    baseToAmendement: results.baseToAmendement.dotations.state?.communes.dgf.strates[index],
    description,
  })),

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
              <th rowSpan={2} />
              <th colSpan={2}>
                Informations générales
                {/* <br />
                <span className={styles.link}>[replier ces colonnes]</span> */}
              </th>
              <th />
              <th rowSpan={2}>
                Proportion
                <br />
                de communes éligibles
              </th>
              <th rowSpan={2}>Dotation moyenne par habitant</th>
              <th rowSpan={2}>
                Répartition
                <br />
                de la dotation
              </th>
            </tr>
            <tr>
              <th>Proportion population par strate</th>
              <th>Potentiel financier moyen par hab.</th>
            </tr>
          </thead>
          {!isFetching && (
            <tbody className={styles.twolines}>
              {
                strates.map((strate, index) => (
                  <Fragment>
                    <tr key={strate.description.habitants * 2}>
                      <th rowSpan={2} scope="row">
                        {
                          strate.description.habitants === -1 ? (
                            <Fragment>
                              <div className={styles.lighter}>au-delà.</div>
                            </Fragment>
                          ) : (
                            <Fragment>
                              <div className={styles.lighter}>jusqu&apos;à</div>
                              {formatNumber(strate.description.habitants)}
                              {" "}
                              h.
                            </Fragment>
                          )
                        }

                      </th>
                      <td rowSpan={2}>
                        <TrendArrow value={strate.baseToAmendement?.diffDotationMoyenneParHab} />
                      </td>
                      <td className={styles.light} rowSpan={2}>
                        {formatNumber(strate.description.partPopTotale, { decimals: 0 })}
                        {" "}
                        %
                      </td>
                      <td className={styles.light} rowSpan={2}>
                        {formatNumber(
                          strate.description.potentielFinancierMoyenParHab,
                          { decimals: 0 },
                        )}
                        {" "}
                        €
                      </td>
                      <td>
                        <LocalFloristIcon />
                      </td>
                      <td>
                        <ResultValues
                          decimals={0}
                          path={`dotations.state.communes.dsr.strates.${index}.partEligibles`}
                          symbol="%" />
                      </td>
                      <td>
                        <ResultValues
                          decimals={2}
                          path={`dotations.state.communes.dsr.strates.${index}.dotationMoyenneParHab`}
                          symbol="€" />
                      </td>
                      <td>
                        <ResultValues
                          decimals={0}
                          path={`dotations.state.communes.dsr.strates.${index}.partDotationTotale`}
                          symbol="%" />
                      </td>
                    </tr>
                    <tr key={strate.description.habitants * 2 + 1}>
                      <td>
                        <LocationCityIcon />
                      </td>
                      <td>
                        <ResultValues
                          decimals={0}
                          path={`dotations.state.communes.dsu.strates.${index}.partEligibles`}
                          symbol="%" />
                      </td>
                      <td>
                        <ResultValues
                          decimals={2}
                          path={`dotations.state.communes.dsu.strates.${index}.dotationMoyenneParHab`}
                          symbol="€" />
                      </td>
                      <td>
                        <ResultValues
                          decimals={0}
                          path={`dotations.state.communes.dsu.strates.${index}.partDotationTotale`}
                          symbol="%" />
                      </td>
                    </tr>
                  </Fragment>
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
