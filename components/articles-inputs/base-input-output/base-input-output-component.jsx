import PropTypes from "prop-types";

import { Parameter } from "../parameter";

const BaseInputOutputComponent = ({
  baseValue,
  handleInputChange,
  name,
  newValue,
  plfValue,
}) => (
  <Parameter
    editable
    baseValue={baseValue}
    plfValue={plfValue}
    reformValue={newValue}
    onReformChange={value => handleInputChange(value, name)}
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
