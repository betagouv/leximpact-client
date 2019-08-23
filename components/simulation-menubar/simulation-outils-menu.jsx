import { MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { MUIDropdownMenu } from "../mui-extras-components";

const styles = () => ({
  menuPaper: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
  },
});

class SimulationOutilsMenu extends PureComponent {
  constructor(props) {
    super(props);
    const selected = props.items[0];
    this.state = { selected };
  }

  handlerMenuListItemClick = (handleClose, selected) => () => {
    this.setState({ selected }, handleClose);
  };

  renderMenuListItems = ({ handleClose }) => {
    const { items } = this.props;
    return items.map((listObj) => {
      const { disabled, key, label } = listObj;
      const { selected } = this.state;
      const uniqKey = `menu-list-item::${key}`;
      const isCurrentSelected = selected && selected.key === key;
      return (
        <MenuItem
          key={uniqKey}
          disabled={disabled}
          selected={isCurrentSelected}
          onClick={this.handlerMenuListItemClick(handleClose, listObj)}>
          {label}
        </MenuItem>
      );
    });
  };

  render() {
    const { selected } = this.state;
    const { classes, itemMenuClickHandler, showMobileView } = this.props;
    const menuProps = { classes: { paper: classes.menuPaper } };
    return (
      <MUIDropdownMenu
        menuProps={menuProps}
        renderMenu={this.renderMenuListItems}
        size="medium"
        variant="contained"
        onClick={() => itemMenuClickHandler(selected)}>
        {showMobileView && selected.Icon && <selected.Icon />}
        {showMobileView && selected.Icon && " "}
        {(showMobileView && selected.shortLabel) || selected.label}
      </MUIDropdownMenu>
    );
  }
}

SimulationOutilsMenu.propTypes = {
  classes: PropTypes.shape().isRequired,
  itemMenuClickHandler: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.func.isRequired,
      disabled: PropTypes.bool.isRequired,
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  showMobileView: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SimulationOutilsMenu);
