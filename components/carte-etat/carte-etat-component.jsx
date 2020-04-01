import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { withStyles } from "@material-ui/core/styles";
import {
  AccountBalance as AccountBalanceIcon,
  Cached as CachedIcon,
  Face as FaceIcon,
} from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import classNames from "classnames";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import BarChart from "./bar-chart";
import styles2 from "./carte-etat-component.module.scss";
import SimpopTableurInfosDeciles from "./simpop-tableur-infos-deciles";

const styles = () => ({
  buttonPosition: {
    marginBottom: "90px",
    marginTop: "83px",
  },
  div: {
    padding: 7,
  },
  espaceBouton: {
    maxHeight: "300px",
    minHeight: "210px",
  },
  iconEtat: {
    fontSize: "50px",
  },
  mainChart: {
    flex: "1",
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
  simpop: {
    display: "flex",
    flex: "1",
    flexDirection: "column",
    height: "25vh",
    marginTop: "10px",
    paddingLeft: "3px",
    width: "50%",
  },
  sourceInsee: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    marginBottom: "0px", //
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
      expandArticlePanelHandler,
      frontieresDeciles,
      isDisabledEtat,
      isLoadingEtat,
      isPanelExpanded,
      onClickSimPop,
      total,
    } = this.props;
    const { apres, avant, plf } = total;

    const montrerPLF = typeof plf === "number";

    const totalAvant = getRoundedTotal(avant);
    const totalApres = getRoundedTotal(apres);
    const totalPLF = montrerPLF ? getRoundedTotal(plf) : null;
    return (
      <Card>
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
                  &nbsp;Estimer ~60&quot;
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
                        <Typography
                          inline
                          className={classNames({
                            [styles2.impotEtat]: true,
                            [styles2.avant]: true,
                          })}>
                          {totalAvant}
                        </Typography>
                        <Typography
                          inline
                          className={classNames({
                            [styles2.uniteImpotEtat]: true,
                            [styles2.avant]: true,
                          })}>
                          Md€*
                        </Typography>
                      </div>
                      {
                        montrerPLF
                          ? (
                            <div className="montant-impots">
                              <Typography
                                inline
                                className={classNames({
                                  [styles2.impotEtat]: true,
                                  [styles2.plf]: true,
                                })}>
                                {totalPLF}
                              </Typography>
                              <Typography
                                inline
                                className={classNames({
                                  [styles2.uniteImpotEtat]: true,
                                  [styles2.plf]: true,
                                })}>
                                Md€*
                              </Typography>
                            </div>
                          )
                          : null
                      }
                      <div className="montant-impots">
                        <Typography
                          inline
                          className={classNames({
                            [styles2.impotEtat]: true,
                            [styles2.apres]: true,
                          })}>
                          {totalApres}
                        </Typography>
                        <Typography
                          inline
                          className={classNames({
                            [styles2.uniteImpotEtat]: true,
                            [styles2.apres]: true,
                          })}>
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
                    Revenus Fiscaux et Sociaux (ERFS-FPR) de l&apos;Insee.
                  </Typography>
                </div>
              ),
            ]
          )}
        </CardContent>
        { (isLoadingEtat || isDisabledEtat) ? ("")
          : (
            <ExpansionPanel
              expanded={isPanelExpanded}
              onChange={expandArticlePanelHandler}>
              <ExpansionPanelSummary
                className="styleExpansionPanel"
                expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.subtitleCarteEtat}>
              En savoir plus sur les déciles de population
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className="styleExpansionPanel">
                <SimpopTableurInfosDeciles
                  deciles={deciles}
                  frontieresDeciles={frontieresDeciles}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        }
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
      plf: PropTypes.number,
      poids: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  expandArticlePanelHandler: PropTypes.shape().isRequired,
  frontieresDeciles: PropTypes.bool.isRequired,
  isDisabledEtat: PropTypes.bool.isRequired,
  isLoadingEtat: PropTypes.bool.isRequired,
  isPanelExpanded: PropTypes.shape().isRequired,
  onClickSimPop: PropTypes.func.isRequired,
  total: PropTypes.shape({
    apres: PropTypes.number.isRequired,
    avant: PropTypes.number.isRequired,
    plf: PropTypes.number,
  }).isRequired,
};

export default withStyles(styles)(CarteEtat);
