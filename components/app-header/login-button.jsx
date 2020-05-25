import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { logOut, showConnexionPopin } from "../../redux/actions";

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

class LoginButton extends PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { isUserLogged } = this.props;
    if (isUserLogged) {
      logOut();
    } else {
      showConnexionPopin();
    }
  }

  render() {
    const { classes, isUserLogged } = this.props;
    return (
      <Button
        className={classes.button}
        color="primary"
        size="medium"
        variant="contained"
        onClick={this.onClick}>
        {isUserLogged
          ? <ExitToAppIcon classes={{ root: classes.avatarIcon }} />
          : <VPNKeyIcon classes={{ root: classes.avatarIcon }} />}
        {isUserLogged ? "Se déconnecter" : "Se connecter"}
      </Button>
    );
  }
}

LoginButton.propTypes = {
  classes: PropTypes.shape().isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LoginButton);
