import { ExpansionPanelSummary } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const LexExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0,0,0,0)",
    borderBottom: "0px solid rgba(0,0,0,.125)",
    marginBottom: -1,
    minHeight: 32,
    "&$expanded": {
      minHeight: 20,
    },
  },
  content: {
    "&$expanded": {
      margin: "3px 0",
      padding: "1px",
    },
  },
  expanded: {},
})(props => <ExpansionPanelSummary {...props} />);

LexExpansionPanelSummary.muiName = "ExpansionPanelSummary";

export default LexExpansionPanelSummary;
