/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
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
import PropTypes from "prop-types";
import { PureComponent } from "react";
import { Typography } from "@material-ui/core";

class ConnexionFormSuccess extends PureComponent {
  render() {
    const { message } = this.props;
    return (
      <Typography>
        <span>{message}</span>
      </Typography>
    );
  }
}

ConnexionFormSuccess.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ConnexionFormSuccess;
