import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { Button } from "./button";
import { Legende } from "./legende";
import SimulationButton5 from "./simulation-button-5";
import SimulationButton60 from "./simulation-button-60";

const styles = () => ({
  container: {
    marginBottom: "15px",
  },
  marginIcon: {
    marginRight: "15px",
  },
  miniIcon: {
    height: "15px",
  },
});

class SimulationMenuBar extends PureComponent {
  render() {
    const {
      classes,
      isMobileView,
      isUserLogged,
      montrerPLF,
      showAddCasTypesPopin,
    } = this.props;
    return (
      <Grid
        container
        alignItems="center"
        className={classes.container}
        justify="space-between"
        spacing={8}>
        <Grid item>
          <Legende montrerPLF={montrerPLF} />
        </Grid>
        <Grid item>
          <Grid
            container
            alignItems="center"
            spacing={8}>
            <Grid item>
              <Button
                caption="Ajouter un cas type"
                isMobileView={isMobileView}
                mobileCaption="Cas type"
                mobileIcon={<AddCircleOutlineIcon />}
                type="secondary"
                onClick={showAddCasTypesPopin} />
            </Grid>
            <Grid item>
              <Grid
                container
                alignItems="center"
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
        </Grid>
      </Grid>
    );
  }
}

SimulationMenuBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  isMobileView: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  montrerPLF: PropTypes.bool.isRequired,
  showAddCasTypesPopin: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimulationMenuBar);
