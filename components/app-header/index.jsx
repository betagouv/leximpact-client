/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2]
*/
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
  AppBar, Button, Toolbar, Typography,
} from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import Router from "next/router";

const styles = () => ({
  toolbarRoot: {
    justifyContent: "space-between",
  },
  menuButtonRoot: {
    color: "#FFFFFF",
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
  handleMenuButtonClick = () => {
    Router.push({
      pathname: "/",
      query: { showMentionsLegales: "1" },
    });
  }

  render() {
    const { classes, isUserLogged } = this.props;
    return (
      <AppBar position="static">
        <Toolbar classes={{ root: classes.toolbarRoot }}>
          <Button
            classes={{ root: classes.menuButtonRoot }}
            onClick={this.handleMenuButtonClick}
          >
            <MenuIcon fontSize="small" />
            &nbsp;Menu
          </Button>
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
          <div>{/* LoginButton */}</div>
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
