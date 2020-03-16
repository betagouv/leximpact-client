import { Fab } from "@material-ui/core/Fab";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { MUIDotMenu } from "../mui-extras-components";

const styles = () => ({
  roundedButton: {
    marginRight: "24px",
  },
  roundedButtonDisabled: {
    backgroundColor: "rgba(225, 225, 225, 1) !important",
  },
});

class SimulationOptionsMenu extends PureComponent {
  renderMenuIconButton = (item) => {
    const { classes, itemMenuClickHandler } = this.props;
    const {
      Icon, disabled, key, label,
    } = item;
    const isDisabled = (disabled !== undefined && disabled) || true;
    return (
      <Fab
        key={key}
        aria-label={label}
        classes={{ disabled: classes.roundedButtonDisabled }}
        className={classes.roundedButton}
        color="primary"
        disabled={isDisabled}
        size="small"
        variant="round"
        onClick={() => itemMenuClickHandler(item)}>
        <Icon />
      </Fab>
    );
  };

  render() {
    const { itemMenuClickHandler, items, showMobileView } = this.props;
    if (!showMobileView) return items.map(this.renderMenuIconButton);
    return (
      <MUIDotMenu
        clickHandler={itemMenuClickHandler}
        id="simpop-dot-menu"
        items={items}
      />
    );
  }
}

SimulationOptionsMenu.propTypes = {
  classes: PropTypes.shape().isRequired,
  itemMenuClickHandler: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.func.isRequired,
    }),
  ).isRequired,
  showMobileView: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SimulationOptionsMenu);
