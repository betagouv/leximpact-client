import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { logOut, showConnexionPopin } from "../../../redux/actions";

const styles = () => ({
  menuButtonRoot: {
    color: "#FFFFFF",
  },
});

class LoginButtonMobile extends PureComponent {
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
        className={classes.menuButtonRoot}
        onClick={this.onClick}>
        {isUserLogged ? <ExitToAppIcon /> : <VPNKeyIcon />}
      </Button>
    );
  }
}

LoginButtonMobile.propTypes = {
  classes: PropTypes.shape().isRequired,
  isUserLogged: PropTypes.bool.isRequired,
};

export default withStyles(styles)(LoginButtonMobile);
