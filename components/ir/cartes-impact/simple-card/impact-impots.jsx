import CircularProgress from "@material-ui/core/CircularProgress";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import { formatNumber, Values } from "../../../common";
import styles from "./impact-impots.module.scss";

class SimpleCardImpactImpots extends PureComponent {
  render() {
    const { isLoading, resultats } = this.props;

    const DiffAmendPLF = (-resultats.apres + resultats.avant > 0 ? "+" : "-")
      + formatNumber(Math.round(Math.abs(-resultats.apres + resultats.plf)));
    const DiffPlFCodeEx = (-resultats.plf + resultats.avant > 0 ? "+" : "-")
      + formatNumber(Math.round(Math.abs(-resultats.plf + resultats.avant)));

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

    return (
      <Fragment>
        <div className={styles.legend}>
          Impôt sur le revenu par an
        </div>
        {
          isLoading
            ? <CircularProgress color="secondary" />
            : (
              <div className={styles.result}>
                <Values
                  amendementTitle={amendementTitle}
                  amendementValue={-resultats.apres}
                  baseValue={-resultats.avant}
                  editable={false}
                  plfTitle={plfTitle}
                  plfValue={resultats.plf === null ? resultats.plf : -resultats.plf} />
                {" "}
                €
              </div>
            )
        }
      </Fragment>
    );
  }
}

SimpleCardImpactImpots.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  resultats: PropTypes.shape({
    apres: PropTypes.number.isRequired,
    avant: PropTypes.number.isRequired,
    plf: PropTypes.number,
  }).isRequired,
};

export default SimpleCardImpactImpots;
