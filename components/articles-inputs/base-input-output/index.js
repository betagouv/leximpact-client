import { get } from "lodash";
import { connect } from "react-redux";

import { updateReformeByName } from "../../../redux/actions";
import BaseInputOutputComponent from "./base-input-output-component";

const REGEX_TAUX = RegExp("taux");

const mapStateToProps = (state, props) => {
  const { name, style } = props;
  const { reforme, reformeBase, reformePLF } = state;
  const isTauxValue = REGEX_TAUX.test(name);
  const multiplicateur = isTauxValue ? 100 : 1;

  let baseValue = get(reformeBase.impot_revenu, name);
  baseValue *= multiplicateur;

  let plfValue;
  if (reformePLF) {
    plfValue = get(reformePLF, `impot_revenu.${name}`);
    plfValue *= multiplicateur;
  }

  let newValue = get(reforme.impot_revenu, name);
  newValue *= multiplicateur;

  const outputFieldStyle = style.VarCodeexistant;
  const outputFieldStyleNonBarre = style.VarCodeexistantNonBarre;

  const plfFieldStyle = style.VarPLF;
  const inputFieldStyle = isTauxValue ? style.InputTaux : style.InputSeuil;

  return {
    baseValue,
    inputFieldStyle,
    newValue,
    outputFieldStyle,
    outputFieldStyleNonBarre,
    plfFieldStyle,
    plfValue,
  };
};

const mapDispatchToProps = dispatch => ({
  handleInputChange: (value, name) => {
    dispatch(updateReformeByName(name, value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseInputOutputComponent);
