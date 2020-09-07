import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { showHelpWindow } from "../../../redux/actions";
import styles from "./HelpButton.module.scss";

interface Props {
  name: string
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, { name } : Props) => ({
  showHelp: () => dispatch(showHelpWindow(name)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

class HelpButton extends PureComponent<PropsFromRedux & Props> {
  render() {
    const { showHelp } = this.props;
    return (
      <HelpOutlineIcon
        className={styles.btn}
        onClick={showHelp} />
    );
  }
}

const Component = connector(HelpButton);

export { Component as HelpButton };
