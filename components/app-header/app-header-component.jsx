import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LoginButton from "./login-button";
import LoginButtonMobile from "./login-button-mobile";
import HeaderMenuButton from "./menu-button";
import HeaderMenuButtonMobile from "./menu-button-mobile";

const styles = () => ({
  bolderMobileTitle: {
    fontSize: 17,
    fontWeight: "bold",
  },
  bolderTitle: {
    fontSize: 36,
    fontWeight: "bold",
  },
  lighterMobileTitle: {
    fontSize: 17,
    fontWeight: "regular",
  },
  lighterTitle: {
    fontSize: 36,
    fontWeight: "lighter",
  },
  loginButtonMobilePlaceholder: {
    minWidth: 64,
  },
  loginButtonPlaceholder: {
    minWidth: 190,
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
          {/* bouton connection mode desktop */}
          {!isUserLogged && !useMobileView && <LoginButton />}
          {/* no bouton mode desktop */}
          {isUserLogged && !useMobileView && (
            <div className={classes.loginButtonPlaceholder} />
          )}
          {/* bouton connection mode mobile */}
          {!isUserLogged && useMobileView && <LoginButtonMobile />}
          {/* no bouton mode mobile */}
          {isUserLogged && useMobileView && (
            <div className={classes.loginButtonMobilePlaceholder} />
          )}
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
