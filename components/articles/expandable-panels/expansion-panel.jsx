import { ExpansionPanel } from "@material-ui/core/ExpansionPanel";
import { withStyles } from "@material-ui/core/styles";

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

export default LexExpansionPanel;
