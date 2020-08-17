import AddIcon from "@material-ui/icons/Add";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import classNames from "classnames";
import { PureComponent } from "react";

import styles from "./ItemExpandablePanel.module.scss";

interface Props {
  expanded?: boolean;
  title: string;
}

interface State {
  expanded: boolean;
  id: number;
}

export class ItemExpandablePanel extends PureComponent<Props, State> {
  static lastId = 0;

  constructor(props) {
    super(props);
    ItemExpandablePanel.lastId += 1;
    const { expanded } = this.props;
    this.state = { expanded: !!expanded, id: ItemExpandablePanel.lastId };
    this.onExpandedChange = this.onExpandedChange.bind(this);
  }

  onExpandedChange() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const {
      children, title,
    } = this.props;
    const { expanded, id } = this.state;
    return (
      <div>
        <div
          aria-controls={`primary-panel${id}-content`}
          aria-disabled="false"
          aria-expanded={expanded}
          className={classNames({
            [styles.header]: true,
            [styles.expanded]: expanded,
          })}
          id={`primary-panel${id}-header`}
          role="button"
          tabIndex={0}
          onClick={this.onExpandedChange}
          onKeyDown={e => e.key === "Enter" && this.onExpandedChange()}>
          <div className={styles.text}>
            {title}
          </div>
          <div>
            <span aria-disabled="false" aria-hidden="true" className={styles.btn}>
              {expanded ? <ExpandLessIcon /> : <AddIcon />}
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
