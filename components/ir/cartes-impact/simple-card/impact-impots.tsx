import CircularProgress from "@material-ui/core/CircularProgress";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import { formatNumber, ResultValues } from "../../../common";
import styles from "./impact-impots.module.scss";

interface Props {
  index: number;
}

const mapStateToProps = ({ results }: RootState, { index }: Props) => ({
  amendement: results.amendement.ir.state?.casTypes[index].impotAnnuel,
  base: results.base.ir.state?.casTypes[index].impotAnnuel,
  isFetching: results.base.ir.isFetching
    || results.plf.ir.isFetching
    || results.amendement.ir.isFetching,
  plf: results.plf.ir.state?.casTypes[index].impotAnnuel,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class SimpleCardImpactImpots extends PureComponent<PropsFromRedux & Props> {
  render() {
    const {
      amendement, base, index, isFetching, plf,
    } = this.props;

    const DiffAmendPLF = (-(amendement ?? NaN) + (base ?? NaN) > 0 ? "+" : "-")
      + formatNumber(Math.round(Math.abs(-(amendement ?? NaN) + (plf ?? NaN))));
    const DiffPlFCodeEx = (-(plf ?? NaN) + (base ?? NaN) > 0 ? "+" : "-")
      + formatNumber(Math.round(Math.abs(-(plf ?? NaN) + (base ?? NaN))));

    const plfTitle = (
      <Fragment>
        {"Avec le PLF, ce foyer doit "}
        <b>{`${DiffPlFCodeEx}€`}</b>
        {" d'impôts/an qu'avec le code existant"}
      </Fragment>
    );
    const amendementTitle = plf !== null ? (
      <Fragment>
        {"Avec mon amendement, ce foyer doit "}
        <b>{`${DiffAmendPLF}€`}</b>
        {" d'impôts/an qu'avec le PLF 2020"}
      </Fragment>
    ) : undefined;

    return isFetching ? <CircularProgress color="secondary" /> : (
      <div className={styles.container}>
        <div>
          <div className={styles.legend}>
            Impôt sur le revenu par an
          </div>
          <div className={styles.result}>
            <ResultValues
              amendementTitle={amendementTitle}
              path={`ir.state.casTypes.${index}.impotAnnuel`}
              plfTitle={plfTitle} />
            {" "}
            €
          </div>
        </div>
        <div>
          <div className={styles.legend}>Nbre de parts</div>
          <div className={styles.part}>
            <ResultValues path={`ir.state.casTypes.${index}.parts`} />
          </div>
        </div>
      </div>
    );
  }
}

export default connector(SimpleCardImpactImpots);
