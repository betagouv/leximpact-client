import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const BlueTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#00a3ff",
    color: "#ffffff",
    fontSize: theme.typography.pxToRem(12),
    maxWidth: 220,
  },
  tooltipPlacementBottom: {
    margin: "0px 0",
  },
}))(Tooltip);

export default BlueTooltip;
