import { PureComponent } from "react";

import { Card } from "../../../card";

export class CommuneSummary extends PureComponent {
  render() {
    return (
      <Card
        content1={(
          <div>
            Résultats globaux
          </div>
        )}
        title="Nombre de communes éligibles"
      />
    );
  }
}
