import { ExpansionPanel } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const LexExpansionPanel = withStyles({
  root: {
    border: "0px solid rgba(0,0,0,.125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  },
  expanded: {
    margin: "auto",
    padding: "1px",
  },
})(ExpansionPanel);

export default LexExpansionPanel;
