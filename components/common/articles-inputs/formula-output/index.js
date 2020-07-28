import { get } from "lodash";
import { connect } from "react-redux";

import FormulaOutputComponent from "./formula-output-component";

const mapStateToProps = (state, props) => {
  const { facteur, name } = props;
  const { amendement, base, plf } = state.parameters;

  let baseValue = get(base, `impot_revenu.${name}`);
  baseValue *= facteur;

  let plfValue;
  if (plf) {
    plfValue = get(plf, `impot_revenu.${name}`);
    plfValue *= facteur;
  }

  let newValue = get(amendement, `impot_revenu.${name}`);
  newValue *= facteur;

  return {
    baseValue,
    newValue,
    plfValue,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormulaOutputComponent);
