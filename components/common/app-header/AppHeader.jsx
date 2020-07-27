import AppBar from "@material-ui/core/AppBar";
import { withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import LoginButton from "./login-button";
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

class AppHeader extends PureComponent {
  render() {
    const {
      classes, isUserLogged, showLoginButton, subTitle1, subTitle2, title, useMobileView,
    } = this.props;
    return (
      <AppBar position="relative">
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          {useMobileView && <HeaderMenuButtonMobile />}
          {!useMobileView && <HeaderMenuButton />}
          {!useMobileView && (
            <Typography classes={{ root: classes.titleRoot }} component="div">
              <div>
                <div className={classes.lighterTitle}>LEXIMPACT&nbsp;</div>
                {title && <div className={classes.bolderTitle}>{title}</div>}
                {subTitle1 && (
                  <div className={classes.subTitle}>
                    {subTitle1}
                    <br />
                    {subTitle2}
                  </div>
                )}
              </div>
            </Typography>
          )}
          {useMobileView && (
            <Typography classes={{ root: classes.titleRoot }} component="div">
              <span>
                <span className={classes.lighterMobileTitle}>
                  LEXIMPACT&nbsp;
                </span>
                {title && <span className={classes.bolderMobileTitle}>{title}</span>}
              </span>
            </Typography>
          )}
          {showLoginButton && <LoginButton isMobile={useMobileView} isUserLogged={isUserLogged} />}
          {!showLoginButton && <div />}
        </Toolbar>
      </AppBar>
    );
  }
}

AppHeader.defaultProps = {
  subTitle1: null,
  subTitle2: null,
  title: null,
};

AppHeader.propTypes = {
  classes: PropTypes.shape().isRequired,
  isUserLogged: PropTypes.bool.isRequired,
  showLoginButton: PropTypes.bool.isRequired,
  subTitle1: PropTypes.string,
  subTitle2: PropTypes.string,
  title: PropTypes.string,
  useMobileView: PropTypes.bool.isRequired,
};

export default withStyles(styles)(AppHeader);
