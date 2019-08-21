import { ExpansionPanelDetails } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const LexExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(ExpansionPanelDetails);

export default LexExpansionPanelDetails;
