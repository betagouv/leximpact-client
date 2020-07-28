import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VPNKeyIcon from "@material-ui/icons/VpnKey";
import { PureComponent } from "react";

import { logOut, showConnexionPopin } from "../../../redux/actions";
import { HeaderButton } from "./header-button";

interface Props {
  isMobile: boolean;
  isUserLogged: boolean;
}

class LoginButton extends PureComponent<Props> {
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
    const { isMobile, isUserLogged } = this.props;
    return (
      <HeaderButton
        caption={isUserLogged ? "Se déconnecter" : "Se connecter"}
        icon={isUserLogged ? <ExitToAppIcon /> : <VPNKeyIcon />}
        isMobile={isMobile}
        onClick={this.onClick}
      />
    );
  }
}

export default LoginButton;
