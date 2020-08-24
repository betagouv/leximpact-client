import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../../redux/reducers";
import { ResultValues, Values } from "../../../../common";
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
    const today = new Date().getFullYear();
    // TODO: remove "|| base === undefined" once the server API is implemented.
    if (amendement === plf && plf === base && (base === 1 || base === undefined)) {
      return <div />;
    }

    return (
      <div className={styles.container}>
        <div className={styles.text}>
          Point d&apos;arrivée en
          {" "}
          {today + Math.max(amendement || 1, base || 1, plf || 1)}
          {/* <Values
            amendementValue={amendement ? today + amendement : undefined}
            baseValue={base ? today + base : undefined}
            plfValue={plf ? today + plf : undefined}
          /> */}
          {" "}
          :
        </div>
        <div className={styles.dotationParHab}>
          <ResultValues
            decimals={0}
            path={`dotations.state.communes.dsr.communes.${index}.dotationParHabATerme`}
          />
          <span>&nbsp;&nbsp;€ /hab.</span>
        </div>
      </div>
    );
  }
}

const ConnectedComponent = connector(DotationATerme);

export { ConnectedComponent as DotationATerme };
