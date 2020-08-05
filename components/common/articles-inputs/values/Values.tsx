import classNames from "classnames";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { fetchSimPop, simulateCasTypes, simulateDotations } from "../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
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
  offset?: number;
  plfTitle?: string|JSX.Element|null;
  plfValue?: number|null;
}

const mapStateToProps = ({ token }: RootState) => ({
  isUserLogged: !!token,
});

const mapDispatchToProps = dispatch => ({
  simulateDotations: () => dispatch(simulateDotations()),
  simulateIRCasType: () => dispatch(simulateCasTypes()),
  simulateIRPopulation: () => dispatch(fetchSimPop()),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class Values extends PureComponent<Props & PropsFromRedux> {
  constructor(props) {
    super(props);
    this.runSimulation = this.runSimulation.bind(this);
  }

  runSimulation() {
    const { isUserLogged } = this.props;
    const url = document.location;
    if (url.href.includes("/dotations")) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.simulateDotations();
    } else if (url.href.includes("/ir")) {
      // eslint-disable-next-line react/destructuring-assignment
      this.props.simulateIRCasType();
      if (isUserLogged) {
        // eslint-disable-next-line react/destructuring-assignment
        this.props.simulateIRPopulation();
      }
    }
  }

  render() {
    const {
      amendementInputSize, amendementTitle, amendementValue, baseValue,
      decimals, editable, onAmendementChange, plfTitle, plfValue,
    } = this.props;

    let { offset } = this.props;
    if (offset === undefined) {
      offset = 0;
    }

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
            <span className={styles.plfValue}>
              {formatNumber(plfValue + offset, { decimals })}
            </span>,
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
              {formatNumber(baseValue + offset, { decimals })}
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
                value={amendementValue + offset}
                onChange={onAmendementChange
                  ? value => onAmendementChange(value - (offset as number))
                  : (() => {})
                }
                onEnter={this.runSimulation} />
            )
            : (
              <span className={classNames({
                [styles.amendementValue]: true,
                [styles.amendementValueModified]: !equal,
              })}>
                {formatNumber(amendementValue + offset, { decimals })}
              </span>
            ))
        }
      </span>
    );
  }
}

const ConnectedValues = connector(Values);

export { ConnectedValues as Values };
