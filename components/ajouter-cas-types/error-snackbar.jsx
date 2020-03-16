import { IconButton } from "@material-ui/core/IconButton";
import { Snackbar } from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import PropTypes from "prop-types";

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
    open={Boolean(message)}
    onClose={() => {}}
  />
);

ErrorSnackbar.defaultProps = {
  message: null,
};

ErrorSnackbar.propTypes = {
  message: PropTypes.string,
};

export default ErrorSnackbar;
