import { PureComponent } from "react";

import { Card } from "../../../card";
import { CommuneStrateDetailsTable } from "./commune-strate-details-table";

export class CommuneStrateDetails extends PureComponent {
  render() {
    return (
      <Card
        content1={<CommuneStrateDetailsTable />}
        subTitle="par strate démographique"
        title="Impact sur les communes"
      />
    );
  }
}
