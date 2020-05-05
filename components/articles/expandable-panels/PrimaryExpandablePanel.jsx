import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import styles from "./PrimaryExpandablePanel.module.scss";

export class PrimaryExpandablePanel extends PureComponent {
  constructor(props) {
    super(props);
    this.onExpand = this.onExpand.bind(this);
  }

  onExpand() {
    const { onExpandedChange } = this.props;
    onExpandedChange(!this.expanded);
  }

  render() {
    const {
      children, expanded, subTitle, title,
    } = this.props;
    return (
      <div>
        <div className={styles.header}>
          <div className={styles.text}>
            <span className={styles.title}>{title}</span>
            <span className={styles.subTitle}>
              {" "}
              -
              {" "}
              {subTitle}
            </span>
          </div>
          <div>
            <button className={styles.btn} type="button" onClick={this.onExpand}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
          </div>
        </div>
        {expanded && (
          <div className={styles.content}>
            {children}
          </div>
        )}
      </div>
    );
  }
}

PrimaryExpandablePanel.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool.isRequired,
  onExpandedChange: PropTypes.func.isRequired,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
