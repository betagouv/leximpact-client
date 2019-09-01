import { get } from "lodash";
import { connect } from "react-redux";

import makeNumberGoodLooking from "../../articles/utils/make-number-good-looking";
import BaseOutputComponent from "./base-output-component";

const REGEX_TAUX = RegExp("taux");

const mapStateToProps = (state, props) => {
  const { name, style } = props;
  const { reformeBase, reformePLF } = state;

  const isTauxValue = REGEX_TAUX.test(name);
  const multiplicateur = isTauxValue ? 100 : 1;

  let baseValue = get(reformeBase, `impot_revenu.${name}`);
  baseValue *= multiplicateur;
  baseValue = makeNumberGoodLooking(baseValue);

  let plfValue = get(reformePLF, `impot_revenu.${name}`);
  plfValue *= multiplicateur;
  plfValue = makeNumberGoodLooking(plfValue);

  return {
    baseValue,
    plfValue,
    style,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseOutputComponent);
