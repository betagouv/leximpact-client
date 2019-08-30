import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import { Button, Card, CardContent } from "@material-ui/core";
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
  subtitleCarteEtat: {
    fontFamily: "Lato",
  },
  titledadCarteEtat: {
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
  },
});

class CarteEtat extends PureComponent {
  render() {
    const { classes, onClickSimPop, totalPop } = this.props;
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
          <table id="table-bar-chart">
            <tbody>
              <tr height="15%">
                <td rowSpan="6" width="150%">
                  <BarChart resultat={totalPop} />
                </td>
                <td />
              </tr>
              <tr>
                <td>
                  <span className="legendeEtat avant chiffre">
                    {Math.round(totalPop.total.avant / 100000000) / 10}
                  </span>
                  <span className="legendeEtat avant">Md€</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="legendeEtat plf chiffre">
                    {Math.round(totalPop.total.plf / 100000000) / 10}
                  </span>
                  <span className="legendeEtat plf">Md€</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="legendeEtat apres chiffre">
                    {Math.round(totalPop.total.apres / 100000000) / 10}
                  </span>
                  <span className="legendeEtat apres">Md€</span>
                </td>
              </tr>
              <tr height="15%">
                <td />
              </tr>
            </tbody>
          </table>
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
  onClickSimPop: PropTypes.func.isRequired,
  totalPop: PropTypes.shape({
    total: PropTypes.shape({
      apres: PropTypes.number.isRequired,
      avant: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withStyles(styles)(CarteEtat);