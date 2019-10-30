import PropTypes from "prop-types";
import { Fragment } from "react";

import InputField from "../input-field";
import OutputField from "../output-field";
import formatMilliers from "../../utils/format-milliers";

const BaseInputOutputComponent = ({
  baseValue,
  handleInputChange,
  inputFieldStyle,
  name,
  newValue,
  outputFieldStyle,
  outputFieldStyleNonBarre,
  plfFieldStyle,
  plfValue,
}) => (
  <Fragment>
    <OutputField style={Math.abs(baseValue-plfValue) < 0.001 ? outputFieldStyleNonBarre : outputFieldStyle} value={formatMilliers(baseValue)} />
    {Math.abs(baseValue-plfValue) < 0.001 ? " " : <OutputField style={plfFieldStyle} value={formatMilliers(plfValue)} />}
    <InputField
      name={name}
      style={inputFieldStyle}
      value={formatMilliers(newValue)}
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
