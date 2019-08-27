import { Button, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Cached as CachedIcon } from "@material-ui/icons";
import { AccountBalance as AccountBalanceIcon } from "@material-ui/icons";
import { Face as FaceIcon } from "@material-ui/icons";
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
  marginIcon: {
    marginRight: "20px",
  },
  miniIcon: {
    height: "15px",
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
        <Grid
          container
          alignItems="center"
          direction="row"
          justify="space-between"
          spacing={8}>
          <Grid item>
            <Button
              color="secondary"
              size="medium"
              variant="contained"
              onClick={handleSimulationClick}>
              <FaceIcon
                className={classes.marginIcon}
                tag="cas type" />
              {showSimulatioButtonAsMobile && "ESTIMER"}
              {!showSimulatioButtonAsMobile && "ESTIMER ~5''"}
              <CachedIcon className={classes.miniIcon} />
            </Button>
          </Grid>
          <Grid item>
            <Button
              color="secondary"
              size="medium"
              variant="contained"
              onClick={handleSimulationClick}>
              <AccountBalanceIcon
                tag="macro" />
              <FaceIcon
                className={classes.marginIcon}
                tag="cas type" />
              {showSimulatioButtonAsMobile && "ESTIMER"}
              {!showSimulatioButtonAsMobile && "ESTIMER ~60''"}
              <CachedIcon className={classes.miniIcon} />
            </Button>
          </Grid>
        </Grid>
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
        justify="space-between"
        spacing={8}>
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
