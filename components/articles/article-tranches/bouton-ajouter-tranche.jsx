import PropTypes from "prop-types";
import { Fab, Typography } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";

const AddTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab style={style.Button} size="small" onClick={onClick} color="primary">
      <AddIcon />
    </Fab>
    <Typography
      inline
      variant="overline"
      color="primary"
      style={style.Typographybouton}>
      Ajouter une tranche
    </Typography>
  </div>
);

AddTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default AddTrancheButton;
