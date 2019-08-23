import { Fab, Typography } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

const AddTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab variant="extended" color="secondary" size="medium" style={style.Button} onClick={onClick}>
      <AddIcon />
    </Fab>
    <Typography inline variant="caption" >
    Ajouter ou
    </Typography>
  </div>
);

AddTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default AddTrancheButton;
