import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import { Icon } from "@iconify/react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CachedIcon from "@material-ui/icons/Cached";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FaceIcon from "@material-ui/icons/Face";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import { Card } from "../card";
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
    textAlign: "right",
  },
  subtitleCarteEtat: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    padding: "0 0 10px 10px",
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
      frontieresDeciles,
      isDisabledEtat,
      isLoadingEtat,
      onClickSimPop,
      total,
    } = this.props;
    const { apres, avant, plf } = total;

    const montrerPLF = typeof plf === "number";

    const totalAvant = getRoundedTotal(avant);
    const totalApres = getRoundedTotal(apres);
    const totalPLF = montrerPLF ? getRoundedTotal(plf) : null;
    return (
      <Card
        content1={(
          <Fragment>
            {isDisabledEtat && (
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
            )}
            {!isDisabledEtat && isLoadingEtat && (
              <center className={classes.buttonPosition}>
                <CircularProgress color="secondary" />
              </center>
            )}
            {!isDisabledEtat && !isLoadingEtat && (
              <div>
                <div className="chart-wrapper">
                  <div className="main-chart">
                    <BarChart deciles={deciles} />
                  </div>
                  <div className={classes.simpop}>
                    <div className={classNames({
                      [styles2.montantImpots]: true,
                      [styles2.noPLF]: !montrerPLF,
                    })}>
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
                          <div className={classNames({
                            [styles2.montantImpots]: true,
                            [styles2.noPLF]: !montrerPLF,
                          })}>
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
                    <div className={classNames({
                      [styles2.montantImpots]: true,
                      [styles2.noPLF]: !montrerPLF,
                    })}>
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
            )}
          </Fragment>
        )}
        content2={(isLoadingEtat || isDisabledEtat) ? null
          : (
            <ExpansionPanel className={styles2.expansionPanel}>
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
        icon={<Icon height="40" icon={classicalBuilding} width="40" />}
        subTitle="par décile de population et par an"
        title="Recettes de l&apos;État sur l&apos;impôt sur le revenu"
      />
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
  frontieresDeciles: PropTypes.arrayOf(PropTypes.number).isRequired,
  isDisabledEtat: PropTypes.bool.isRequired,
  isLoadingEtat: PropTypes.bool.isRequired,
  onClickSimPop: PropTypes.func.isRequired,
  total: PropTypes.shape({
    apres: PropTypes.number.isRequired,
    avant: PropTypes.number.isRequired,
    plf: PropTypes.number,
  }).isRequired,
};

export default withStyles(styles)(CarteEtat);
