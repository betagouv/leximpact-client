import { PureComponent } from "react";

import { formatNumber } from "../../../../utils";
import styles from "./NumberInput.module.scss";

function parseNumber(str: string): number {
  return parseFloat(
    str
      .replace(/\s/g, "")
      .replace(/,/g, "."),
  );
}

interface State {
  value: string;
}

interface Props {
  className?: string;
  value: number;
  onChange: (value: number) => void;
}

export class NumberInput extends PureComponent<Props, State> {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    const { value } = this.props;
    this.state = {
      value: formatNumber(value),
    };
  }

  // eslint-disable-next-line react/no-deprecated
  componentWillReceiveProps(nextProps: Props) {
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
      <input
        className={`${styles.value} ${className || ""}`}
        value={value}
        onChange={this.handleChange} />
    );
  }
}
