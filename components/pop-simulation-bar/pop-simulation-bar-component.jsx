import { Button, Fab, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import {
  Share as ShareIcon,
  ViewQuilt as ViewQuiltIcon,
} from "@material-ui/icons";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { MuiSplitButton } from "../mui-extras-components";

const styles = {
  container: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "68px",
  },
  leftColumn: {
    flex: 0,
    flexWrap: "nowrap",
  },
  menuPaper: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
  },
  rightColumn: {
    alignItems: "center",
    display: "flex",
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    width: "auto",
  },
  roundedButton: {
    marginRight: "24px",
  },
  roundedButtonDisabled: {
    backgroundColor: "rgba(225, 225, 225, 1) !important",
  },
};

class PopSimulationBar extends PureComponent {
  constructor(props) {
    super(props);
    const selected = props.menuItems[0];
    this.state = { selected };
  }

  handlerMenuListItemClick = (handleClose, selected) => () => {
    this.setState({ selected }, handleClose);
  };

  renderMenuListItems = ({ handleClose }) => {
    const { menuItems } = this.props;
    return menuItems.map((listObj) => {
      const { disabled, key, label } = listObj;
      const { selected } = this.state;
      const uniqKey = `menu-list-item::${key}`;
      const isCurrentSelected = key === selected.key;
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
    const { classes, handleMenuClick, handleSimulationClick } = this.props;
    const { selected } = this.state;
    return (
      <div className={classes.container}>
        <div className={classes.leftColumn}>
          <Button
            color="secondary"
            size="large"
            variant="contained"
            onClick={handleSimulationClick}>
            LANCER&nbsp;LA&nbsp;SIMULATION
          </Button>
        </div>
        <div className={classes.rightColumn}>
          <Fab
            disabled
            aria-label="Espace de travail"
            classes={{ disabled: classes.roundedButtonDisabled }}
            className={classes.roundedButton}
            color="primary"
            size="small"
            variant="round">
            <ViewQuiltIcon />
          </Fab>
          <Fab
            disabled
            aria-label="Partager"
            classes={{ disabled: classes.roundedButtonDisabled }}
            className={classes.roundedButton}
            color="primary"
            size="small"
            variant="round">
            <ShareIcon />
          </Fab>
          <MuiSplitButton
            menuProps={{
              classes: { paper: classes.menuPaper },
            }}
            renderMenu={this.renderMenuListItems}
            size="medium"
            variant="contained"
            onClick={() => handleMenuClick(selected)}>
            {selected.label}
          </MuiSplitButton>
        </div>
      </div>
    );
  }
}

PopSimulationBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleMenuClick: PropTypes.func.isRequired,
  handleSimulationClick: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      action: PropTypes.func.isRequired,
      disabled: PropTypes.bool.isRequired,
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withStyles(styles)(PopSimulationBar);
