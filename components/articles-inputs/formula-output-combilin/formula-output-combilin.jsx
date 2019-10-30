import PropTypes from "prop-types";
import { Fragment } from "react";

import OutputField from "../output-field";
import formatMilliers from "../../utils/format-milliers";

const FormulaOutputCombiLin = ({
  baseValue, newValue, plfValue, style,
}) => (
  <Fragment>
    <OutputField style={Math.abs(baseValue-plfValue) < 0.001 ? style.VarCodeexistantNonBarre : style.VarCodeexistant} value={formatMilliers(baseValue)} />
    {Math.abs(baseValue-plfValue) < 0.001 ? "" : <OutputField style={style.VarPLF} value={formatMilliers(plfValue)} />}
    <OutputField style={style.VarCodeNew} value={formatMilliers(newValue)} />
  </Fragment>
);

FormulaOutputCombiLin.propTypes = {
  baseValue: PropTypes.string.isRequired,
  newValue: PropTypes.string.isRequired,
  plfValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default FormulaOutputCombiLin;
