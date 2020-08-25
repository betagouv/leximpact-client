import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import styles from "./HelpWindow.module.scss";

interface Props {
  name: string;
  children: JSX.Element;
}

const mapStateToProps = ({ display }: RootState, { name }: Props) => ({
  isVisible: display.currentHelpWindow === name,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class HelpWindow extends PureComponent<PropsFromRedux & Props> {
  render() {
    const { children, isVisible } = this.props;

    if (!isVisible) {
      return null;
    }

    return <div className={styles.container}>{children}</div>;
  }
}

const Component = connector(HelpWindow);

export { Component as HelpWindow };
