import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

const BlueTooltip = withStyles(() => ({
  tooltip: {
    backgroundColor: "#00a3ff",
    color: "#ffffff",
    fontSize: "16px",
    maxWidth: 240,
  },
  tooltipPlacementBottom: {
    margin: "0px 0",
  },
}))(Tooltip);

export default BlueTooltip;
