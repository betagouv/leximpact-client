import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import PropTypes from "prop-types";
import { Fragment, PureComponent } from "react";

import { Legende } from "./legende";
import SimulationButton5 from "./simulation-button-5";
import SimulationButton60 from "./simulation-button-60";
import styles2 from "./simulation-menubar-component.module.scss";

const styles = () => ({
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
      classes, isMobileView,
      isUserLogged,
      showAddCasTypesPopin,
    } = this.props;
    return (
      <div className={styles2.container}>
        <div className={styles2.box}>
          <Legende montrerPLF={false} />
          <div className={styles2.grow} />
          <Button
            color="default"
            variant="contained"
            onClick={showAddCasTypesPopin}
          >
            {
              isMobileView
                ? (
                  <Fragment>
                    <AddCircleOutlineIcon className={classes.marginIcon} />
                    <span>Cas type</span>
                  </Fragment>
                )
                : "Ajouter un cas type"
            }
          </Button>
          <SimulationButton5 classes={classes} />
          {isUserLogged && (
            <SimulationButton60 classes={classes} />
          )}
        </div>
      </div>
    );
  }
}

SimulationMenuBar.propTypes = {
  classes: PropTypes.shape().isRequired,
  isMobileView: PropTypes.bool.isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  showAddCasTypesPopin: PropTypes.func.isRequired,
};

export default withStyles(styles)(SimulationMenuBar);
