/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-fragments: [2, "element"],
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
import PropTypes from "prop-types";
import { Fragment } from "react";

import OutputField from "../fields/output-field";

const FormulaOutputCombiLin = ({ baseValue, newValue, style }) => (
  <Fragment>
    <OutputField value={baseValue} style={style.VarCodeexistant} />
    <OutputField value={newValue} style={style.VarCodeNew} />
  </Fragment>
);

FormulaOutputCombiLin.propTypes = {
  baseValue: PropTypes.string.isRequired,
  newValue: PropTypes.string.isRequired,
  style: PropTypes.shape().isRequired,
};

export default FormulaOutputCombiLin;
