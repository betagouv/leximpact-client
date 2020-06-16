import { PureComponent } from "react";

import { Card } from "../../../card";

export class CommuneStrateDetails extends PureComponent {
  render() {
    return (
      <Card
        content1={(
          <div>
            Tableau des communes par strate
          </div>
        )}
        subTitle="par taille de commune"
        title="Impact sur les communes"
      />
    );
  }
}
