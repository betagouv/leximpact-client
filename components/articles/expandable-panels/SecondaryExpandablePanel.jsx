import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import { withStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import styles from "./SecondaryExpandablePanel.module.scss";

const LexExpansionPanelSummary = withStyles({
  content: {
    "&$expanded": {
      margin: "3px 0",
      padding: "1px",
    },
  },
  expanded: {},
  root: {
    "&$expanded": {
      minHeight: 20,
    },
    backgroundColor: "rgba(0,0,0,0)",
    borderBottom: "1px solid rgba(177,177,177,0.50)",
    height: 32,
    marginBottom: -1,
  },
})(props => <ExpansionPanelSummary {...props} />);

const LexExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(ExpansionPanelDetails);


LexExpansionPanelSummary.muiName = "ExpansionPanelSummary";

const LexExpansionPanel = withStyles({
  expanded: {
    margin: "auto",
    padding: "1px",
  },
  root: {
    "&:before": {
      display: "none",
    },
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    border: "0px solid rgba(0,0,0,.125)",
    boxShadow: "none",
  },
})(ExpansionPanel);

export class SecondaryExpandablePanel extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
    this.onExpandedChange = this.onExpandedChange.bind(this);
  }

  onExpandedChange() {
    const { expanded } = this.state;
    this.setState({ expanded: !expanded });
  }

  render() {
    const { children, title } = this.props;
    const { expanded } = this.state;
    return (
      <LexExpansionPanel
        square
        expanded={expanded}
        onChange={this.onExpandedChange}>
        <LexExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}>
          <span className={styles.title}>
            {title}
          </span>
        </LexExpansionPanelSummary>
        <LexExpansionPanelDetails>
          <div className={styles.content}>
            {children}
          </div>
        </LexExpansionPanelDetails>
      </LexExpansionPanel>
    );
  }
}

SecondaryExpandablePanel.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
