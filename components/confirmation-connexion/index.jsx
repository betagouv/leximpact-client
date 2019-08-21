import { PureComponent } from "react";
import PropTypes from "prop-types";
import { flow, get } from "lodash";
import Cookies from "js-cookie";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import partyPopper from "@iconify/icons-twemoji/party-popper";
import peopleHoldingHands from "@iconify/icons-twemoji/people-holding-hands";
import classicalBuilding from "@iconify/icons-twemoji/classical-building";
/* * import parachuteIcon from "@iconify/icons-twemoji/parachute"; * */

const styles = {
  h1Style: {
    fontFamily: "Lato",
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000000",
    marginBottom: "20px",
    textAlign: "center",
  },
  pStyle: {
    fontFamily: "Lato",
    fontSize: "18px",
    color: "#000000",
    marginBottom: "40px",
    marginLeft: "40px",
  },
};

class ConfirmationConnexion extends PureComponent {
  componentDidMount() {
    // obtient le token de connexion depuis l'URL
    const { router } = this.props;
    const token = get(router, "query.token", false);
    Cookies.set("token", token);
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <h1 className={classes.h1Style}>
          <Icon inline icon={partyPopper} width="40" />
          &nbsp;Vous êtes bien connectés à LexImpact POP&nbsp;
        </h1>
        <p className={classes.pStyle}>
          Vous pouvez désormais
          <b>&nbsp;simuler les impacts macros&nbsp;</b>
          d’une réforme
          <br />
          sur la population&nbsp;
          <Icon inline icon={peopleHoldingHands} width="25" />
          &nbsp;et les recettes de l’État&nbsp;
          <Icon inline icon={classicalBuilding} width="25" />
          <span>.</span>
        </p>
      </div>
    );
  }
}

ConfirmationConnexion.propTypes = {
  classes: PropTypes.shape().isRequired,
  router: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRouter,
)(ConfirmationConnexion);
