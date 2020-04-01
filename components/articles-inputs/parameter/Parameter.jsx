import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { AmendmentTooltip, PlfTooltip } from "../../tooltips";
import styles from "./Parameter.module.scss";

function withTooltip(Tooltip, title, element) {
  if (title === null || title === undefined) {
    return element;
  }

  return (
    <Tooltip
      placement="bottom-start"
      title={title}>
      {element}
    </Tooltip>
  );
}

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
      amendmentTitle, amendmentValue, editable, initialValue, plfTitle, plfValue, size,
    } = this.props;
    const equal = initialValue === amendmentValue;

    return (
      <span className={styles.noOverflow}>
        {
          !equal && <span className={styles.initialValue}>{initialValue.toLocaleString()}</span>
        }
        {
          plfValue !== null && withTooltip(
            PlfTooltip,
            plfTitle,
            <span className={styles.plfValue}>{plfValue.toLocaleString()}</span>,
          )
        }
        {
          withTooltip(AmendmentTooltip, amendmentTitle, editable
            ? (
              <TextField
                className={classNames({
                  [styles.amendmentInput]: true,
                  [styles.amendmentValue]: true,
                  [styles.amendmentValueModified]: !equal,
                  [styles.smallInput]: size === "small",
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
                {amendmentValue.toLocaleString()}
              </span>
            ))
        }
      </span>
    );
  }
}

Parameter.defaultProps = {
  amendmentTitle: null,
  editable: false,
  onAmendmentChange: () => { },
  plfTitle: null,
  plfValue: null,
  size: "large",
};

Parameter.propTypes = {
  amendmentTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  amendmentValue: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  initialValue: PropTypes.number.isRequired,
  onAmendmentChange: PropTypes.func,
  plfTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  plfValue: PropTypes.number,
  size: PropTypes.oneOf(["small", "large"]),
};

export { Parameter };
