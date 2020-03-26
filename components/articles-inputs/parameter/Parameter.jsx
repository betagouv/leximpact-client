import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import styles from "./Parameter.module.scss";

class Parameter extends PureComponent {
  constructor(props) {
    super(props);
    this.emitAmendmentChange = this.emitAmendmentChange.bind(this);
  }

  emitAmendmentChange(element) {
    const { onAmendmentChange } = this.props;
    const value = parseInt(element.target.value, 10);
    onAmendmentChange(value);
  }

  render() {
    const {
      amendmentValue, editable, initialValue, plfValue,
    } = this.props;
    const equal = initialValue === amendmentValue;

    return (
      <span>
        {
          !equal && <span className={styles.initialValue}>{initialValue}</span>
        }
        {
          plfValue && <span className={styles.plfValue}>{plfValue}</span>
        }
        {
          editable
            ? (
              <TextField
                className={classNames({
                  [styles.amendmentInput]: true,
                  [styles.amendmentValue]: true,
                  [styles.amendmentValueModified]: !equal,
                })}
                type="number"
                value={amendmentValue}
                onChange={this.emitAmendmentChange} />
            )
            : (
              <span className={classNames({
                [styles.amendmentValue]: true,
                [styles.amendmentValueModified]: !equal,
              })}>
                {amendmentValue}
              </span>
            )
        }
        <span> €</span>
      </span>
    );
  }
}

Parameter.defaultProps = {
  editable: false,
  onAmendmentChange: () => {},
  plfValue: null,
};

Parameter.propTypes = {
  amendmentValue: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  initialValue: PropTypes.number.isRequired,
  onAmendmentChange: PropTypes.func,
  plfValue: PropTypes.number,
};

export { Parameter };
