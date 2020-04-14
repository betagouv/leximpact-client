import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { PureComponent } from "react";

function formatNumber(number) {
  // Hack to support negative zeros.
  // Negative zeros should disappear in the future after cleaning up the application.
  if (number === 0) {
    return "0";
  }
  return number.toLocaleString();
}

function parseNumber(str) {
  return parseFloat(
    str
      .replace(/\s/g, "")
      .replace(/,/g, "."),
  );
}

class NumberInput extends PureComponent {
  constructor(props) {
    super(props);
    this.timer = null;
    this.handleChange = this.handleChange.bind(this);
    const { value } = this.props;
    this.state = {
      value: formatNumber(value),
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    if (nextProps.value === parseNumber(value)) {
      return;
    }
    this.setState({
      value: formatNumber(nextProps.value),
    });
  }

  handleChange({ target }) {
    const { onChange, value } = this.props;
    if (value === parseNumber(target.value) || target.value === "") {
      this.setState({ value: target.value });
    } else {
      onChange(parseNumber(target.value));
    }
  }

  render() {
    const { value } = this.state;
    const { className } = this.props;
    return (
      <TextField
        className={className}
        value={value}
        onChange={this.handleChange} />
    );
  }
}

NumberInput.defaultProps = {
  className: null,
};

NumberInput.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
};

export default NumberInput;
