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
import PropTypes from "prop-types";
import { Fragment } from "react";

import InputField from "../input-field";
import OutputField from "../output-field";

const BaseInputOutputComponent = ({
  baseValue,
  handleInputChange,
  inputFieldStyle,
  name,
  newValue,
  outputFieldStyle,
}) => (
  <Fragment>
    <OutputField style={outputFieldStyle} value={baseValue} />
    <InputField
      name={name}
      onChange={handleInputChange}
      style={inputFieldStyle}
      value={newValue}
    />
  </Fragment>
);

BaseInputOutputComponent.propTypes = {
  baseValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  newValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  outputFieldStyle: PropTypes.shape().isRequired,
  inputFieldStyle: PropTypes.shape().isRequired,
};

export default BaseInputOutputComponent;
