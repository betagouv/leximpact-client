/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import { withStyles } from "@material-ui/core/styles";

import { showConnexionPopin } from "../actions";

const styles = () => ({
  avatarIcon: {
    marginRight: "9px",
  },
  button: {
    color: "#646008",
    fontSize: "16px",
    backgroundColor: "#FFFFFF",
    textTransform: "uppercase",
    "&:hover": {
      color: "#FFFFFF",
    },
  },
});

function LoginButton({ classes }) {
  return (
    <Button
      size="medium"
      color="primary"
      variant="contained"
      className={classes.button}
      onClick={showConnexionPopin}>
      <VPNKeyIcon classes={{ root: classes.avatarIcon }} />
      <span>leximpact&nbsp;</span>
      <b>pop</b>
    </Button>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(LoginButton);
