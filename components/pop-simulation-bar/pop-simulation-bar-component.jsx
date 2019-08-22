import { Button, Grid, MenuItem } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { Component } from "react";

import { MuiSplitButton } from "../mui-extras-components";
import PopMenuShareButton from "./pop-menu-share-button";
import PopMenuWorkspaceButton from "./pop-menu-workspace-button";

const styles = () => ({
  container: {
    marginBottom: "68px",
  },
  menuPaper: {
    backgroundColor: "rgba(255, 255, 255, 1) !important",
  },
});

class PopSimulationBar extends Component {
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

  renderBoutonSimulation = () => {
    const { handleSimulationClick, useMobileView } = this.props;
    return (
      <Grid item>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          onClick={handleSimulationClick}>
          {useMobileView && "toto"}
          {!useMobileView && "LANCER LA SIMULATION"}
        </Button>
      </Grid>
    )
  };

  renderOutilsAffichage = () => {
    const { selected } = this.state;
    const { classes, handleMenuClick } = this.props;
    return (
      <Grid item>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between">
          <PopMenuShareButton />
          <PopMenuWorkspaceButton />
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
        </Grid>
      </Grid>
    )
  };


  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        className={classes.container}
        direction="row"
        justify="space-between">
        {this.renderOutilsAffichage()}
        {this.renderBoutonSimulation()}
      </Grid>
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
