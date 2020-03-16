import { IconButton } from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import { KeyboardArrowDown as KeyboardArrowDownIcon } from "@material-ui/icons/KeyboardArrowDown";
import { KeyboardArrowUp as KeyboardArrowUpIcon } from "@material-ui/icons/KeyboardArrowUp";
import PropTypes from "prop-types";
import { PureComponent } from "react";

const styles = {
  button: {
    "&:hover": {
      background: "transparent",
    },
    maxWidth: 41,
    minWidth: 41,
    padding: 0,
    width: 41,
  },
  container: {},
  input: {
    borderColor: "#B1B1B1",
    color: "#000000",
    fontFamily: "Lato",
    height: 38,
    maxHeight: 38,
    maxWidth: 41,
    minHeight: 38,
    minWidth: 41,
    textAlign: "center",
    width: 41,
  },
};

class MUINumberStepper extends PureComponent {
  removeStepHandler = () => {
    const { min, onChange, value } = this.props;
    let nextStep = Number(value) - 1;
    if (nextStep <= min) nextStep = min;
    onChange(nextStep);
  };

  addStepHandler = () => {
    const { max, onChange, value } = this.props;
    let nextStep = Number(value) + 1;
    if (nextStep >= max) nextStep = max;
    onChange(nextStep);
  };

  handleInputChange = (evt) => {
    const { value } = evt.target;
    const { max, min, onChange } = this.props;
    let nextStep = Number(value);
    if (nextStep <= min) nextStep = min;
    if (nextStep >= max) nextStep = max;
    onChange(nextStep);
  };

  render() {
    const {
      classes, max, min, name, readOnly, value,
    } = this.props;
    const isMaxValue = value === max;
    const isMinValue = value === min;
    return (
      <div>
        <div>
          <IconButton
            disableRipple
            aria-label="Ajouter"
            className={classes.button}
            disabled={isMaxValue}
            onClick={this.addStepHandler}>
            <KeyboardArrowUpIcon fontSize="small" />
          </IconButton>
        </div>
        <div>
          <input
            className={`mui-number-stepper ${classes.input}`}
            name={name}
            readOnly={readOnly}
            type="number"
            value={value}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <IconButton
            disableRipple
            aria-label="Supprimer"
            className={classes.button}
            disabled={isMinValue}
            onClick={this.removeStepHandler}>
            <KeyboardArrowDownIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    );
  }
}

MUINumberStepper.defaultProps = {
  max: Infinity,
  min: -Infinity,
  readOnly: false,
};

MUINumberStepper.propTypes = {
  classes: PropTypes.shape().isRequired,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  value: PropTypes.number.isRequired,
};

export default withStyles(styles)(MUINumberStepper);
