import familyManGirlGirl from "@iconify/icons-twemoji/family-man-girl-girl";
import { Icon } from "@iconify/react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import CachedIcon from "@material-ui/icons/Cached";
import FaceIcon from "@material-ui/icons/Face";
import GroupIcon from "@material-ui/icons/Group";
import TrendingFLatIcon from "@material-ui/icons/TrendingFlat";
import { get } from "lodash";
import React, { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { fetchSimPop, simulateCasTypes } from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import { Card } from "../../card";
import styles2 from "./gagnants-perdants-component.module.scss";

const styles = () => ({
  buttonPosition: {
    marginBottom: "114px",
    marginTop: "41px",
  },
  containerImpact: {
    alignContent: "flex-start",
    display: "flex",
    justifyContent: "space-around",
    paddingBottom: "0px",
  },
  sourceInsee: {
    color: "#B1B1B1",
    fontFamily: "Lato",
    fontSize: "12px",
    fontWeight: "regular",
    lineHeight: "15px",
    marginTop: "15px",
    textAlign: "right",
  },
  styleIconGagnant: {
    color: "#13CC03",
    verticalAlign: "bottom",
  },
  styleIconNeutre: {
    color: "#B1B1B1",
    verticalAlign: "bottom",
  },
  styleIconPerdant: {
    color: "#FFAC33",
    verticalAlign: "bottom",
  },
  titleCard: {
    color: "#565656",
    fontFamily: "Lato",
    fontSize: "1.125em",
    fontWeight: "bold",
    marginLeft: "10px",
    textAlign: "left",
  },
});

const mapStateToProps = ({ loadingEtat, results }: RootState) => {
  const isLoadingEtat = loadingEtat === "loading";
  const isDisabledEtat = loadingEtat === "disabled";
  const { foyersFiscauxTouches } = results.totalPop;
  return {
    foyersFiscauxTouches,
    isDisabledEtat,
    isLoadingEtat,
  };
};

const mapDispatchToProps = dispatch => ({
  onClickSimPop: () => {
    dispatch(fetchSimPop());
    dispatch(simulateCasTypes());
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  classes: any;
}

class GagnantsPerdantsCard extends PureComponent<Props> {
  render() {
    const {
      classes,
      foyersFiscauxTouches,
      isDisabledEtat,
      isLoadingEtat,
      onClickSimPop,
    } = this.props;

    const montrerPLF = !!foyersFiscauxTouches.avant_to_plf;

    let baissePlf: number|null = null;
    if (montrerPLF) {
      baissePlf = Math.round(
        get(foyersFiscauxTouches, "avant_to_plf.gagnant", 0) / 100000,
      ) / 10;
    }
    const baisseReforme = Math.round(
      get(foyersFiscauxTouches, "avant_to_apres.gagnant", 0) / 100000,
    ) / 10;

    let neutrePlf: number|null = null;
    if (montrerPLF) {
      neutrePlf = Math.round(
        (get(foyersFiscauxTouches, "avant_to_plf.neutre", 0)
            + get(foyersFiscauxTouches, "avant_to_plf.neutre_zero", 0))
            / 100000,
      ) / 10;
    }
    const neutreReforme = Math.round(
      (get(foyersFiscauxTouches, "avant_to_apres.neutre", 0)
          + get(foyersFiscauxTouches, "avant_to_apres.neutre_zero", 0))
          / 100000,
    ) / 10;

    let neutreZeroPlf: number|null = null;
    if (montrerPLF) {
      neutreZeroPlf = Math.round(
        get(foyersFiscauxTouches, "avant_to_plf.neutre_zero", 0) / 100000,
      ) / 10;
    }
    const neutreZeroReforme = Math.round(
      get(foyersFiscauxTouches, "avant_to_apres.neutre_zero", 0) / 100000,
    ) / 10;

    let haussePlf: number|null = null;
    if (montrerPLF) {
      haussePlf = Math.round(
        (get(foyersFiscauxTouches, "avant_to_plf.perdant", 0)
            + get(foyersFiscauxTouches, "avant_to_plf.perdant_zero", 0))
            / 100000,
      ) / 10;
    }
    const hausseReforme = Math.round(
      (get(foyersFiscauxTouches, "avant_to_apres.perdant", 0)
          + get(foyersFiscauxTouches, "avant_to_apres.perdant_zero", 0))
          / 100000,
    ) / 10;

    let hausseZeroPlf: number|null = null;
    if (montrerPLF) {
      hausseZeroPlf = Math.round(
        get(foyersFiscauxTouches, "avant_to_plf.perdant_zero", 0) / 100000,
      ) / 10;
    }
    const hausseZeroReforme = Math.round(
      get(foyersFiscauxTouches, "avant_to_apres.perdant_zero", 0) / 100000,
    ) / 10;

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
                <ArrowUpwardIcon
                  classes={{ root: classes.styleIconPerdant }}
                  fontSize="default"
                />
                <span className={styles2.titleCard}>
                      ayant une augmentation de l&apos;IR
                </span>

                <div className={classes.containerImpact}>
                  {
                    montrerPLF
                      ? (
                        <div className={styles2.plf}>
                          <span className={styles2.plfValue}>{haussePlf}</span>
                          <span className={styles2.plfUnit}> M</span>
                          <GroupIcon
                            className={styles2.plfIcon}
                            fontSize="small"
                          />
                        </div>
                      )
                      : null
                  }
                  <div className={styles2.reform}>
                    <span className={styles2.amendementValue}>{hausseReforme}</span>
                    <span className={styles2.reformUnit}> M</span>
                    <GroupIcon
                      className={styles2.reformIcon}
                      fontSize="small"
                    />
                  </div>
                </div>
                <div className={styles2.details}>
                  dont
                  {" "}
                  {
                    montrerPLF
                      ? (
                        <Fragment>
                          <span className={styles2.detailsPlfValue}>{hausseZeroPlf}</span>
                          <span className={styles2.detailsPlfUnit}> M </span>
                        </Fragment>
                      )
                      : null
                  }
                  <span className={styles2.detailsReformValue}>{hausseZeroReforme}</span>
                  <span className={styles2.detailsReformUnit}> M</span>
                  &nbsp;de foyers entrant dans l&apos;IR
                </div>
              </div>
            )}
          </Fragment>
        )}
        content2={(!isDisabledEtat && !isLoadingEtat) ? (
          <div>
            <ArrowDownwardIcon
              classes={{ root: classes.styleIconGagnant }}
              fontSize="default"
            />
            <span className={styles2.titleCard}>
                  ayant une baisse de l&apos;IR
            </span>

            <div className={classes.containerImpact}>
              {
                montrerPLF
                  ? (
                    <div className={styles2.plf}>
                      <span className={styles2.plfValue}>{baissePlf}</span>
                      <span className={styles2.plfUnit}> M</span>
                      <GroupIcon
                        className={styles2.plfIcon}
                        fontSize="small"
                      />
                    </div>
                  )
                  : null
              }
              <div className={styles2.reform}>
                <span className={styles2.amendementValue}>{baisseReforme}</span>
                <span className={styles2.reformUnit}> M</span>
                <GroupIcon
                  className={styles2.reformIcon}
                  fontSize="small"
                />
              </div>
            </div>
          </div>
        ) : null}
        content3={(!isDisabledEtat && !isLoadingEtat) ? (
          <Fragment>
            <div>
              <TrendingFLatIcon
                classes={{ root: classes.styleIconNeutre }}
                fontSize="default"
              />
              <span className={styles2.titleCard}>
                    non concernés
              </span>

              <div className={classes.containerImpact}>
                {
                  montrerPLF
                    ? (
                      <div className={styles2.plf}>
                        <span className={styles2.plfValue}>{neutrePlf}</span>
                        <span className={styles2.plfUnit}> M</span>
                        <GroupIcon
                          className={styles2.plfIcon}
                          fontSize="small"
                        />
                      </div>
                    )
                    : null
                }
                <div className={styles2.reform}>
                  <span className={styles2.amendementValue}>{neutreReforme}</span>
                  <span className={styles2.reformUnit}> M</span>
                  <GroupIcon
                    className={styles2.reformIcon}
                    fontSize="small"
                  />
                </div>
              </div>
              <div className={styles2.details}>
                dont
                {" "}
                {
                  montrerPLF
                    ? (
                      <Fragment>
                        <span className={styles2.detailsPlfValue}>{neutreZeroPlf}</span>
                        <span className={styles2.detailsPlfUnit}> M </span>
                      </Fragment>
                    )
                    : null
                }
                <span className={styles2.detailsReformValue}>{neutreZeroReforme}</span>
                <span className={styles2.detailsReformUnit}> M</span>
                &nbsp;de foyers toujours exonérés d&apos;IR
              </div>
            </div>
            <Typography className={classes.sourceInsee}>
              * Chiffrages indicatifs.
              <br />
              {" "}
              Données ERFS-FPR (Insee).
            </Typography>
          </Fragment>
        ) : null}
        icon={<Icon height="40" icon={familyManGirlGirl} width="40" />}
        subTitle="en millions par rapport au droit existant*"
        title="Nombre de foyers fiscaux"
      />
    );
  }
}

export default withStyles(styles as any)(connector(GagnantsPerdantsCard));
