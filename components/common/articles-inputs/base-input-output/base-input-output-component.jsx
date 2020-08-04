import PropTypes from "prop-types";

import { Values } from "../values";

const BaseInputOutputComponent = ({
  baseValue,
  handleInputChange,
  name,
  newValue,
  plfValue,
}) => (
  <Values
    editable
    amendementValue={newValue}
    baseValue={baseValue}
    plfValue={plfValue}
    onAmendementChange={value => handleInputChange(value, name)}
  />
);

BaseInputOutputComponent.defaultProps = {
  plfValue: null,
};

BaseInputOutputComponent.propTypes = {
  baseValue: PropTypes.number.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  newValue: PropTypes.number.isRequired,
  plfValue: PropTypes.number,
};

export default BaseInputOutputComponent;
