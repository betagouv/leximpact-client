import { Fab } from "@material-ui/core/Fab";
import { Menu } from "@material-ui/core/Menu";
import { MenuItem } from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { MoreVert as MoreVertIcon } from "@material-ui/icons/MoreVert";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const styles = () => ({
  menuPaper: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
  },
});

class MUIDotMenu extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { anchorEl: null, selected: null };
  }

  handleOpenMenuClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenuClick = () => {
    this.setState({ anchorEl: null });
  };

  handleItemMenuClick = index => () => {
    const { clickHandler, items } = this.props;
    const clickedItem = items[index];
    this.setState({ selected: clickedItem.key }, () => {
      this.handleCloseMenuClick();
      clickHandler(clickedItem);
    });
  };

  render() {
    const { classes, id, items } = this.props;
    const { anchorEl, selected } = this.state;
    const open = Boolean(anchorEl);
    const ariaOwns = (open && id) || undefined;
    return (
      <div>
        <Fab
          aria-haspopup="true"
          aria-label="More"
          aria-owns={ariaOwns}
          color="default"
          size="small"
          variant="round"
          onClick={this.handleOpenMenuClick}>
          <MoreVertIcon />
        </Fab>
        <Menu
          anchorEl={anchorEl}
          // anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          classes={{ paper: classes.menuPaper }}
          id={id}
          open={open}
          PaperProps={{
            style: {
              backgroundColor: "rgba(255, 255, 255, 1) !important",
              maxHeight: 200,
              width: 200,
            },
          }}
          // transformOrigin={{ horizontal: "right", vertical: "top" }}
          onClose={this.handleCloseMenuClick}>
          {items.map((item, index) => {
            const isSelected = selected && selected === item.key;
            return (
              <MenuItem
                key={item.key}
                selected={isSelected}
                onClick={this.handleItemMenuClick(index)}>
                {item.Icon && <item.Icon />}
                {item.Icon && " "}
                {item.label}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
    );
  }
}

MUIDotMenu.propTypes = {
  classes: PropTypes.shape().isRequired,
  clickHandler: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      Icon: PropTypes.func,
      action: PropTypes.func.isRequired,
      disabled: PropTypes.bool,
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withStyles(styles)(MUIDotMenu);
