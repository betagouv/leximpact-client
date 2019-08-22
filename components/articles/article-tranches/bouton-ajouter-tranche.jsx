import { Fab, Typography } from "@material-ui/core";
import { Add as AddIcon } from "@material-ui/icons";
import PropTypes from "prop-types";

const AddTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab color="primary" size="small" style={style.Button} onClick={onClick}>
      <AddIcon />
    </Fab>
    <Typography
      inline
      color="primary"
      style={style.Typographybouton}
      variant="overline">
      Ajouter une tranche
    </Typography>
  </div>
);

AddTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default AddTrancheButton;
