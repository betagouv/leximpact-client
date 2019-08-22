import { get } from "lodash";
import { connect } from "react-redux";

import makeNumberGoodLooking from "../../articles/utils/make-number-good-looking";
import FormulaOutputComponent from "./formula-output-component";

const REGEX_TAUX = RegExp("taux");

const mapStateToProps = (state, props) => {
  const { facteur, name, style } = props;
  const { reforme, reformeBase } = state;

  const isTauxInput = REGEX_TAUX.test(name);
  const multiplicateur = isTauxInput ? 100 : 1;

  let baseValue = get(reformeBase, `impot_revenu.${name}`);
  baseValue *= multiplicateur * facteur;
  baseValue = makeNumberGoodLooking(baseValue);

  let newValue = get(reforme, `impot_revenu.${name}`);
  newValue *= multiplicateur * facteur;
  newValue = makeNumberGoodLooking(newValue);

  return {
    baseValue,
    newValue,
    style,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FormulaOutputComponent);
