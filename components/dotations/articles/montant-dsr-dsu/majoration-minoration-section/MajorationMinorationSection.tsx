import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
import { MajorationMinorationPanel } from "./majoration-minoration-panel";
import { MajorationMinorationText } from "./majoration-minoration-text";

const mapStateToProps = ({ parameters }: RootState) => ({
  arePanelsVisible: parameters.amendement.dotations.montants.dsr.variation === 0,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class MajorationMinorationSection extends PureComponent<PropsFromRedux> {
  render() {
    const { arePanelsVisible } = this.props;
    return (
      <div>
        <MajorationMinorationText />
        {
          arePanelsVisible && (
            <div>
              <MajorationMinorationPanel type="majoration" />
              <MajorationMinorationPanel type="minoration" />
            </div>
          )
        }
      </div>
    );
  }
}

const Component = connector(MajorationMinorationSection);

export { Component as MajorationMinorationSection };
