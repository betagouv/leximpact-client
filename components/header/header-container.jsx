/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
    max-nested-callbacks: [2, { "max": 4 }]
*/
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Home from "components/header/home";
import Links from "components/header/links";
import MenuContainer from "components/header/menu-container";

const styles = {
  header: {
    width: "100%",
  },
  header__space: {
    flexGrow: 1,
  },
};

function HeaderContainer({ classes }) {
  return (
    <div className={classes.header}>
      <AppBar position="static">
        <Toolbar>
          <Home />
          <Links />
          <div className={classes.header__space} />
          <MenuContainer />
        </Toolbar>
      </AppBar>
    </div>
  );
}

HeaderContainer.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HeaderContainer);
