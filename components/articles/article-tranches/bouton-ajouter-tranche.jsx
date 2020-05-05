import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import PropTypes from "prop-types";

import styles from "./bouton-ajouter-tranche.module.scss";

const AddTrancheButton = ({ onClick, style }) => (
  <div>
    <Fab color="primary" size="medium" style={style.Button} variant="extended" onClick={onClick}>
      <AddIcon />
    </Fab>
    <Typography inline className={styles.amendementText} variant="caption">
      Ajouter ou
    </Typography>
  </div>
);

AddTrancheButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
};

export default AddTrancheButton;
