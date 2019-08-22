import PropTypes from "prop-types";
import { Fragment } from "react";

import OutputField from "../fields/output-field";

const FormulaOutputCombiLin = ({ baseValue, newValue, style }) => (
  <Fragment>
    <OutputField style={style.VarCodeexistant} value={baseValue} />
    <OutputField style={style.VarCodeNew} value={newValue} />
  </Fragment>
);

FormulaOutputCombiLin.propTypes = {
  baseValue: PropTypes.string.isRequired,
  newValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default FormulaOutputCombiLin;
