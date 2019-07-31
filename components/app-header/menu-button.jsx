/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }]
*/
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Button } from "@material-ui/core";

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
      onClick={showEnSavoirPlusPopin}
    >
      <MenuIcon fontSize="small" />
      &nbsp;Menu
    </Button>
  );
}

HeaderMenuButton.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(HeaderMenuButton);
