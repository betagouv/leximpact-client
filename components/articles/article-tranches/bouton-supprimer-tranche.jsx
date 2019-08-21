import PropTypes from "prop-types";
import { Fab, Typography } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

const RemoveTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab style={style.Button} size="small" onClick={onClick} color="primary">
      <DeleteIcon />
    </Fab>
    <Typography
      inline
      variant="overline"
      color="primary"
      style={style.Typographybouton}>
      Supprimer une tranche
    </Typography>
  </div>
);

RemoveTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default RemoveTrancheButton;
