import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

const RemoveTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab color="secondary" size="medium" style={style.Button} variant="extended" onClick={onClick}>
      <DeleteIcon />
    </Fab>
    <Typography inline variant="caption">
    Supprimer une tranche
    </Typography>
  </div>
);

RemoveTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default RemoveTrancheButton;
