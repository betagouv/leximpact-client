import { get } from "lodash";
import { connect } from "react-redux";

import makeNumberGoodLooking from "../../articles/utils/make-number-good-looking";
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
  let baseValue = baseValue1 + baseValue2;
  baseValue = makeNumberGoodLooking(baseValue);

  let plfValue1 = get(reformePLF, `impot_revenu.${name1}`);
  plfValue1 *= fact1;
  let plfValue2 = get(reformePLF, `impot_revenu.${name2}`);
  plfValue2 *= fact2;
  let plfValue = plfValue1 + plfValue2;
  plfValue = makeNumberGoodLooking(plfValue);

  let newValue1 = get(reforme, `impot_revenu.${name1}`);
  newValue1 *= fact1;
  let newValue2 = get(reforme, `impot_revenu.${name2}`);
  newValue2 *= fact2;
  let newValue = newValue1 + newValue2;
  newValue = makeNumberGoodLooking(newValue);

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
