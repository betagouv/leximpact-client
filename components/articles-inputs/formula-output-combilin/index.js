import { get } from "lodash";
import { connect } from "react-redux";

import FormulaOutputCombiLin from "./formula-output-combilin";

const mapStateToProps = (state, props) => {
  const { reforme, reformeBase, reformePLF } = state;
  const {
    fact1, fact2, name1, name2,
  } = props;

  let baseValue1 = get(reformeBase, `impot_revenu.${name1}`);
  baseValue1 *= fact1;
  let baseValue2 = get(reformeBase, `impot_revenu.${name2}`);
  baseValue2 *= fact2;
  const baseValue = baseValue1 + baseValue2;

  let plfValue;
  if (reformePLF) {
    let plfValue1 = get(reformePLF, `impot_revenu.${name1}`);
    plfValue1 *= fact1;
    let plfValue2 = get(reformePLF, `impot_revenu.${name2}`);
    plfValue2 *= fact2;
    plfValue = plfValue1 + plfValue2;
  }

  let newValue1 = get(reforme, `impot_revenu.${name1}`);
  newValue1 *= fact1;
  let newValue2 = get(reforme, `impot_revenu.${name2}`);
  newValue2 *= fact2;
  const newValue = newValue1 + newValue2;

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
)(FormulaOutputCombiLin);
