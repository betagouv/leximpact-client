/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
import { PureComponent } from "react";
import PropTypes from "prop-types";
import { flow, get } from "lodash";
import Cookies from "js-cookie";
import { withRouter } from "next/router";
import { withStyles } from "@material-ui/core/styles";
import { Icon } from "@iconify/react";
import openMailboxWithRaisedFlag from "@iconify/icons-twemoji/open-mailbox-with-raised-flag";

const styles = {
  pStyle: {
    fontFamily: "Lato",
    fontSize: "18px",
    color: "#000000",
    marginBottom: "40px",
    marginLeft: "40px",
  },
};

class ConnexionFormSuccess extends PureComponent {
  componentDidMount() {
    // recupere le token depuis l'URL
    // recu via l'email contenant le magic-link
    // affecte une variable dans le navigateur user
    const { router } = this.props;
    const pathString = "query.token";
    const token = get(router, pathString, false);
    Cookies.set("token", token);
  }

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
  router: PropTypes.shape().isRequired,
};

export default flow(
  withStyles(styles),
  withRouter,
)(ConnexionFormSuccess);
