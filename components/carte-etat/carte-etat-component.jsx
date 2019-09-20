import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core";
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
  buttonPosition: {
    marginTop: "83px",
    marginBottom: "90px",
  },
  card: {},
  div: {
    padding: 7,
  },
  espaceBouton: {
    minHeight: "210px",
    maxHeight: "300px",
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
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    marginLeft: "14px",
    textAlign: "right",
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
    marginTop: "10px",
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
      classes,
      deciles,
      isDisabledEtat,
      isLoadingEtat,
      onClickSimPop,
      total,
    } = this.props;
    const { apres, avant, plf } = total;
    const totalAvant = getRoundedTotal(avant);
    const totalApres = getRoundedTotal(apres);
    const totalPLF = getRoundedTotal(plf);
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className="title-wrapper">
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
          </div>

          {isDisabledEtat ? (
            <div>
              <center className={classes.buttonPosition}>
                <Button
                  color="secondary"
                  size="medium"
                  variant="outlined"
                  onClick={onClickSimPop}>
                  <AccountBalanceIcon />
                  <FaceIcon className={classes.marginIcon} />
                  &nbsp;Estimer ~60"
                  <CachedIcon className={classes.miniIcon} />
                </Button>
              </center>
            </div>
          ) : (
            [
              isLoadingEtat ? (
                <center className={classes.buttonPosition}>
                  <CircularProgress color="secondary" />
                </center>
              ) : (
                <div>
                  <div className="chart-wrapper">
                    <div className="main-chart">
                      <BarChart deciles={deciles} />
                    </div>
                    <div className={classes.simpop}>
                      <div className="montant-impots">
                        <Typography inline className="impotEtat avant">
                          {totalAvant}
                        </Typography>
                        <Typography inline className="uniteImpotEtat avant">
                          Md€*
                        </Typography>
                      </div>
                      <div className="montant-impots">
                        <Typography inline className="impotEtat plf">
                          {totalPLF}
                        </Typography>
                        <Typography inline className="uniteImpotEtat plf">
                          Md€*
                        </Typography>
                      </div>
                      <div className="montant-impots">
                        <Typography inline className="impotEtat apres">
                          {totalApres}
                        </Typography>
                        <Typography inline className="uniteImpotEtat apres">
                          Md€*
                        </Typography>
                      </div>
                    </div>
                  </div>
                  <Typography className={classes.sourceInsee}>
                    * Chiffrages indicatifs.
                    <br />
                    {" "}
Estimation à partir des données de l&apos;Enquête
                    Revenus Fiscaux et Sociaux de l&apos;INSEE.
                  </Typography>
                </div>
              ),
            ]
          )}
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
  isDisabledEtat: PropTypes.bool.isRequired,
  isLoadingEtat: PropTypes.bool.isRequired,
  onClickSimPop: PropTypes.func.isRequired,
  total: PropTypes.shape({
    apres: PropTypes.number.isRequired,
    avant: PropTypes.number.isRequired,
    plf: PropTypes.number.isRequired,
  }).isRequired,
};

export default withStyles(styles)(CarteEtat);
