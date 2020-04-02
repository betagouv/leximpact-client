import TextField from "@material-ui/core/TextField";
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

  handleChange = ({ target }) => {
    const { value } = target;
    if (this.timer) clearTimeout(this.timer);
    this.setState({ value });
    this.timer = setTimeout(() => {
      this.props.onChange(value);
    }, WAIT_INTERVAL);
  }

  handleKeyDown = (e) => {
    const isEnterKeyPressed = e.keyCode === ENTER_KEY;
    if (!isEnterKeyPressed) return;
    const { value } = this.state;
    clearTimeout(this.timer);
    this.props.onChange(value);
  }

  render() {
    const { value } = this.state;
    const { className } = this.props;
    return (
      <TextField
        className={className}
        value={value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown} />
    );
  }
}

InputField.defaultProps = {
  className: null,
};

InputField.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputField;
