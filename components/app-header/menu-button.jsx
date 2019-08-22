import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

import { showEnSavoirPlusPopin } from "../actions";

const styles = {
  menuButtonRoot: {
    color: "#FFFFFF",
  },
};

function HeaderMenuButton({ classes }) {
  return (
    <Button
      classes={{ root: classes.menuButtonRoot }}
      onClick={showEnSavoirPlusPopin}>
      <MenuIcon fontSize="small" />
      &nbsp;Menu
    </Button>
  );
}

HeaderMenuButton.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HeaderMenuButton);
