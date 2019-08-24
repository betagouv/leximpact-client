import { Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Cached as CachedIcon } from "@material-ui/icons";
import PropTypes from "prop-types";
import { Component } from "react";

import SimulationOptionsButton from "./simulation-options-menu";
import SimulationOutilsButton from "./simulation-outils-menu";

const styles = () => ({
  container: {
    marginBottom: "15px",
  },
  styleIcon: {
    marginRight: "20px",
  },
});

class SimulationMenuBar extends Component {
  renderBoutonSimulation = () => {
    const {
      classes,
      handleSimulationClick,
      showSimulatioButtonAsMobile,
    } = this.props;
    return (
      <Grid item>
        <Button
          color="secondary"
          size="large"
          variant="contained"
          onClick={handleSimulationClick}>
          <CachedIcon className={classes.styleIcon} />
          {showSimulatioButtonAsMobile && "ESTIMER"}
          {!showSimulatioButtonAsMobile && "LANCER L'ESTIMATION"}
        </Button>
      </Grid>
    );
  };

  renderOutilsAffichage = () => {
    const {
      handleItemWithActionClick,
      optionsItems,
      outilsItems,
      showOptionsAsMobile,
      showOutilsAsMobile,
    } = this.props;
    return (
      <Grid item>
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between"
          spacing={24}>
          <Grid item>
            <SimulationOptionsButton
              itemMenuClickHandler={handleItemWithActionClick}
              items={optionsItems}
              showMobileView={showOptionsAsMobile}
            />
          </Grid>
          <Grid item>
            <SimulationOutilsButton
              itemMenuClickHandler={handleItemWithActionClick}
              items={outilsItems}
              showMobileView={showOutilsAsMobile}
            />
          </Grid>
        </Grid>
      </Grid>
    );
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

SimulationMenuBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleItemWithActionClick: PropTypes.func.isRequired,
  handleSimulationClick: PropTypes.func.isRequired,
  optionsItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  outilsItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  showOptionsAsMobile: PropTypes.bool.isRequired,
  showOutilsAsMobile: PropTypes.bool.isRequired,
  showSimulatioButtonAsMobile: PropTypes.bool.isRequired,
};

export default withStyles(styles)(SimulationMenuBar);
