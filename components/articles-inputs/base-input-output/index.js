import { get } from "lodash";
import { connect } from "react-redux";

import {
  fetchCalculateCompare,
  updateReformeByName,
} from "../../../redux/actions";
import makeNumberGoodLooking from "../../articles/utils/make-number-good-looking";
import BaseInputOutputComponent from "./base-input-output-component";

const REGEX_TAUX = RegExp("taux");

const mapStateToProps = (state, props) => {
  const { name, style } = props;
  const { reforme, reformeBase, reformePLF } = state;
  const isTauxValue = REGEX_TAUX.test(name);
  const multiplicateur = isTauxValue ? 100 : 1;

  let baseValue = get(reformeBase.impot_revenu, name);
  baseValue *= multiplicateur;
  baseValue = makeNumberGoodLooking(baseValue);
  
  let plfValue = get(reformePLF, `impot_revenu.${name}`);
  plfValue *= multiplicateur;
  plfValue  = makeNumberGoodLooking(plfValue);

  let newValue = get(reforme.impot_revenu, name);
  newValue *= multiplicateur;
  newValue = makeNumberGoodLooking(newValue);

  const outputFieldStyle = style.VarCodeexistant;

  const plfFieldStyle = style.VarPLF;
  const inputFieldStyle = isTauxValue ? style.InputTaux : style.InputSeuil;

  return {
    baseValue,
    inputFieldStyle,
    newValue,
    plfValue,
    outputFieldStyle,
    plfFieldStyle,
  };
};

const mapDispatchToProps = dispatch => ({
  handleInputChange: (value, name) => {
    let action = updateReformeByName(name, value);
    dispatch(action);
    action = fetchCalculateCompare();
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseInputOutputComponent);
