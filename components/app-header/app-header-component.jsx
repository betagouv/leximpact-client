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
    const { classes, isUserConnected } = this.props;
    const showLoginButton = process.env.NODE_ENV === "development";
    return (
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <HeaderMenuButton />
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
          {(showLoginButton && <LoginButton />) || <div />}
        </Toolbar>
      </AppBar>
    );
  }
}

HeaderContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
  isUserConnected: PropTypes.bool.isRequired,
};

export default withStyles(styles)(HeaderContainer);
