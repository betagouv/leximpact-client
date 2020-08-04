import PropTypes from "prop-types";

import { Values } from "../values";

const FormulaOutputComponent = ({
  baseValue, newValue, plfValue,
}) => (
  <Values
    amendementValue={newValue}
    baseValue={baseValue}
    editable={false}
    plfValue={plfValue}
  />
);

FormulaOutputComponent.defaultProps = {
  plfValue: null,
};

FormulaOutputComponent.propTypes = {
  baseValue: PropTypes.number.isRequired,
  newValue: PropTypes.number.isRequired,
  plfValue: PropTypes.number,
};

export default FormulaOutputComponent;
