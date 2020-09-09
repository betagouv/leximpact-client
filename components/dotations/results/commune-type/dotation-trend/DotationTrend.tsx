import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
import { HelpButton } from "../../../../common";
import { TrendArrow } from "../../common";
import styles from "./DotationTrend.module.scss";

interface Props {
  index: number;
}

const mapStateToProps = ({ results }: RootState, { index }: Props) => ({
  diff: results.baseToAmendement.dotations
    .state?.communes.dgf.communes[index]?.diffDotationParHab ?? null,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class DotationTrend extends PureComponent<Props & PropsFromRedux> {
  getText(): string|null {
    const { diff } = this.props;
    if (diff === null) {
      return null;
    }
    if (diff > 0) {
      return "Tendance à la hausse";
    }
    if (diff < 0) {
      return "Tendance à la baisse";
    }
    return "Pas d'évolution";
  }

  render() {
    const { diff } = this.props;
    if (diff === null) {
      return null;
    }
    return (
      <div className={styles.container}>
        <div className={styles.icon}>
          <TrendArrow value={diff} />
        </div>
        <div className={styles.texts}>
          <div className={styles.title}>
            {this.getText()}
            {" "}
            <HelpButton name="trend" />
          </div>
          <div className={styles.subTitle}>
            du montant total
            <br />
            par rapport au code existant
          </div>
        </div>
      </div>
    );
  }
}

const ConnectedDotationTrend = connector(DotationTrend);

export { ConnectedDotationTrend as DotationTrend };
