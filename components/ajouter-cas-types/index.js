import { connect } from "react-redux";

import { addCarteImpact, closeCurrentPopin } from "../../redux/actions";
import AjouterCasTypesComponent from "./ajouter-cas-types-component";

const randomGender = () => Math.random() < 0.49;

const DEFAULT_PERSON_VALUES = {
  acienCombattant: 0,
  chargePartagee: 0,
  gender: randomGender(),
  invalide: 0,
  isChild: 0,
  parentIsole: 0,
  plus65ans: 0,
  veufVeuve: 0,
};

const DEFAULT_CAS_TYPES = {
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

const mapStateToProps = ({ casTypes }, { index }) => {
  const casTypesInitialValues = { ...DEFAULT_CAS_TYPES };
  console.log("casTypes[index]", casTypes[index]);
  // if (index >= 0) casTypesInitialValues = casTypes[index];
  const defaultPersonValue = { ...DEFAULT_PERSON_VALUES };
  return {
    casTypesInitialValues,
    defaultPersonValue,
  };
};

const mapDispatchToProps = dispatch => ({
  onFormSubmitHandler: (values) => {
    dispatch(addCarteImpact(values));
    dispatch(closeCurrentPopin());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AjouterCasTypesComponent);
