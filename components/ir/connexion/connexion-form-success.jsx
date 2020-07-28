import openMailboxWithRaisedFlag from "@iconify/icons-twemoji/open-mailbox-with-raised-flag";
import { Icon } from "@iconify/react";
import { withStyles } from "@material-ui/core/styles";
import { flow } from "lodash";
import { withRouter } from "next/router";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const styles = {
  pStyle: {
    color: "#000000",
    fontFamily: "Lato",
    fontSize: "18px",
    marginBottom: "40px",
    marginLeft: "40px",
  },
};

class ConnexionFormSuccess extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <p className={classes.pStyle}>
          <Icon inline icon={openMailboxWithRaisedFlag} width="25" />
          <b>
            &nbsp;Nous venons juste de vous envoyer par mail un lien de
            confirmation.
          </b>
          <br />
          Cliquez sur le lien du courriel pour vous connecter.
        </p>
      </div>
    );
  }
}

ConnexionFormSuccess.propTypes = {
  classes: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRouter,
)(ConnexionFormSuccess);
