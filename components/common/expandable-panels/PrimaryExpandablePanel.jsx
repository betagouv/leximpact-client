import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import styles from "./PrimaryExpandablePanel.module.scss";

export class PrimaryExpandablePanel extends PureComponent {
  static lastId = 0;

  constructor(props) {
    super(props);
    PrimaryExpandablePanel.lastId += 1;
    const { expanded } = this.props;
    this.state = { expanded, id: PrimaryExpandablePanel.lastId };
    this.onExpandedChange = this.onExpandedChange.bind(this);
  }

  onExpandedChange() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { children, subTitle, title } = this.props;
    const { expanded, id } = this.state;
    return (
      <div>
        <div
          aria-controls={`primary-panel${id}-content`}
          aria-disabled="false"
          aria-expanded={expanded}
          className={styles.header}
          id={`primary-panel${id}-header`}
          role="button"
          tabIndex="0"
          onClick={this.onExpandedChange}
          onKeyDown={e => e.key === "Enter" && this.onExpandedChange()}>
          <div className={styles.text}>
            <span className={styles.title}>{title}</span>
            <span className={styles.subTitle}>
              {subTitle && ` - ${subTitle}`}
            </span>
          </div>
          <div>
            <span aria-disabled="false" aria-hidden="true" className={styles.btn} type="button">
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </span>
          </div>
        </div>
        {expanded && (
          <div aria-labelledby={`primary-panel${id}-header`} className={styles.content} id={`primary-panel${id}-content`} role="region">
            {children}
          </div>
        )}
      </div>
    );
  }
}

PrimaryExpandablePanel.defaultProps = {
  expanded: false,
  subTitle: "",
};

PrimaryExpandablePanel.propTypes = {
  children: PropTypes.node.isRequired,
  expanded: PropTypes.bool,
  subTitle: PropTypes.string,
  title: PropTypes.string.isRequired,
};
