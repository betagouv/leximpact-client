import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import PropTypes from "prop-types";

import { showConnexionPopin } from "../../redux/actions";

const styles = () => ({
  avatarIcon: {
    marginRight: "9px",
  },
  button: {
    "&:hover": {
      color: "#FFFFFF",
    },
    backgroundColor: "#FFFFFF",
    color: "#646008",
    fontSize: "16px",
    textTransform: "uppercase",
  },
});

function LoginButton({ classes }) {
  return (
    <Button
      className={classes.button}
      color="primary"
      size="medium"
      variant="contained"
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
