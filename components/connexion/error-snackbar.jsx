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
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const ErrorSnackbar = ({ message }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    open={Boolean(message)}
    autoHideDuration={6000}
    onClose={() => {}}
    message={message}
    action={[
      <IconButton key="close" color="inherit" onClick={() => {}}>
        <CloseIcon />
      </IconButton>,
    ]}
  />
);

ErrorSnackbar.defaultProps = {
  message: null,
};

ErrorSnackbar.propTypes = {
  message: PropTypes.string,
};

export default ErrorSnackbar;
