import classicalBuilding from "@iconify/icons-twemoji/classical-building";
import partyPopper from "@iconify/icons-twemoji/party-popper";
import peopleHoldingHands from "@iconify/icons-twemoji/people-holding-hands";
import { Icon } from "@iconify/react";
import { withStyles } from "@material-ui/core/styles";
import { flow, get } from "lodash";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { PureComponent } from "react";
/* * import parachuteIcon from "@iconify/icons-twemoji/parachute"; * */

const styles = {
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

class ConfirmationConnexionComponent extends PureComponent {
  componentDidMount() {
    const { handleUpdateConnexionToken, router } = this.props;
    // obtient le token de connexion depuis l'URL
    const token = get(router, "query.token", false);
    handleUpdateConnexionToken(token);
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

ConfirmationConnexionComponent.propTypes = {
  classes: PropTypes.shape().isRequired,
  handleUpdateConnexionToken: PropTypes.func.isRequired,
  router: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRouter,
)(ConfirmationConnexionComponent);
