import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
}
  from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  AccountBalance as AccountBalanceIcon,
  Cached as CachedIcon,
  Face as FaceIcon,
} from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import BarChart from "./bar-chart";

const styles = () => ({
  card: {},
  div: {
    padding: 7,
  },
  iconEtat: {
    fontSize: "50px",
  },
  marginIcon: {
    marginRight: "20px",
  },
  miniIcon: {
    height: "15px",
  },
  pom_rouge: {
    color: "#FF0000",
  },
  pom_verte: {
    color: "#00FF00",
  },
  sourceInsee: {
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
  },
  subtitleCarteEtat: {
    fontFamily: "Lato",
  },
  titledadCarteEtat: {
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
  },
});

function getRoundedTotal(value) {
  const rounded = Math.round(value / 100000000) / 10;
  return rounded;
}

class CarteEtat extends PureComponent {
  render() {
    const {
      classes, deciles, isLoadingEtat, onClickSimPop, total,
    } = this.props;
    const { apres, avant, plf } = total;
    const totalAvant = getRoundedTotal(avant);
    const totalApres = getRoundedTotal(apres);
    const totalPLF = getRoundedTotal(plf);
    return (
      <Card className={classes.card}>
        <CardContent>
          <table>
            <tbody>
              <tr>
                <td rowSpan="2">
                  <Icon height="40" icon={classicalBuilding} width="40" />
                </td>
                <td className="titleCarteEtat">
                  Recettes de l&apos;État sur l&apos;impôt sur le revenu
                </td>
              </tr>
              <tr>
                <td className="subtitleCarteEtat">
                  par décile de population et par an
                </td>
              </tr>
            </tbody>
          </table>

          {isLoadingEtat ? (
            <CircularProgress color="secondary" />
          ) : (
            <table id="table-bar-chart">
              <tbody>
                <tr>
                  <td rowSpan="6" width="150%">
                    <BarChart deciles={deciles} />
                  </td>
                </tr>
                <tr>
                  <td height="30%">
                    <span className="legendeEtat avant chiffre">
                      {totalAvant}
                    </span>
                    <span className="legendeEtat avant">Md€*</span>
                  </td>
                </tr>
                <tr>
                  <td height="30%">
                    <span className="legendeEtat plf chiffre">{totalPLF}</span>
                    <span className="legendeEtat plf">Md€*</span>
                  </td>
                </tr>
                <tr>
                  <td height="30%">
                    <span className="legendeEtat apres chiffre">
                      {totalApres}
                    </span>
                    <span className="legendeEtat apres">Md€*</span>
                  </td>
                </tr>
                <tr>
                  <td height="10%">
                    <span className="sourceInsee">*Source : INSEE</span>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          <div>
            <center>
              <Button
                color="secondary"
                size="medium"
                variant="outlined"
                onClick={onClickSimPop}>
                <AccountBalanceIcon />
                <FaceIcon className={classes.marginIcon} />
                &nbsp;Estimer ~1min
                <CachedIcon className={classes.miniIcon} />
              </Button>
            </center>
          </div>
        </CardContent>
      </Card>
    );
  }
}

CarteEtat.propTypes = {
  classes: PropTypes.shape().isRequired,
  deciles: PropTypes.arrayOf(
    PropTypes.shape({
      apres: PropTypes.number.isRequired,
      avant: PropTypes.number.isRequired,
      plf: PropTypes.number.isRequired,
      poids: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  isLoadingEtat: PropTypes.bool.isRequired,
  onClickSimPop: PropTypes.func.isRequired,
  total: PropTypes.shape({
    apres: PropTypes.number.isRequired,
    avant: PropTypes.number.isRequired,
    plf: PropTypes.number.isRequired,
  }).isRequired,
};

export default withStyles(styles)(CarteEtat);
