import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
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
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    padding: "0 0 10px 10px",
  },
  titleCarteEtat: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
    padding: "0 0 0 10px",
  },
  simpop: {
    height: "25vh",
    width: "50%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "3px",
    width: "50px",
    flex: "1",
  },
  mainChart: {
    flex: "1",
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

          <div className="divTitre">
            <Icon height="40" icon={classicalBuilding} width="40" />
          </div>
          <div className="divTitre">
            <Typography className={classes.titleCarteEtat}>
              Recettes de l&apos;État sur l&apos;impôt sur le revenu
            </Typography>
            <Typography className={classes.subtitleCarteEtat}>
              par décile de population et par an
            </Typography>
          </div>

          {isLoadingEtat ? (
            <CircularProgress color="secondary" />
          ) : (
            <div className="chart-wrapper">
              <div className="main-chart">
                <BarChart deciles={deciles} />
              </div>
              <div className={classes.simpop}>
                <div>
                  <Typography inline className="legendeEtat avant chiffre">
                    {totalAvant}
                  </Typography>
                  <Typography inline className="legendeEtat avant">Md€*</Typography>
                </div>
                <div>
                  <Typography inline className="legendeEtat plf chiffre">{totalPLF}</Typography>
                  <Typography inline className="legendeEtat plf">Md€*</Typography>
                </div>
                <div>
                  <Typography inline className="legendeEtat apres chiffre">
                    {totalApres}
                  </Typography>
                  <Typography inline className="legendeEtat apres">Md€*</Typography>
                </div>
              </div>
            </div>
          )}
          <div>
            <Typography className="sourceInsee">*Source : INSEE</Typography>
          </div>
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
