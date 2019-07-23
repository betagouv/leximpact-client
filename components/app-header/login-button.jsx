/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2]
*/
import Router from "next/router";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import { withStyles } from "@material-ui/core/styles";

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

function handleButtonClick() {
  Router.push({
    pathname: "/",
    query: { showLoginPopup: "1" },
  });
}

function LoginButton({ classes }) {
  return (
    <Button
      size="medium"
      color="primary"
      variant="contained"
      className={classes.button}
      onClick={handleButtonClick}
    >
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
