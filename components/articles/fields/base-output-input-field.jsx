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
import { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import { get } from "lodash";

import makeNumberGoodLooking from "../utils/make-number-good-looking";

import InputField from "./input-field";
import OutputField from "./output-field";

class BaseOutputInputField extends PureComponent {
  render() {
    const {
      basecode, name, reforme, style,
    } = this.props;

    const regextaux = RegExp("taux");
    const tx = regextaux.test(name);
    const multip = tx ? 100 : 1;

    let baseval = get(basecode.impot_revenu, name);
    baseval *= multip;
    baseval = makeNumberGoodLooking(baseval);

    let newval = get(reforme.impot_revenu, name);
    newval *= multip;
    newval = makeNumberGoodLooking(newval);
    return (
      <Fragment>
        <OutputField value={baseval} style={style.VarCodeexistant} />
        <InputField
          value={newval}
          onChange={() => {
            // this.handleS1Change
          }}
          name={name}
          style={tx ? style.InputTaux : style.InputSeuil}
        />
      </Fragment>
    );
  }
}

BaseOutputInputField.propTypes = {
  name: PropTypes.string.isRequired,
  basecode: PropTypes.shape().isRequired,
  reforme: PropTypes.shape().isRequired,
  style: PropTypes.shape().isRequired,
};

export default BaseOutputInputField;
