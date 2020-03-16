import { ExpansionPanelSummary } from "@material-ui/core/ExpansionPanelSummary";
import { withStyles } from "@material-ui/core/styles";

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

LexExpansionPanelSummary.muiName = "ExpansionPanelSummary";

export default LexExpansionPanelSummary;
