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
      amendementValue, baseValue, editable, onAmendementChange,
      plfTitle, plfValue, reformInputSize, reformTitle,
    } = this.props;
    const equal = baseValue === amendementValue;

    return (
      <span className={styles.noOverflow}>
        {
          baseValue !== null && !equal
          && <span className={styles.baseValue}>{formatNumber(baseValue)}</span>
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
                  [styles.amendementValue]: true,
                  [styles.amendementValueModified]: !equal,
                  [styles.smallInput]: reformInputSize === "small",
                })}
                value={amendementValue}
                onChange={onAmendementChange} />
            )
            : (
              <span className={classNames({
                [styles.amendementValue]: true,
                [styles.amendementValueModified]: !equal,
              })}>
                {formatNumber(amendementValue)}
              </span>
            ))
        }
      </span>
    );
  }
}

Parameter.defaultProps = {
  baseValue: null,
  editable: false,
  onAmendementChange: () => { },
  plfTitle: null,
  plfValue: null,
  reformInputSize: "large",
  reformTitle: null,
};

Parameter.propTypes = {
  amendementValue: PropTypes.number.isRequired,
  baseValue: PropTypes.number,
  editable: PropTypes.bool,
  onAmendementChange: PropTypes.func,
  plfTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  plfValue: PropTypes.number,
  reformInputSize: PropTypes.oneOf(["small", "large"]),
  reformTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export { Parameter };
