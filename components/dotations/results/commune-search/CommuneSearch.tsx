import { PureComponent } from "react";

import { Card } from "../../../card";
import { SearchInput } from "./search-input";

export class CommuneSearch extends PureComponent {
  render() {
    return (
      <Card
        content1={<SearchInput />}
        title="Ajouter une nouvelle commune"
      />
    );
  }
}
