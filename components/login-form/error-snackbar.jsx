/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
    react/jsx-indent-props: [2, 2]
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
