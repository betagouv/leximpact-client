import CloseIcon from "@material-ui/icons/Close";
// eslint-disable-next-line no-unused-vars
import { createRef, PureComponent, RefObject } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { hideHelpWindow } from "../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import styles from "./HelpWindow.module.scss";

interface Props {
  name: string;
  title: string;
  children: JSX.Element;
}

const mapStateToProps = ({ display }: RootState, { name }: Props) => ({
  isVisible: display.currentHelpWindow === name,
});

const mapDispatchToProps = dispatch => ({
  close: () => dispatch(hideHelpWindow()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class HelpWindow extends PureComponent<PropsFromRedux & Props> {
  backgroundElement: RefObject<any>;

  constructor(props) {
    super(props);
    this.backgroundElement = createRef();
  }

  render() {
    const {
      children, close, isVisible, title,
    } = this.props;

    if (!isVisible) {
      return null;
    }

    return (
      // eslint-disable-next-line
      <div
        ref={this.backgroundElement}
        className={styles.container}
        onClick={({ target }) => target === this.backgroundElement.current && close()}
      >
        <div className={styles.window}>
          <div className={styles.header}>
            <span>{title}</span>
            <CloseIcon className={styles.close} fontSize="large" onClick={close} />
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

const Component = connector(HelpWindow);

export { Component as HelpWindow };
