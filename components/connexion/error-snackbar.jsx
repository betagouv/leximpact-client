import PropTypes from "prop-types";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const ErrorSnackbar = ({ message }) => (
  <Snackbar
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    open={Boolean(message)}
    autoHideDuration={6000}
    onClose={() => {}}
    message="Cette adresse ne fonctionne pas, veuillez réessayer."
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
