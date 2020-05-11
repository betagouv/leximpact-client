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
    display: "inline-block",
    fontSize: 36,
    fontWeight: "bold",
  },
  lighterMobileTitle: {
    fontSize: 17,
    fontWeight: "regular",
  },
  lighterTitle: {
    display: "inline-block",
    fontSize: 36,
    fontWeight: "lighter",
  },
  subTitle: {
    display: "inline-block",
    fontSize: "13px",
    fontWeight: "bold",
    lineHeight: 1.2,
    marginLeft: "10px",
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
      <AppBar position="relative">
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          {useMobileView && <HeaderMenuButtonMobile />}
          {!useMobileView && <HeaderMenuButton />}
          {!useMobileView && (
            <Typography classes={{ root: classes.titleRoot }} component="div">
              <div>
                <div className={classes.lighterTitle}>LEXIMPACT&nbsp;</div>
                <div className={classes.bolderTitle}>IR</div>
                <div className={classes.subTitle}>
                  IMPÔT SUR
                  <br />
                  LE REVENU
                </div>
              </div>
            </Typography>
          )}
          {useMobileView && (
            <Typography classes={{ root: classes.titleRoot }} component="div">
              <span>
                <span className={classes.lighterMobileTitle}>
                  LEXIMPACT&nbsp;
                </span>
                <span className={classes.bolderMobileTitle}>IR</span>
              </span>
            </Typography>
          )}
          {!useMobileView && <LoginButton isUserLogged={isUserLogged} />}
          {useMobileView && <LoginButtonMobile isUserLogged={isUserLogged} />}
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
