import { PureComponent } from "react";

import { Card } from "../../../card";

// TODO: use the future state interface "Commune" from "types."
interface Props {
  name: string;
  departement: string;
}

export class CommuneType extends PureComponent<Props> {
  render() {
    const { departement, name } = this.props;
    return (
      <Card
        content1={(
          <div>
            Descriptif de la commune
          </div>
        )}
        content2={(
          <div>
            Résultat
          </div>
        )}
        subTitle={departement}
        title={name}
        onClose={() => {}}
        onEdit={() => {}}
      />
    );
  }
}
