import PropTypes from "prop-types";
import { Fragment } from "react";

import formatMilliers from "../../utils/format-milliers";
import makeNumberGoodLooking from "../../articles/utils/make-number-good-looking";
import OutputField from "../output-field";

function formatNumber(n) {
  return formatMilliers(makeNumberGoodLooking(n));
}

const FormulaOutputComponent = ({
  baseValue, newValue, plfValue, style,
}) => {
  const montrerPLF = plfValue !== null && plfValue !== baseValue;
  return (
    <Fragment>
      <OutputField
        style={montrerPLF ? style.VarCodeexistant : style.VarCodeexistantNonBarre}
        value={formatNumber(baseValue)} />
      {montrerPLF && <OutputField style={style.VarPLF} value={formatNumber(plfValue)} />}
      <OutputField style={style.VarCodeNew} value={formatNumber(newValue)} />
    </Fragment>
  );
};

FormulaOutputComponent.defaultProps = {
  plfValue: null,
};

FormulaOutputComponent.propTypes = {
  baseValue: PropTypes.number.isRequired,
  newValue: PropTypes.number.isRequired,
  plfValue: PropTypes.number,
  style: PropTypes.shape().isRequired,
};

export default FormulaOutputComponent;
