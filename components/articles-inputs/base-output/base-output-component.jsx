import PropTypes from "prop-types";

import OutputField from "../fields/output-field";

const BaseOutputComponent = ({ baseValue, style }) => (
  <OutputField style={style.VarCodeexistant} value={baseValue} />
);

BaseOutputComponent.propTypes = {
  baseValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default BaseOutputComponent;
