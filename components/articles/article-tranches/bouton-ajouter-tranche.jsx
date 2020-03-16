import { Fab } from "@material-ui/core/Fab";
import { Typography } from "@material-ui/core/Typography";
import { Add as AddIcon } from "@material-ui/icons/Add";
import PropTypes from "prop-types";

const AddTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab color="secondary" size="medium" style={style.Button} variant="extended" onClick={onClick}>
      <AddIcon />
    </Fab>
    <Typography inline variant="caption">
    Ajouter ou
    </Typography>
  </div>
);

AddTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default AddTrancheButton;
