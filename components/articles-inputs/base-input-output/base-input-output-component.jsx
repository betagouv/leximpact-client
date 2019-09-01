import PropTypes from "prop-types";
import { Fragment } from "react";

import InputField from "../input-field";
import OutputField from "../output-field";

const BaseInputOutputComponent = ({
  baseValue,
  handleInputChange,
  inputFieldStyle,
  name,
  newValue,
  outputFieldStyle,
  plfFieldStyle,
  plfValue,
}) => (
  <Fragment>
    <OutputField style={outputFieldStyle} value={baseValue} />
    <OutputField style={plfFieldStyle} value={plfValue} />
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
  plfFieldStyle: PropTypes.shape().isRequired,
  plfValue: PropTypes.string.isRequired,
};

export default BaseInputOutputComponent;
