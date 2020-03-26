import { get } from "lodash";
import { connect } from "react-redux";

import FormulaOutputComponent from "./formula-output-component";

const REGEX_TAUX = RegExp("taux");

const mapStateToProps = (state, props) => {
  const { facteur, name } = props;
  const { reforme, reformeBase, reformePLF } = state;

  const isTauxInput = REGEX_TAUX.test(name);
  const multiplicateur = isTauxInput ? 100 : 1;

  let baseValue = get(reformeBase, `impot_revenu.${name}`);
  baseValue *= multiplicateur * facteur;

  let plfValue;
  if (reformePLF) {
    plfValue = get(reformePLF, `impot_revenu.${name}`);
    plfValue *= multiplicateur * facteur;
  }

  let newValue = get(reforme, `impot_revenu.${name}`);
  newValue *= multiplicateur * facteur;

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
