import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LoginButton from "./login-button";
import HeaderMenuButton from "./menu-button";

const styles = () => ({
  bolderTitle: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  lighterTitle: {
    fontSize: "36px",
    fontWeight: "lighter",
  },
  bolderMobileTitle: {
    fontSize: "25px,",
    fontWeight: "bold",
  },
  lighterMobileTitle: {
    fontSize: "25px,",
    fontWeight: "regular",
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

class HeaderContainer extends PureComponent {
  render() {
    const { classes, isUserConnected, useMobileView } = this.props;
    const showLoginButton = process.env.NODE_ENV === "development";
    return (
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <HeaderMenuButton />
          {!useMobileView && (
            <Typography classes={{ root: classes.titleRoot }} component="div">
              {!isUserConnected && (
                <span>
                  <span className={classes.bolderTitle}>OPEN&nbsp;</span>
                  <span className={classes.lighterTitle}>LEXIMPACT</span>
                </span>
              )}
              {isUserConnected && (
                <span>
                  <span className={classes.lighterTitle}>LEXIMPACT&nbsp;</span>
                  <span className={classes.bolderTitle}>POP</span>
                </span>
              )}
            </Typography>
          )}
          {useMobileView && (
            <Typography classes={{ root: classes.titleRoot }} component="div">
              {!isUserConnected && (
                <span>
                  <span className={classes.bolderMobileTitle}>OPEN&nbsp;</span>
                  <span className={classes.lighterMobileTitle}>LEXIMPACT</span>
                </span>
              )}
              {isUserConnected && (
                <span>
                  <span className={classes.lighterMobileTitle}>LEXIMPACT&nbsp;</span>
                  <span className={classes.bolderMobileTitle}>POP</span>
                </span>
              )}
            </Typography>
          )}
          {(showLoginButton && <LoginButton />) || <div />}
        </Toolbar>
      </AppBar>
    );
  }
}

HeaderContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  isUserConnected: PropTypes.bool.isRequired,
  useMobileView: PropTypes.bool.isRequired,
};

export default withStyles(styles)(HeaderContainer);
