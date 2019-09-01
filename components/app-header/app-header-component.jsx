import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LoginButton from "./login-button";
import LoginButtonMobile from "./login-button-mobile";
import HeaderMenuButton from "./menu-button";
import HeaderMenuButtonMobile from "./menu-button-mobile";

const styles = () => ({
  bolderMobileTitle: {
    fontSize: "25px,",
    fontWeight: "bold",
  },
  bolderTitle: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  lighterMobileTitle: {
    fontSize: "25px,",
    fontWeight: "regular",
  },
  lighterTitle: {
    fontSize: "36px",
    fontWeight: "lighter",
  },

  titleRoot: {
    color: "#FFFFFF",
    fontFamily: "Lato",
    textTransform: "uppercase",
  },
  toolbarRoot: {
    justifyContent: "space-between",
  },
});

class AppHeaderComponent extends PureComponent {
  render() {
    const { classes, isUserLogged, useMobileView } = this.props;
    return (
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          {useMobileView && <HeaderMenuButtonMobile />}
          {!useMobileView && <HeaderMenuButton />}
          {!useMobileView && (
            <Typography classes={{ root: classes.titleRoot }} component="div">
              {!isUserLogged && (
                <span>
                  <span className={classes.bolderTitle}>OPEN&nbsp;</span>
                  <span className={classes.lighterTitle}>LEXIMPACT</span>
                </span>
              )}
              {isUserLogged && (
                <span>
                  <span className={classes.lighterTitle}>LEXIMPACT&nbsp;</span>
                  <span className={classes.bolderTitle}>POP</span>
                </span>
              )}
            </Typography>
          )}
          {useMobileView && (
            <Typography classes={{ root: classes.titleRoot }} component="div">
              {!isUserLogged && (
                <span>
                  <span className={classes.bolderMobileTitle}>OPEN&nbsp;</span>
                  <span className={classes.lighterMobileTitle}>LEXIMPACT</span>
                </span>
              )}
              {isUserLogged && (
                <span>
                  <span className={classes.lighterMobileTitle}>
                    LEXIMPACT&nbsp;
                  </span>
                  <span className={classes.bolderMobileTitle}>POP</span>
                </span>
              )}
            </Typography>
          )}
          {isUserLogged && <div />}
          {!isUserLogged && !useMobileView && <LoginButton />}
          {!isUserLogged && useMobileView && <LoginButtonMobile />}
        </Toolbar>
      </AppBar>
    );
  }
}

AppHeaderComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  useMobileView: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AppHeaderComponent);
