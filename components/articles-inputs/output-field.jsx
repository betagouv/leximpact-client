import PropTypes from "prop-types";
import { PureComponent } from "react";

class OutputField extends PureComponent {
  render() {
    const { style, value } = this.props;
    return (
      <span className="output-field" inline="true" style={style}>
        {value}
      </span>
    );
  }
}

OutputField.defaultProps = {
  style: {},
};

OutputField.propTypes = {
  style: PropTypes.shape(),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default OutputField;
