import classNames from "classnames";
import { PureComponent } from "react";

import { PlfTooltip, ReformTooltip } from "../../tooltips";
import { formatNumber } from "../../utils";
import { NumberInput } from "./number-input";
import styles from "./Parameter.module.scss";

function withTooltip(
  Tooltip: any, title: string|JSX.Element|undefined|null, element: JSX.Element
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
  amendementValue: number;
  baseValue?: number|null;
  editable?: boolean,
  onAmendementChange?: (value: number) => void,
  plfTitle?: string|JSX.Element|null;
  plfValue?: number|null;
}

export class Parameter extends PureComponent<Props> {
  render() {
    const {
      amendementInputSize, amendementTitle, amendementValue, baseValue,
      editable, onAmendementChange, plfTitle, plfValue,
    } = this.props;
    const equal = baseValue === amendementValue;
  
    return (
      <span className={styles.noOverflow}>
        {
          baseValue !== null && baseValue !== undefined && !equal
          && <span className={styles.baseValue}>{formatNumber(baseValue)}</span>
        }
        {
          plfValue !== null && plfValue !== undefined && withTooltip(
            PlfTooltip,
            plfTitle,
            <span className={styles.plfValue}>{formatNumber(plfValue)}</span>,
          )
        }
        {
          withTooltip(ReformTooltip, amendementTitle, editable
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
                {formatNumber(amendementValue)}
              </span>
            ))
        }
      </span>
    );
  }
}
