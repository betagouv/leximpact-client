import { get } from "lodash";
import { connect } from "react-redux";

import { updateReformeByName } from "../../../redux/actions";
import BaseInputOutputComponent from "./base-input-output-component";

const mapStateToProps = (state, props) => {
  const { name } = props;
  const { reforme, reformeBase, reformePLF } = state;

  const baseValue = get(reformeBase.impot_revenu, name);

  let plfValue;
  if (reformePLF) {
    plfValue = get(reformePLF, `impot_revenu.${name}`);
  }

  const newValue = get(reforme.impot_revenu, name);

  return {
    baseValue,
    newValue,
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
