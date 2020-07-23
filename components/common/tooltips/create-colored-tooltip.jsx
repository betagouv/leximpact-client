import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";

function TooltipWithDefaultProps(props) {
  return (
    <Tooltip
      enterDelay={300}
      leaveDelay={200}
      {...props} />
  );
}

export function createColoredTooltip(backgroundColor, color = "#ffffff") {
  return withStyles(() => ({
    tooltip: {
      backgroundColor,
      color,
      fontSize: "16px",
      maxWidth: 240,
    },
    tooltipPlacementBottom: {
      margin: "0px 0",
    },
  }))(TooltipWithDefaultProps);
}
