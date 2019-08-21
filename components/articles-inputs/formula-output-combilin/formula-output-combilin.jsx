import PropTypes from "prop-types";
import { Fragment } from "react";

import OutputField from "../fields/output-field";

const FormulaOutputCombiLin = ({ baseValue, newValue, style }) => (
  <Fragment>
    <OutputField value={baseValue} style={style.VarCodeexistant} />
    <OutputField value={newValue} style={style.VarCodeNew} />
  </Fragment>
);

FormulaOutputCombiLin.propTypes = {
  baseValue: PropTypes.string.isRequired,
  newValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default FormulaOutputCombiLin;
