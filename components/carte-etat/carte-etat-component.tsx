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
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { fetchSimPop, simulateCasTypes } from "../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../redux/reducers";
import { Card } from "../common";
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
  subtitleCarteEtat: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "0.875em",
    padding: "0 0 10px 10px",
  },
});

function inBillions(value: number): number {
  return Math.round(value / 100000000) / 10;
}

const mapStateToProps = ({ loadingEtat, results }: RootState) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { deciles, frontieresDeciles, total } = results.totalPop;
  return {
    deciles,
    frontieresDeciles,
    isDisabledEtat,
    isLoadingEtat,
    total,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(fetchSimPop());
    dispatch(simulateCasTypes());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  classes: any;
}

class CarteEtat extends PureComponent<Props> {
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

    const totalAvant = inBillions(avant);
    const totalApres = typeof apres === "number" ? inBillions(apres) : null;
    const totalPLF = typeof plf === "number" ? inBillions(plf) : null;
    return (
      <Card
        content1={(
          <Fragment>
            {isDisabledEtat && (
              <div>
                <div className={`${classes.buttonPosition} ${styles2.center}`}>
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
                </div>
              </div>
            )}
            {!isDisabledEtat && isLoadingEtat && (
              <div className={`${classes.buttonPosition} ${styles2.center}`}>
                <CircularProgress color="secondary" />
              </div>
            )}
            {!isDisabledEtat && !isLoadingEtat && (
              <div>
                <div className={styles2.chartWrapper}>
                  <div className={styles2.mainChart}>
                    <BarChart deciles={deciles} />
                  </div>
                  <div className={styles2.simpop}>
                    <div className={classNames({
                      [styles2.montantImpots]: true,
                      [styles2.noPLF]: !montrerPLF,
                    })}>
                      <Typography
                        className={classNames({
                          [styles2.impotEtat]: true,
                          [styles2.avant]: true,
                        })}>
                        {totalAvant}
                      </Typography>
                      <Typography
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
                              className={classNames({
                                [styles2.impotEtat]: true,
                                [styles2.plf]: true,
                              })}>
                              {totalPLF}
                            </Typography>
                            <Typography
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
                    {
                      totalApres !== null ? (
                        <div className={classNames({
                          [styles2.montantImpots]: true,
                          [styles2.noPLF]: !montrerPLF,
                        })}>
                          <Typography
                            className={classNames({
                              [styles2.impotEtat]: true,
                              [styles2.apres]: true,
                            })}>
                            {totalApres}
                          </Typography>
                          <Typography
                            className={classNames({
                              [styles2.uniteImpotEtat]: true,
                              [styles2.apres]: true,
                            })}>
                                Md€*
                          </Typography>
                        </div>
                      ) : null
                    }
                  </div>
                </div>
                <div className={styles2.sourceInsee}>
                  * Chiffrages indicatifs.
                  <br />
                  Estimation à partir des données de l&apos;Enquête
                  Revenus Fiscaux et Sociaux (ERFS-FPR) de l&apos;Insee.
                </div>
              </div>
            )}
          </Fragment>
        )}
        content2={(isLoadingEtat || isDisabledEtat) ? null
          : (
            <ExpansionPanel className={styles2.expansionPanel}>
              <ExpansionPanelSummary
                className={styles2.styleExpansionPanel}
                expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.subtitleCarteEtat}>
              En savoir plus sur les déciles de population
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails className={styles2.styleExpansionPanel}>
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

export default withStyles(styles)(connector(CarteEtat));
