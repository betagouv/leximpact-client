import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { PureComponent } from "react";

import styles from "./PrimaryExpandablePanel.module.scss";

interface Props {
  expanded?: boolean;
  subTitle?: string;
  title: string;
  icon?: JSX.Element;
}

interface State {
  expanded: boolean;
  id: number;
}

export class PrimaryExpandablePanel extends PureComponent<Props, State> {
  static lastId = 0;

  constructor(props) {
    super(props);
    PrimaryExpandablePanel.lastId += 1;
    const { expanded } = this.props;
    this.state = { expanded: !!expanded, id: PrimaryExpandablePanel.lastId };
    this.onExpandedChange = this.onExpandedChange.bind(this);
  }

  onExpandedChange() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const {
      children, icon, subTitle, title,
    } = this.props;
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
          tabIndex={0}
          onClick={this.onExpandedChange}
          onKeyDown={e => e.key === "Enter" && this.onExpandedChange()}>
          <div className={styles.text}>
            {icon && <span className={styles.icon}>{icon}</span>}
            <span className={styles.title}>{title}</span>
            <span className={styles.subTitle}>
              {subTitle && ` - ${subTitle}`}
            </span>
          </div>
          <div>
            <span aria-disabled="false" aria-hidden="true" className={styles.btn}>
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
