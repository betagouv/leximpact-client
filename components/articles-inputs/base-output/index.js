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
    }],
    camelcase: 0,
*/
import { get } from "lodash";
import { connect } from "react-redux";

import makeNumberGoodLooking from "../../articles/utils/make-number-good-looking";

import BaseOutputComponent from "./base-output-component";

const REGEX_TAUX = RegExp("taux");

const mapStateToProps = (state, props) => {
  const { name, style } = props;
  const { reformeBase } = state;

  const isTauxValue = REGEX_TAUX.test(name);
  const multiplicateur = isTauxValue ? 100 : 1;

  let baseValue = get(reformeBase, `impot_revenu.${name}`);
  baseValue *= multiplicateur;
  baseValue = makeNumberGoodLooking(baseValue);

  return {
    baseValue,
    style: style.VarCodeexistant,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BaseOutputComponent);
