import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PureComponent } from "react";

import { Parameter } from "../../../articles-inputs";
import { Card } from "../../../card";
import styles from "./CommuneSummary.module.scss";

export class CommuneSummary extends PureComponent {
  render() {
    const nouvellementEligibles = 22;
    const plusEligibles = 133;
    const toujoursEligibles = 2687;
    return (
      <Card
        content1={(
          <div>
            <div className={styles.total}>
              <Parameter
                amendementValue={4887}
                baseValue={5000}
                editable={false} />
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
        content2={(
          <ExpansionPanel className={styles.expansionPanel}>
            <ExpansionPanelSummary
              className={styles.expansionPanelTitle}
              expandIcon={<ExpandMoreIcon />}>
                Détails de la répartition par fraction
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              Détails
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )}
        title="Nombre de communes éligibles"
      />
    );
  }
}
