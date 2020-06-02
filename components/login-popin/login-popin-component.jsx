import ClassicalBuildingIcon from "@iconify/icons-twemoji/classical-building";
import PartyPopperIcon from "@iconify/icons-twemoji/party-popper";
import PeopleHoldingHandsIcon from "@iconify/icons-twemoji/people-holding-hands";
import { Icon } from "@iconify/react";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const styles = {
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  h1Style: {
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
  },
  pStyle: {
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "18px",
    marginBottom: "40px",
    marginLeft: "40px",
  },
};

class LoginPopinComponent extends PureComponent {
  componentDidMount() {
    const { handleUpdateConnexionToken, token } = this.props;
    if (!token) return;
    handleUpdateConnexionToken(token);
  }

  render() {
    const { classes, onClosePopin } = this.props;
    return (
      <div className="container">
        <IconButton className={classes.closeButton} onClick={onClosePopin}>
          <CloseIcon fontSize="small" />
        </IconButton>
        <h1 className={classes.h1Style}>
          <Icon inline icon={PartyPopperIcon} width="40" />
          &nbsp;Vous êtes bien connectés à LexImpact IR&nbsp;
        </h1>
        <p className={classes.pStyle}>
          Vous pouvez désormais
          <b>&nbsp;simuler les impacts macros&nbsp;</b>
          d’une réforme
          <br />
          sur la population&nbsp;
          <Icon inline icon={PeopleHoldingHandsIcon} width="25" />
          &nbsp;et les recettes de l’État&nbsp;
          <Icon inline icon={ClassicalBuildingIcon} width="25" />
          <span>.</span>
        </p>
      </div>
    );
  }
}

LoginPopinComponent.defaultProps = {
  token: null,
};

LoginPopinComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleUpdateConnexionToken: PropTypes.func.isRequired,
  onClosePopin: PropTypes.func.isRequired,
  token: PropTypes.string,
};

export default withStyles(styles)(LoginPopinComponent);
