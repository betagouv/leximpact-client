import { Grid } from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import SimulationButton5 from "./simulation-button-5";
import SimulationButton60 from "./simulation-button-60";
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

class SimulationMenuBar extends PureComponent {
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
    const { classes, isUserLogged } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        className={classes.container}
        direction="row"
        justify="space-between"
        spacing={8}>
        {this.renderOutilsAffichage()}
        <Grid item>
          <Grid
            container
            alignItems="center"
            direction="row"
            justify="space-between"
            spacing={8}>
            <Grid item>
              <SimulationButton5 classes={classes} />
            </Grid>
            {isUserLogged && (
              <Grid item>
                <SimulationButton60 classes={classes} />
              </Grid>
            )}
          </Grid>
        </Grid>
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
