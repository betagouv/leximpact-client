import classNames from "classnames";
import { PureComponent } from "react";

import { PlfTooltip, ReformTooltip } from "../../tooltips";
import { formatNumber } from "../../utils";
import { NumberInput } from "./number-input";
import styles from "./Values.module.scss";

function withTooltip(
  Tooltip: any, title: string|JSX.Element|undefined|null, element: JSX.Element,
): JSX.Element {
  if (title == null || title === undefined) {
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

/* The |null are added because we have JS files using this component. */
interface Props {
  amendementInputSize?: "small"|"xl"|null;
  amendementTitle?: string|JSX.Element|null;
  amendementValue?: number;
  baseValue?: number|null;
  decimals?: number;
  editable?: boolean,
  onAmendementChange?: (value: number) => void,
  plfTitle?: string|JSX.Element|null;
  plfValue?: number|null;
}

export class Values extends PureComponent<Props> {
  render() {
    const {
      amendementInputSize, amendementTitle, amendementValue, baseValue,
      decimals, editable, onAmendementChange, plfTitle, plfValue,
    } = this.props;
    const equal = baseValue === amendementValue;

    function isDefined(value: number|null|undefined): value is number {
      // The "=== null" checks is still needed because there are .jsx files using defaultProps.
      return value !== null && value !== undefined;
    }

    return (
      <span className={styles.noOverflow}>
        {
          !isDefined(baseValue) && !isDefined(plfValue) && !isDefined(amendementValue)
            && "-"
        }
        {
          isDefined(plfValue) && withTooltip(
            PlfTooltip,
            plfTitle,
            <span className={styles.plfValue}>{formatNumber(plfValue, { decimals })}</span>,
          )
        }
        {
          isDefined(plfValue) && (isDefined(baseValue) || isDefined(amendementValue))
            && <span>&nbsp;&nbsp;</span>
        }
        {
          isDefined(baseValue) && !equal
          && (
            <span className={classNames({
              [styles.baseValue]: true,
              [styles.crossedOut]: amendementValue !== undefined,
            })}>
              {formatNumber(baseValue, { decimals })}
            </span>
          )
        }
        {
          isDefined(baseValue) && isDefined(amendementValue) && !equal && <span>&nbsp;&nbsp;</span>
        }
        {
          isDefined(amendementValue) && withTooltip(ReformTooltip, amendementTitle, editable
            ? (
              <NumberInput
                className={classNames({
                  [styles.amendementInput]: true,
                  [styles.amendementValue]: true,
                  [styles.amendementValueModified]: !equal,
                  [styles.smallInput]: amendementInputSize === "small",
                  [styles.xlInput]: amendementInputSize === "xl",
                })}
                value={amendementValue}
                onChange={onAmendementChange || (() => {})} />
            )
            : (
              <span className={classNames({
                [styles.amendementValue]: true,
                [styles.amendementValueModified]: !equal,
              })}>
                {formatNumber(amendementValue, { decimals })}
              </span>
            ))
        }
      </span>
    );
  }
}
