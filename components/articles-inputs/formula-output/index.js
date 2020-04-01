import { get } from "lodash";
import { connect } from "react-redux";

import FormulaOutputComponent from "./formula-output-component";

const mapStateToProps = (state, props) => {
  const { facteur, name } = props;
  const { reforme, reformeBase, reformePLF } = state;

  let baseValue = get(reformeBase, `impot_revenu.${name}`);
  baseValue *= facteur;

  let plfValue;
  if (reformePLF) {
    plfValue = get(reformePLF, `impot_revenu.${name}`);
    plfValue *= facteur;
  }

  let newValue = get(reforme, `impot_revenu.${name}`);
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
