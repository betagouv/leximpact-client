import AddCircleOutline from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { PureComponent } from "react";

import styles from "./ExpandableText.module.scss";

interface Props {
  caption?: string;
}

interface State {
  expanded: boolean;
}

export class ExpandableText extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
    this.expand = this.expand.bind(this);
    this.reduce = this.reduce.bind(this);
  }

  expand() {
    this.setState({ expanded: true });
  }

  reduce() {
    this.setState({ expanded: false });
  }

  render() {
    const { expanded } = this.state;
    const { caption, children } = this.props;
    return (
      <span className={styles.text}>
        {expanded ? children : null}
        {
          expanded ? (
            <span
              role="button"
              tabIndex={0}
              onClick={this.reduce}
              onKeyDown={e => e.key === "Enter" && this.reduce()}>
              {" "}
              [ lire moins
              {" "}
              <RemoveCircleOutlineIcon />
              {" "}
              ]
            </span>
          ) : (
            <span
              role="button"
              tabIndex={0}
              onClick={this.expand}
              onKeyDown={e => e.key === "Enter" && this.expand()}>
              [
              {caption ?? "... lire plus"}
              {" "}
              <AddCircleOutline />
              {" "}
              ]
            </span>
          )
        }
      </span>
    );
  }
}
