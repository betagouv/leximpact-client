import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../../../../../redux/reducers/results";
import styles from "./DotationDiff.module.scss";

interface Props {
  index: number;
  dotation: keyof DotationsState["communes"];
}

const mapStateToProps = ({ results }: RootState, { dotation, index }: Props) => ({
  diff: results.baseToAmendement.dotations
    .state?.communes[dotation].communes[index].diffDotationParHab ?? null,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class DotationDiff extends PureComponent<PropsFromRedux & Props> {
  render() {
    const { diff } = this.props;
    if (diff === null) {
      return <span />;
    }

    if (diff > 0) {
      return <img alt="" className={styles.icon} src="/icons/picto-dotation-monte.svg" />;
    } if (diff < 0) {
      return <img alt="" className={styles.icon} src="/icons/picto-dotation-baisse.svg" />;
    }
    return <span />;
  }
}

const ConnectedDotationDiff = connector(DotationDiff);

export { ConnectedDotationDiff as DotationDiff };
