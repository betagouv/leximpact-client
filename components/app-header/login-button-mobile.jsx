import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import PropTypes from "prop-types";

import { showConnexionPopin } from "../actions";


const styles = () => ({
  button: {
    "&:hover": {
      color: "#FFFFFF",
    },
    backgroundColor: "#FFFFFF",
    color: "#646008",
    fontSize: "12px",
    textTransform: "uppercase",
  },
});

function LoginButtonMobile({ classes }) {
  return (
    <Button
      className={classes.button}
      color="primary"
      variant="contained"
      onClick={showConnexionPopin}
      size="small">
      <VPNKeyIcon />
    </Button>
  );
}

LoginButtonMobile.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default withStyles(styles)(LoginButtonMobile);
