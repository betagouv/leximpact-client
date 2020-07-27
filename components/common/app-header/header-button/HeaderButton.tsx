import Button from "@material-ui/core/Button";
import { PureComponent } from "react";

import styles from "./HeaderButton.module.scss";

interface Props {
  caption?: string;
  icon: JSX.Element;
  isMobile: boolean;
  onClick: () => void;
}

export class HeaderButton extends PureComponent<Props> {
  render() {
    const {
      caption, icon, isMobile, onClick,
    } = this.props;
    return (
      <Button
        onClick={onClick}>
        <span className={styles.icon}>{icon}</span>
        {caption && !isMobile && <span className={styles.text}>{caption}</span>}
      </Button>
    );
  }
}
