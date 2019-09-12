import { Tooltip } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const GreyTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#565656",
    color: "#ffffff",
    fontSize: "16px",
    maxWidth: 220,
  },
  tooltipPlacementBottom: {
    margin: "0px 0",
  },
}))(Tooltip);

export default GreyTooltip;
