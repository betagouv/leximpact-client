// import ExpansionPanel from "@material-ui/core/ExpansionPanel";
// import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
// import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import CircularProgress from "@material-ui/core/CircularProgress";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import { Card, Parameter, ResultValues } from "../../../common";
import styles from "./CommuneSummary.module.scss";

const mapStateToProps = ({ results }: RootState) => ({
  amendement: {
    nouvellementEligibles: results.baseToAmendement
      .dotations.state?.communes.dsr.nouvellementEligibles,
    plusEligibles: results.baseToAmendement.dotations.state?.communes.dsr.plusEligibles,
    toujoursEligibles: results.baseToAmendement.dotations.state?.communes.dsr.toujoursEligibles,
  },
  isFetching: results.amendement.dotations.isFetching
    || results.base.dotations.isFetching
    || results.plf.dotations.isFetching,
  plf: {
    nouvellementEligibles: results.baseToPlf.dotations.state?.communes.dsr.nouvellementEligibles,
    plusEligibles: results.baseToPlf.dotations.state?.communes.dsr.plusEligibles,
    toujoursEligibles: results.baseToPlf.dotations.state?.communes.dsr.toujoursEligibles,
  },
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

class CommuneSummary extends PureComponent<Props> {
  render() {
    const { amendement, isFetching, plf } = this.props;
    return (
      <Card
        content1={isFetching ? <CircularProgress /> : (
          <div>
            <div className={styles.total}>
              <ResultValues
                path="dotations.state.communes.dsr.eligibles"
              />
            </div>
            <div className={styles.nouvellementEligible}>
              <ArrowUpwardIcon
                className={styles.icon}
                fontSize="default"
              />
              <Parameter
                amendementValue={amendement.nouvellementEligibles}
                plfValue={plf.nouvellementEligibles} />
              <span>&nbsp;nouvellement éligibles</span>
            </div>
            <div className={styles.plusEligible}>
              <ArrowDownwardIcon
                className={styles.icon}
                fontSize="default"
              />
              <Parameter
                amendementValue={amendement.plusEligibles}
                plfValue={plf.plusEligibles} />
              <span>&nbsp;plus éligibles</span>
            </div>
            <div className={styles.toujoursEligible}>
              soit
              {" "}
              <Parameter
                amendementValue={amendement.toujoursEligibles}
                plfValue={plf.toujoursEligibles} />
              {" "}
              communes bénéficiant toujours de la DSR pour 2021.
            </div>
          </div>
        )}
        icon={<img alt="" className={styles.image} src="/icons/picto-communes-eligibles.png" />}
        // content2={(
        //   <ExpansionPanel className={styles.expansionPanel}>
        //     <ExpansionPanelSummary
        //       className={styles.expansionPanelTitle}
        //       expandIcon={<ExpandMoreIcon />}>
        //         Détails de la répartition par fraction
        //     </ExpansionPanelSummary>
        //     <ExpansionPanelDetails>
        //       Détails
        //     </ExpansionPanelDetails>
        //   </ExpansionPanel>
        // )}
        title="Nombre de communes éligibles"
      />
    );
  }
}

const ConnectedCommuneSummary = connector(CommuneSummary);

export { ConnectedCommuneSummary as CommuneSummary };
