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
import { PureComponent } from "react";

// Touche qui déclenche les calculs (13 = return)
const ENTER_KEY = 13;

// attente minimum (si l'usage n'appuye pas sur Entrée) avant qu'une saisie ne déclenche un calcul
const WAIT_INTERVAL = 1000;

class InputField extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
    const { value } = props;
    this.state = { value };
  }

  triggerChange = (value, name) => {
    const { onChange } = this.props;
    const noSpacesValue = value.replace(/\s+/g, "");
    const numberValue = Number(noSpacesValue);
    onChange(numberValue, name);
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (this.timer) clearTimeout(this.timer);
    this.setState({ value });
    this.timer = setTimeout(() => {
      this.triggerChange(value, name);
    }, WAIT_INTERVAL);
  }

  handleKeyDown = (e) => {
    const isEnterKeyPressed = e.keyCode === ENTER_KEY;
    if (!isEnterKeyPressed) return;
    const { name } = this.props;
    const { value } = this.state;
    clearTimeout(this.timer);
    this.triggerChange(value, name);
  }

  render() {
    const { name, style } = this.props;
    const { value } = this.state;
    return (
      <input
        type="text"
        value={value}
        name={name}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        size="4"
        style={style}
      />
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
