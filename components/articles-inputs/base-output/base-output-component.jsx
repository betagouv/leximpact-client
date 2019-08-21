import PropTypes from "prop-types";

import OutputField from "../fields/output-field";

const BaseOutputComponent = ({ baseValue, style }) => (
  <OutputField value={baseValue} style={style.VarCodeexistant} />
);

BaseOutputComponent.propTypes = {
  baseValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default BaseOutputComponent;
