/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2],
  react/jsx-indent-props: [2, 2],
  max-nested-callbacks: [2, { "max": 4 }],
  react/jsx-closing-bracket-location: [2, {
    "nonEmpty": false,
    "selfClosing": false
  }],
  "jsx-a11y/anchor-is-valid": [2, {
    "components": ["Link"],
    "specialLink": ["hrefLeft", "hrefRight"]
  }],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }]
*/
import { cloneDeep } from "lodash";

import { REFORME_BASE_DEFAULT_STATE } from "./reforme-base";

const DEFAULT_STATE = cloneDeep(REFORME_BASE_DEFAULT_STATE);

// renvoie arrayToChange avec la valeur située à l'index "indexToChange" changé en "newValue"
// const changeValueArray = (arrayToChange, indexToChange, newValue) => {
//   const list = arrayToChange.map((prevValue, numeroItem) => {
//     const isCurrentItemsIndex = numeroItem === indexToChange;
//     return isCurrentItemsIndex ? newValue : prevValue;
//   });
//   return list;
// };

const updateTaux = (prevState, indexToChange, value) => prevState;
// const { reforme } = this.state;
// const ref = reforme;
// const list = changeValueArray(
//   ref.impot_revenu.bareme.taux,
//   indexToChange,
//   value * 0.01,
// );
// ref.impot_revenu.bareme.taux = list;

const updateBareme = (prevState, indexToChange, value) => prevState;
// const { reforme } = this.state;
// const ref = reforme;
// const list = changeValueArray(
//   ref.impot_revenu.bareme.seuils,
//   indexToChange,
//   value,
// );
// ref.impot_revenu.bareme.seuils = list;

const updatePlafond = (prevState, dectype, value) => prevState;
// const { reforme } = this.state;
// const ref = reforme;
// const regex = RegExp("^[0-9a-zA-Z_.]+$");
// const shouldUpdateState = regex.test(dectype);
// if (!shouldUpdateState) return prevState;
//
// const pathref = `impot_revenu.plafond_qf${dectype}`;
// // Tous les noms de variables qui contiennent taux
// // sont divisés par 100
// // Je vois vraiment pas ce qui pourrait poser probleme avec ça.
// const regextaux = RegExp("taux");
// set(ref, pathref, value * (regextaux.test(dectype) ? 0.01 : 1));

const updateDecote = (prevState, dectype, value) => prevState;
// Pour une méthode clean mais dangereuse qui pourrait être implémentée ici, cf UpdatePlafond
// const { reforme } = this.state;
// const ref = reforme;
// if (dectype === "") {
//   ref.impot_revenu.decote.seuil_couple = parseInt(value, 10);
// }
// if (dectype === "seuil_celib") {
//   ref.impot_revenu.decote.seuil_celib = parseInt(value, 10);
// }
// if (dectype === "taux") {
//   ref.impot_revenu.decote.taux = Math.round(parseFloat(value) * 10) / 1000;
// }
// this.setState({ reforme: ref });

const reforme = (state = DEFAULT_STATE, action) => {
  const nextState = cloneDeep(state);
  const { index, value } = action || {};
  switch (action.type) {
  case "onUpdateReformeDecote":
    return updateDecote(nextState, index, value);
  case "onUpdateReformeTaux":
    return updateTaux(nextState, index, value);
  case "onUpdateReformePlafond":
    return updatePlafond(nextState, index, value);
  default:
    return nextState;
  }
};

export default reforme;
