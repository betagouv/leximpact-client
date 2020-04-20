import PropTypes from "prop-types";

import { Parameter } from "../parameter";

const FormulaOutputComponent = ({
  baseValue, newValue, plfValue,
}) => (
  <Parameter
    editable={false}
    initialValue={baseValue}
    plfValue={plfValue}
    reformValue={newValue}
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
