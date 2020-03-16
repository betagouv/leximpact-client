import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const BlueTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: "#FF6B6B",
    color: "#ffffff",
    fontSize: "16px",
    maxWidth: 240,
  },
  tooltipPlacementBottom: {
    margin: "0px 0",
  },
}))(Tooltip);

export default BlueTooltip;
