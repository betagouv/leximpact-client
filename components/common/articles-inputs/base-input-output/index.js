import { get } from "lodash";
import { connect } from "react-redux";

import { updateReformeByName } from "../../../../redux/actions";
import BaseInputOutputComponent from "./base-input-output-component";

const mapStateToProps = (state, props) => {
  const { name } = props;
  const { amendement, base, plf } = state.parameters;

  const baseValue = get(base.impot_revenu, name);

  let plfValue;
  if (plf) {
    plfValue = get(plf, `impot_revenu.${name}`);
  }

  const newValue = get(amendement.impot_revenu, name);

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
