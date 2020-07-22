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
import TrendingFLatIcon from "@material-ui/icons/TrendingFlat";
import React, { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { fetchSimPop, simulateCasTypes } from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import { Card } from "../../common";
import styles2 from "./gagnants-perdants-component.module.scss";
import { GagnantsPerdantsContent } from "./GagnantsPerdantsContent";

const styles = () => ({
  buttonPosition: {
    marginBottom: "114px",
    marginTop: "41px",
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

    const baissePlf = foyersFiscauxTouches.avant_to_plf
      && (foyersFiscauxTouches.avant_to_plf.gagnant || 0);

    const baisseReforme = foyersFiscauxTouches.avant_to_apres
      && (foyersFiscauxTouches.avant_to_apres.gagnant || 0);

    const neutrePlf = foyersFiscauxTouches.avant_to_plf
      && (
        (foyersFiscauxTouches.avant_to_plf.neutre || 0)
        + (foyersFiscauxTouches.avant_to_plf.neutre_zero || 0)
      );
    const neutreReforme = foyersFiscauxTouches.avant_to_apres
      && (
        (foyersFiscauxTouches.avant_to_apres.neutre || 0)
        + (foyersFiscauxTouches.avant_to_apres.neutre_zero || 0)
      );

    const neutreZeroPlf = foyersFiscauxTouches.avant_to_plf
      && (foyersFiscauxTouches.avant_to_plf.neutre_zero || 0);
    const neutreZeroReforme = foyersFiscauxTouches.avant_to_apres
      && (foyersFiscauxTouches.avant_to_apres.neutre_zero || 0);

    const haussePlf = foyersFiscauxTouches.avant_to_plf
      && (
        (foyersFiscauxTouches.avant_to_plf.perdant || 0)
        + (foyersFiscauxTouches.avant_to_plf.perdant_zero || 0)
      );
    const hausseReforme = foyersFiscauxTouches.avant_to_apres
      && (
        (foyersFiscauxTouches.avant_to_apres.perdant || 0)
        + (foyersFiscauxTouches.avant_to_apres.perdant_zero || 0)
      );

    const hausseZeroPlf = foyersFiscauxTouches.avant_to_plf
      && (foyersFiscauxTouches.avant_to_plf.perdant_zero || 0);
    const hausseZeroReforme = foyersFiscauxTouches.avant_to_apres
      && (foyersFiscauxTouches.avant_to_apres.perdant_zero || 0);

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
              <GagnantsPerdantsContent
                amendement={hausseReforme}
                caption="&nbsp;de foyers entrant dans l&apos;IR"
                captionAmendement={hausseZeroReforme}
                captionPlf={hausseZeroPlf}
                icon={(
                  <ArrowUpwardIcon
                    classes={{ root: classes.styleIconPerdant }}
                    fontSize="default"
                  />
                )}
                plf={haussePlf}
                title="ayant une augmentation de l&apos;IR"
              />
            )}
          </Fragment>
        )}
        content2={(!isDisabledEtat && !isLoadingEtat) ? (
          <GagnantsPerdantsContent
            amendement={baisseReforme}
            icon={(
              <ArrowDownwardIcon
                classes={{ root: classes.styleIconGagnant }}
                fontSize="default"
              />
            )}
            plf={baissePlf}
            title="ayant une baisse de l&apos;IR"
          />
        ) : null}
        content3={(!isDisabledEtat && !isLoadingEtat) ? (
          <Fragment>
            <GagnantsPerdantsContent
              amendement={neutreReforme}
              caption="&nbsp;de foyers toujours exonérés d&apos;IR"
              captionAmendement={neutreZeroReforme}
              captionPlf={neutreZeroPlf}
              icon={(
                <TrendingFLatIcon
                  classes={{ root: classes.styleIconNeutre }}
                  fontSize="default"
                />
              )}
              plf={neutrePlf}
              title="non concernés"
            />
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
