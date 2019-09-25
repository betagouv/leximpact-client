import PropTypes from "prop-types";
import { Fragment } from "react";

import OutputField from "../output-field";

const FormulaOutputCombiLin = ({
  baseValue, newValue, plfValue, style,
}) => (
  <Fragment>
    <OutputField style={Math.abs(baseValue-plfValue) < 0.001 ? style.VarCodeexistantNonBarre : style.VarCodeexistant} value={baseValue} />
    {Math.abs(baseValue-plfValue) < 0.001 ? "" : <OutputField style={style.VarPLF} value={plfValue} />}
    <OutputField style={style.VarCodeNew} value={newValue} />
  </Fragment>
);

FormulaOutputCombiLin.propTypes = {
  baseValue: PropTypes.string.isRequired,
  newValue: PropTypes.string.isRequired,
  plfValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default FormulaOutputCombiLin;
