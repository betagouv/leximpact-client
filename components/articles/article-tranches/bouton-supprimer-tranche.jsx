import { Fab, Typography } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

const RemoveTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab color="primary" size="small" style={style.Button} onClick={onClick}>
      <DeleteIcon />
    </Fab>
    <Typography
      inline
      color="primary"
      style={style.Typographybouton}
      variant="overline">
      Supprimer une tranche
    </Typography>
  </div>
);

RemoveTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default RemoveTrancheButton;
