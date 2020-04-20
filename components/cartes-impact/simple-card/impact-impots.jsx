import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import { Parameter } from "../../articles-inputs/parameter";
import formatMilliers from "../../utils/format-milliers";
import styles2 from "./impact-impots.module.scss";

const styles = () => ({
  container: {
    padding: 15,
    paddingTop: 5,
  },
  legende: {
    color: "#909090",
    fontFamily: "Lato",
    fontSize: 12,
    marginBottom: 10,
  },
});

class SimpleCardImpactImpots extends PureComponent {
  render() {
    const { classes, isLoading, resultats } = this.props;

    const DiffAmendPLF = (-resultats.apres + resultats.avant > 0 ? "+" : "-")
      + formatMilliers(Math.round(Math.abs(-resultats.apres + resultats.plf)));
    const DiffPlFCodeEx = (-resultats.plf + resultats.avant > 0 ? "+" : "-")
      + formatMilliers(Math.round(Math.abs(-resultats.plf + resultats.avant)));

    const plfTitle = (
      <Fragment>
        {"Avec le PLF, ce foyer doit "}
        <b>{`${DiffPlFCodeEx}€`}</b>
        {" d'impôts/an qu'avec le code existant"}
      </Fragment>
    );
    const reformTitle = resultats.plf !== null ? (
      <Fragment>
        {"Avec mon amendement, ce foyer doit "}
        <b>{`${DiffAmendPLF}€`}</b>
        {" d'impôts/an qu'avec le PLF 2020"}
      </Fragment>
    ) : null;

    return (
      <div className={classes.container}>
        <Typography className={classes.legende}>
          <span>Impôt sur le revenu par an</span>
        </Typography>
        {
          isLoading
            ? <CircularProgress color="secondary" />
            : (
              <div className={styles2.result}>
                <Parameter
                  editable={false}
                  initialValue={-resultats.avant}
                  plfTitle={plfTitle}
                  plfValue={resultats.plf === null ? resultats.plf : -resultats.plf}
                  reformTitle={reformTitle}
                  reformValue={-resultats.apres} />
                €
              </div>
            )
        }
      </div>
    );
  }
}

SimpleCardImpactImpots.propTypes = {
  classes: PropTypes.shape().isRequired,
  isLoading: PropTypes.bool.isRequired,
  resultats: PropTypes.shape({
    apres: PropTypes.number.isRequired,
    avant: PropTypes.number.isRequired,
    plf: PropTypes.number,
  }).isRequired,
};

export default withStyles(styles)(SimpleCardImpactImpots);
