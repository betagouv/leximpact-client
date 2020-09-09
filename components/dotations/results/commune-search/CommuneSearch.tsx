import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { addCommuneType } from "../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { Commune } from "../../../../redux/reducers/descriptions/dotations";
import { Card } from "../../../common";
import styles from "./CommuneSearch.module.scss";
import { SearchInput } from "./search-input";

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  add: (commune: Commune) => dispatch(addCommuneType(commune)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class CommuneSearch extends PureComponent<PropsFromRedux> {
  render() {
    const { add } = this.props;
    return (
      <Card
        title="Ajouter une nouvelle commune"
      >
        <div className={styles.container}>
          <SearchInput onChange={commune => add(commune)} />
        </div>
      </Card>
    );
  }
}

const Component = connector(CommuneSearch);

export { Component as CommuneSearch };
