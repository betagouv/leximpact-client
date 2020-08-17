import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { Card } from "../../../common";
import { SearchInput } from "./search-input";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class CommuneSearch extends PureComponent<PropsFromRedux> {
  render() {
    return (
      <Card
        title="Ajouter une nouvelle commune"
      >
        <div>
          <SearchInput onChange={commune => console.log(commune)} />
        </div>
      </Card>
    );
  }
}

const Component = connector(CommuneSearch);

export { Component as CommuneSearch };
