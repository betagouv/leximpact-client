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

  componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    if (nextProps.value === value) return;
    this.setState({ value: nextProps.value });
  }

  triggerChange = (value, name) => {
    const { onChange } = this.props;
    const noSpacesValue = value.replace(/\s+/g, "");
    const numberValue = Number(noSpacesValue);
    onChange(numberValue, name);
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    if (this.timer) clearTimeout(this.timer);
    this.setState({ value });
    this.timer = setTimeout(() => {
      this.triggerChange(value, name);
    }, WAIT_INTERVAL);
  };

  handleKeyDown = (e) => {
    const isEnterKeyPressed = e.keyCode === ENTER_KEY;
    if (!isEnterKeyPressed) return;
    const { name } = this.props;
    const { value } = this.state;
    clearTimeout(this.timer);
    this.triggerChange(value, name);
  };

  render() {
    const { name, style } = this.props;
    const { value } = this.state;
    return (
      <input
        name={name}
        size="4"
        style={style}
        type="text"
        value={value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  style: PropTypes.shape().isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default InputField;
