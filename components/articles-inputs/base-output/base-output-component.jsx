import PropTypes from "prop-types";
import { Fragment } from "react";

import OutputField from "../output-field";
import formatMilliers from "../../utils/format-milliers";

const BaseOutputComponent = ({ baseValue, plfValue, style }) => (
  <Fragment>
    <OutputField style={Math.abs(baseValue-plfValue) < 0.001 ? style.VarCodeexistantNonBarre : style.VarCodeexistant} value={formatMilliers(baseValue)} />
    {Math.abs(baseValue-plfValue) < 0.001 ? "" : <OutputField style={style.VarPLF} value={formatMilliers(plfValue)} />}
  </Fragment>
);

BaseOutputComponent.propTypes = {
  baseValue: PropTypes.string.isRequired,
  plfValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default BaseOutputComponent;
