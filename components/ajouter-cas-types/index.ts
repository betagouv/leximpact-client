import { connect } from "react-redux";

import {
  closeCurrentPopin,
  createCasType,
  simulateCasTypes,
  updateCasType,
} from "../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { CasType } from "../../redux/reducers/descriptions/ir";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../types";
import AjouterCasTypesComponent from "./ajouter-cas-types-component";

const randomGender = () => (Math.random() < 0.49 ? 1 : 0);

const DEFAULT_PERSON_VALUES = {
  ancienCombattant: 0,
  chargePartagee: 0,
  gender: randomGender(),
  invalide: 0,
  isChild: 0,
  parentIsole: 0,
  plus65ans: 0,
  veufVeuve: 0,
};

const DEFAULT_CAS_TYPES: CasType = {
  lieuResidence: 0,
  name: "Foyer fiscal type",
  nbCouple: 1,
  nbEnfants: 0,
  persons: {
    childs: [],
    parents: [{ ...DEFAULT_PERSON_VALUES, gender: randomGender() }],
  },
  revenusNetMensuel: 500,
};

const mapStateToProps = ({ descriptions }: RootState, { index }) => {
  const defaultPersonValue = { ...DEFAULT_PERSON_VALUES };
  let casTypesInitialValues = { ...DEFAULT_CAS_TYPES };
  if (index >= 0) {
    casTypesInitialValues = descriptions.ir.casTypes[index];
  }
  return {
    casTypesInitialValues,
    defaultPersonValue,
  };
};

const mapDispatchToProps = (dispatch, { index }) => ({
  onFormSubmitHandler: (values) => {
    if (index >= 0) {
      dispatch(updateCasType(values, index));
    } else {
      dispatch(createCasType(values));
    }
    dispatch(closeCurrentPopin());
    dispatch(simulateCasTypes());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AjouterCasTypesComponent);
