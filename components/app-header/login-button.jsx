import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import PropTypes from "prop-types";

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
