import { PureComponent } from "react";

import { Card } from "../../../card";

export class CommuneSearch extends PureComponent {
  render() {
    return (
      <Card
        content1={(
          <div>
            Barre de recherche
          </div>
        )}
        title="Ajouter une nouvelle commune"
      />
    );
  }
}
