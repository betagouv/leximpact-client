import classNames from "classnames";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { fetchSimPop, simulateCasTypes, simulateDotations } from "../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import { formatNumber } from "../../utils";
import { NumberInput } from "./number-input";
import styles from "./Values.module.scss";

/* The |null are added because we have JS files using this component. */
interface Props {
  amendementInputSize?: "small"|"xl"|null;
  amendementValue?: number|string;
  baseValue?: number|string|null;
  decimals?: number;
  editable?: boolean,
  onAmendementChange?: (value: number) => void,
  offset?: number;
  plfValue?: number|string|null;
  symbol?: string;
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
      amendementInputSize, amendementValue, baseValue,
      decimals, editable, onAmendementChange, plfValue, symbol,
    } = this.props;

    let { offset } = this.props;
    if (offset === undefined) {
      offset = 0;
    }

    function isDefined(value: number|string|null|undefined): value is number|string {
      // The "=== null" checks is still needed because there are .jsx files using defaultProps.
      return value !== null && value !== undefined;
    }

    function isEqual(value1: number|string|null|undefined, value2: number|string|null|undefined): boolean {
      if (typeof value1 === 'number' && typeof value2 === 'number') {
        return formatNumber(value1, { decimals }) === formatNumber(value2, { decimals });
      }
      return value1 === value2
    }

    return (
      <span className={styles.noOverflow}>
        {
          !isDefined(baseValue) && !isDefined(plfValue) && !isDefined(amendementValue)
            && "-"
        }
        {
          isDefined(baseValue) && !isEqual(baseValue, plfValue) && (
            <span className={classNames({
              [styles.baseValue]: true,
              [styles.replacedWithPlf]: !isEqual(plfValue, baseValue),
              [styles.replacedWithAmendement]: isEqual(plfValue, baseValue)
                && !isEqual(amendementValue, plfValue),
            })}>
              {typeof baseValue === "string" ? baseValue : formatNumber(baseValue + offset, { decimals })}
            </span>
          )
        }
        {
          isDefined(baseValue)
          && !isEqual(baseValue, plfValue)
          && (isDefined(plfValue) || isDefined(amendementValue))
            && <span>&nbsp;&nbsp;</span>
        }
        {
          isDefined(plfValue) && !isEqual(amendementValue, plfValue) && (
            <span className={classNames({
              [styles.baseValue]: isEqual(baseValue, plfValue),
              [styles.plfValue]: !isEqual(baseValue, plfValue),
              [styles.replacedWithAmendement]: !isEqual(amendementValue, plfValue),
            })}>
              {typeof plfValue === "string" ? plfValue : formatNumber(plfValue + offset, { decimals })}
            </span>
          )
        }
        {
          isDefined(plfValue)
          && !isEqual(amendementValue, plfValue)
          && isDefined(amendementValue)
          && <span>&nbsp;&nbsp;</span>
        }
        {
          isDefined(amendementValue) && (
            <span>
              {
              // eslint-disable-next-line no-nested-ternary
                editable ? (
                  typeof amendementValue === "number" ? (
                    <NumberInput
                      className={classNames({
                        [styles.baseValue]: isEqual(amendementValue, plfValue) && isEqual(plfValue, baseValue),
                        [styles.plfValue]: isEqual(amendementValue, plfValue) && !isEqual(plfValue, baseValue),
                        [styles.amendementValue]: !isEqual(amendementValue, plfValue),
                        // Sizes
                        [styles.amendementInput]: true,
                        [styles.smallInput]: amendementInputSize === "small",
                        [styles.xlInput]: amendementInputSize === "xl",
                      })}
                      value={amendementValue + offset}
                      onChange={onAmendementChange
                        ? value => onAmendementChange(value - (offset as number))
                        : (() => {})
                      }
                      onEnter={this.runSimulation} />
                  ) : null
                ) : (
                  <span className={classNames({
                    [styles.baseValue]: isEqual(amendementValue, plfValue) && isEqual(plfValue, baseValue),
                    [styles.plfValue]: isEqual(amendementValue, plfValue) && !isEqual(plfValue, baseValue),
                    [styles.amendementValue]: !isEqual(amendementValue, plfValue),
                  })}>
                    {typeof amendementValue === "string" ? amendementValue : formatNumber(amendementValue + offset, { decimals })}
                  </span>
                )}
              {symbol && ` ${symbol}`}
            </span>
          )
        }
      </span>
    );
  }
}

const ConnectedValues = connector(Values);

export { ConnectedValues as Values };
