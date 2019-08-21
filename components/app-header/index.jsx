import { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import HeaderMenuButton from "./menu-button";
import LoginButton from "./login-button";

const styles = () => ({
  toolbarRoot: {
    justifyContent: "space-between",
  },
  titleRoot: {
    color: "#FFFFFF",
    fontSize: "36px",
    fontFamily: "Lato",
    textTransform: "uppercase",
  },
  lighterTitle: {
    fontWeight: "lighter",
  },
  bolderTitle: {
    fontWeight: "bold",
  },
});

class HeaderContainer extends PureComponent {
  render() {
    const { classes, isUserLogged } = this.props;
    const showLoginButton = process.env.NODE_ENV === "development";
    return (
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <HeaderMenuButton />
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
          {showLoginButton && <LoginButton />}
        </Toolbar>
      </AppBar>
    );
  }
}

HeaderContainer.defaultProps = {
  isUserLogged: false,
};

HeaderContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  isUserLogged: PropTypes.bool,
};

export default withStyles(styles)(HeaderContainer);
