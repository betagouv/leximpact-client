import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import styles from "./PrimaryExpandablePanel.module.scss";

export class PrimaryExpandablePanel extends PureComponent {
  constructor(props) {
    super(props);
    const { expanded } = this.props;
    this.state = { expanded };
    this.onExpandedChange = this.onExpandedChange.bind(this);
  }

  onExpandedChange() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { children, subTitle, title } = this.props;
    const { expanded } = this.state;
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
            <button className={styles.btn} type="button" onClick={this.onExpandedChange}>
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

PrimaryExpandablePanel.defaultProps = {
  expanded: false,
};

PrimaryExpandablePanel.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  subTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
