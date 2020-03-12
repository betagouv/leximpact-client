import { CircularProgress, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import formatMilliers from "../../utils/format-milliers";
import BlueTooltip from "./blue-tooltip";
import RedTooltip from "./red-tooltip";

const styles = () => ({
  container: {
    padding: 15,
    paddingTop: 5,
  },
  euroPLF: {
    color: "#FF6B6B",
    display: "inline-block",
  },
  impotCodeExistant: {
    backgroundColor: "#DED500",
    backgroundSize: "auto auto",
    color: "#565656",
    fontWeight: "bold",
    lineHeight: "10px",
    padding: "3px",
    // ligne à ajouter quand PLF
    textDecorationColor: "#FF6B6B",
    textDecorationLine: "line-through",
  },
  impotPLF: {
    color: "#FF6B6B",
    display: "inline-block",
  },
  legende: {
    color: "#909090",
    fontFamily: "Lato",
    fontSize: 12,
    marginBottom: 10,
  },
  stylePLF: {
    display: "inline-flex",
  },
});

class SimpleCardImpactImpots extends PureComponent {
  render() {
    const { classes, isLoading, resultats } = this.props;

    const DiffAmendPLF = (-resultats.apres + resultats.avant > 0 ? "+" : "-")
      + formatMilliers(Math.round(Math.abs(-resultats.apres + resultats.plf)));
    const DiffPlFCodeEx = (-resultats.plf + resultats.avant > 0 ? "+" : "-")
      + formatMilliers(Math.round(Math.abs(-resultats.plf + resultats.avant)));

    return (
      <div className={classes.container}>
        <Typography className={classes.legende}>
          <span>Impôt sur le revenu par an</span>
        </Typography>
        <div>
          <Typography
            gutterBottom
            inline
            className={classes.impotCodeExistant}
            variant="h3">
            {formatMilliers(-resultats.avant)}
          </Typography>
          {" "}
          {resultats.plf !== null && (
            <RedTooltip
              key="gain"
              className={classes.stylePLF}
              enterDelay={300}
              leaveDelay={200}
              placement="bottom-start"
              title={(
                <Fragment>
                  {"Avec le PLF, ce foyer doit "}
                  <b>{`${DiffPlFCodeEx}€`}</b>
                  {" d'impôts/an qu'avec le code existant"}
                </Fragment>
              )}>
              <div>
                <Typography
                  gutterBottom
                  inline
                  className={classes.impotPLF}
                  variant="h3">
                  {formatMilliers(-resultats.plf)}
                </Typography>
                <Typography
                  gutterBottom
                  inline
                  className={classes.euroPLF}
                  variant="h5">
                €
                </Typography>
              </div>
            </RedTooltip>
          )}
        </div>


        <BlueTooltip
          key="gain"
          enterDelay={300}
          leaveDelay={200}
          placement="bottom-start"
          title={resultats.plf !== null ? (
            <Fragment>
              {"Avec mon amendement, ce foyer doit "}
              <b>{`${DiffAmendPLF}€`}</b>
              {" d'impôts/an qu'avec le PLF 2020"}
            </Fragment>
          ) : ""}>
          <div>
            {isLoading ? (
              <CircularProgress color="secondary" />
            ) : (
              <Fragment>
                <Typography gutterBottom inline color="secondary" variant="h3">
                  {formatMilliers(-resultats.apres)}
                </Typography>
                <Typography gutterBottom inline color="secondary" variant="h5">
                  €
                </Typography>
              </Fragment>
            )}
          </div>
        </BlueTooltip>
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
