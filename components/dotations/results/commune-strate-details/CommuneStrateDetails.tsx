import { PureComponent } from "react";

import { Card } from "../../../common";
import { CommuneStrateDetailsTable } from "./commune-strate-details-table";
import styles from "./CommuneStrateDetails.module.scss";

export class CommuneStrateDetails extends PureComponent {
  render() {
    return (
      <Card
        content1={<CommuneStrateDetailsTable />}
        icon={<img alt="" className={styles.image} src="/icons/picto-impact-strates.png" />}
        subTitle="par strate démographique"
        title="Impact sur les communes"
      />
    );
  }
}
