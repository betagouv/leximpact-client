import PropTypes from "prop-types";
import { IconButton, Snackbar } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const ErrorSnackbar = ({ message }) => (
  <Snackbar
    action={[
      <IconButton key="close" color="inherit" onClick={() => {}}>
        <CloseIcon />
      </IconButton>,
    ]}
    anchorOrigin={{
      horizontal: "center",
      vertical: "bottom",
    }}
    autoHideDuration={6000}
    message="Cette adresse ne fonctionne pas, veuillez réessayer."
    onClose={() => {}}
    open={Boolean(message)}
  />
);

ErrorSnackbar.defaultProps = {
  message: null,
};

ErrorSnackbar.propTypes = {
  message: PropTypes.string,
};

export default ErrorSnackbar;
