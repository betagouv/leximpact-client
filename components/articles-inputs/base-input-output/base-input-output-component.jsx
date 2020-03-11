import PropTypes from "prop-types";
import { Fragment } from "react";

import makeNumberGoodLooking from "../../articles/utils/make-number-good-looking";
import formatMilliers from "../../utils/format-milliers";
import InputField from "../input-field";
import OutputField from "../output-field";

function formatNumber(n) {
  return formatMilliers(makeNumberGoodLooking(n));
}

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
}) => {
  const montrerPLF = plfValue !== null && plfValue !== baseValue;
  return (
    <Fragment>
      <OutputField style={montrerPLF ? outputFieldStyle : outputFieldStyleNonBarre} value={formatNumber(baseValue)} />
      {montrerPLF && <OutputField style={plfFieldStyle} value={formatNumber(plfValue)} />}
      <InputField
        name={name}
        style={inputFieldStyle}
        value={formatNumber(newValue)}
        onChange={handleInputChange}
      />
    </Fragment>
  );
};

BaseInputOutputComponent.defaultProps = {
  plfValue: null,
};

BaseInputOutputComponent.propTypes = {
  baseValue: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  inputFieldStyle: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired,
  newValue: PropTypes.number.isRequired,
  outputFieldStyle: PropTypes.shape().isRequired,
  plfFieldStyle: PropTypes.shape().isRequired,
  plfValue: PropTypes.number,
};

export default BaseInputOutputComponent;
