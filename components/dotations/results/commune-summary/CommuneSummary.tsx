import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PureComponent } from "react";

import { Card } from "../../../card";
import styles from "./CommuneSummary.module.scss";
import { ResultValues } from "../../../articles-inputs/parameter";
import { RootState } from "../../../../redux/reducers";
import { ConnectedProps, connect } from "react-redux";

const mapStateToProps = ({ results }: RootState) => ({
  nouvellementEligibles: results.baseToAmendement.dotations.state?.communes.dsr.nouvellementEligibles,
  plusEligibles: results.baseToAmendement.dotations.state?.communes.dsr.plusEligibles,
  toujoursEligibles: results.baseToAmendement.dotations.state?.communes.dsr.toujoursEligibles,
})

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

class CommuneSummary extends PureComponent<Props> {
  render() {
    const { nouvellementEligibles, plusEligibles, toujoursEligibles } = this.props;
    return (
      <Card
        content1={(
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
              <span className={nouvellementEligibles ? styles.amendement : undefined}>
                {nouvellementEligibles}
              </span>
              <span>nouvellement éligibles</span>
            </div>
            <div className={styles.plusEligible}>
              <ArrowDownwardIcon
                className={styles.icon}
                fontSize="default"
              />
              <span className={plusEligibles ? styles.amendement : undefined}>
                {plusEligibles}
              </span>
              <span> plus éligibles</span>
            </div>
            <div className={styles.toujoursEligible}>
              soit
              {" "}
              <span className={toujoursEligibles ? styles.amendement : undefined}>
                {toujoursEligibles}
              </span>
              {" "}
              communes bénéficiant toujours de la DSR pour 2021.
            </div>
          </div>
        )}
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
