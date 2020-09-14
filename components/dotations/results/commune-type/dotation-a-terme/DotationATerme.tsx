import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
import { HelpButton, ResultValues } from "../../../../common";
import styles from "./DotationATerme.module.scss";

interface Props {
  index: number;
}

const mapStateToProps = ({ results }: RootState, { index }: Props) => ({
  amendement: results.amendement.dotations.state?.communes.dsr.communes[index]?.dureeAvantTerme,
  base: results.base.dotations.state?.communes.dsr.communes[index]?.dureeAvantTerme,
  plf: results.plf.dotations.state?.communes.dsr.communes[index]?.dureeAvantTerme,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

class DotationATerme extends PureComponent<PropsFromRedux & Props> {
  render() {
    const {
      amendement, base, index, plf,
    } = this.props;
    if (amendement === plf && plf === base && (base === 1 || base === undefined)) {
      return <div />;
    }

    return (
      <div className={styles.container}>
        <div className={styles.text}>
          <span>Montant à terme</span>
          <HelpButton name="montants dsr" />
          :
        </div>
        <div className={styles.dotationParHab}>
          <ResultValues
            decimals={1}
            path={`dotations.state.communes.dsr.communes.${index}.dotationParHab`}
          />
          <span>&nbsp;&nbsp;€ /hab.</span>
        </div>
      </div>
    );
  }
}

const ConnectedComponent = connector(DotationATerme);

export { ConnectedComponent as DotationATerme };
