import PropTypes from "prop-types";
import { Fragment } from "react";

import OutputField from "../output-field";

const BaseOutputComponent = ({ baseValue, plfValue, style }) => (
  <Fragment>
    <OutputField style={style.VarCodeexistant} value={baseValue} />
    <OutputField style={style.VarPLF} value={plfValue} />
  </Fragment>
);

BaseOutputComponent.propTypes = {
  baseValue: PropTypes.string.isRequired,
  plfValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default BaseOutputComponent;
