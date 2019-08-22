import PropTypes from "prop-types";
import { Fragment } from "react";

import InputField from "../fields/input-field";
import OutputField from "../fields/output-field";

const BaseInputOutputComponent = ({
  baseValue,
  handleInputChange,
  inputFieldStyle,
  name,
  newValue,
  outputFieldStyle,
}) => (
  <Fragment>
    <OutputField style={outputFieldStyle} value={baseValue} />
    <InputField
      name={name}
      style={inputFieldStyle}
      value={newValue}
      onChange={handleInputChange}
    />
  </Fragment>
);

BaseInputOutputComponent.propTypes = {
  baseValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputFieldStyle: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  newValue: PropTypes.string.isRequired,
  outputFieldStyle: PropTypes.shape().isRequired,
};

export default BaseInputOutputComponent;
