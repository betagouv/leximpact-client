import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import PropTypes from "prop-types";

import { showEnSavoirPlusPopin } from "../../redux/actions";

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
