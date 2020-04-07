import classNames from "classnames";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { AmendmentTooltip, PlfTooltip } from "../../tooltips";
import NumberInput from "./NumberInput";
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

function formatNumber(number) {
  // Hack to support negative zeros.
  // Negative zeros should disappear in the future after cleaning up the application.
  if (number === 0) {
    return "0";
  }
  return number.toLocaleString();
}


class Parameter extends PureComponent {
  render() {
    const {
      amendmentTitle, amendmentValue, editable, initialValue,
      onAmendmentChange, plfTitle, plfValue, size,
    } = this.props;
    const equal = initialValue === amendmentValue;

    return (
      <span className={styles.noOverflow}>
        {
          !equal && <span className={styles.initialValue}>{formatNumber(initialValue)}</span>
        }
        {
          plfValue !== null && withTooltip(
            PlfTooltip,
            plfTitle,
            <span className={styles.plfValue}>{formatNumber(plfValue)}</span>,
          )
        }
        {
          withTooltip(AmendmentTooltip, amendmentTitle, editable
            ? (
              <NumberInput
                className={classNames({
                  [styles.amendmentInput]: true,
                  [styles.amendmentValue]: true,
                  [styles.amendmentValueModified]: !equal,
                  [styles.smallInput]: size === "small",
                })}
                value={amendmentValue}
                onChange={onAmendmentChange} />
            )
            : (
              <span className={classNames({
                [styles.amendmentValue]: true,
                [styles.amendmentValueModified]: !equal,
              })}>
                {formatNumber(amendmentValue)}
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
