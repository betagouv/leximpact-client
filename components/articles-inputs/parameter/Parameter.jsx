import classNames from "classnames";
import PropTypes from "prop-types";
import { PureComponent } from "react";

import { PlfTooltip, ReformTooltip } from "../../tooltips";
import { formatNumber } from "../../utils";
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

class Parameter extends PureComponent {
  render() {
    const {
      baseValue, editable, onReformChange, plfTitle,
      plfValue, reformTitle, reformValue, size,
    } = this.props;
    const equal = baseValue === reformValue;

    return (
      <span className={styles.noOverflow}>
        {
          !equal && <span className={styles.baseValue}>{formatNumber(baseValue)}</span>
        }
        {
          plfValue !== null && withTooltip(
            PlfTooltip,
            plfTitle,
            <span className={styles.plfValue}>{formatNumber(plfValue)}</span>,
          )
        }
        {
          withTooltip(ReformTooltip, reformTitle, editable
            ? (
              <NumberInput
                className={classNames({
                  [styles.reformInput]: true,
                  [styles.reformValue]: true,
                  [styles.reformValueModified]: !equal,
                  [styles.smallInput]: size === "small",
                })}
                value={reformValue}
                onChange={onReformChange} />
            )
            : (
              <span className={classNames({
                [styles.reformValue]: true,
                [styles.reformValueModified]: !equal,
              })}>
                {formatNumber(reformValue)}
              </span>
            ))
        }
      </span>
    );
  }
}

Parameter.defaultProps = {
  reformTitle: null,
  editable: false,
  onReformChange: () => { },
  plfTitle: null,
  plfValue: null,
  size: "large",
};

Parameter.propTypes = {
  reformTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  reformValue: PropTypes.number.isRequired,
  editable: PropTypes.bool,
  baseValue: PropTypes.number.isRequired,
  onReformChange: PropTypes.func,
  plfTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  plfValue: PropTypes.number,
  size: PropTypes.oneOf(["small", "large"]),
};

export { Parameter };
