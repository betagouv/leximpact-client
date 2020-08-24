import CircularProgress from "@material-ui/core/CircularProgress";
import { Fragment, PureComponent } from "react";

import { formatNumber, Values } from "../../../common";
import styles from "./impact-impots.module.scss";

interface Props {
  isLoading: boolean;
  resultats: {
    apres: number;
    avant: number;
    plf?: number|null;
  }
}

class SimpleCardImpactImpots extends PureComponent<Props> {
  render() {
    const { isLoading, resultats } = this.props;

    const DiffAmendPLF = (-resultats.apres + resultats.avant > 0 ? "+" : "-")
      + formatNumber(Math.round(Math.abs(-resultats.apres + (resultats.plf || NaN))));
    const DiffPlFCodeEx = (-(resultats.plf || NaN) + resultats.avant > 0 ? "+" : "-")
      + formatNumber(Math.round(Math.abs(-(resultats.plf || NaN) + resultats.avant)));

    const plfTitle = (
      <Fragment>
        {"Avec le PLF, ce foyer doit "}
        <b>{`${DiffPlFCodeEx}€`}</b>
        {" d'impôts/an qu'avec le code existant"}
      </Fragment>
    );
    const amendementTitle = resultats.plf !== null ? (
      <Fragment>
        {"Avec mon amendement, ce foyer doit "}
        <b>{`${DiffAmendPLF}€`}</b>
        {" d'impôts/an qu'avec le PLF 2020"}
      </Fragment>
    ) : null;

    return isLoading ? <CircularProgress color="secondary" /> : (
      <div className={styles.container}>
        <div>
          <div className={styles.legend}>
            Impôt sur le revenu par an
          </div>
          <div className={styles.result}>
            <Values
              amendementTitle={amendementTitle}
              amendementValue={-resultats.apres}
              baseValue={-resultats.avant}
              editable={false}
              plfTitle={plfTitle}
              plfValue={
                (resultats.plf === null || resultats.plf === undefined) ? null : -resultats.plf
              } />
            {" "}
            €
          </div>
        </div>
        <div>
          <div className={styles.legend}>Nbre de parts</div>
          <div className={styles.part}>
            <Values
              amendementValue={3}
              baseValue={2}
              plfValue={2.5}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SimpleCardImpactImpots;
