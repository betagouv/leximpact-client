import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
import { Parameter, ResultValues } from "../../../articles-inputs/parameter";
import { Card, SubCard } from "../../../card";
import styles from "./CommuneSummary.module.scss";
import { EligibiliteSpot } from "../common";

const mapStateToProps = ({ results }: RootState) => ({
  amendement: {
    nouvellementEligibles: results.baseToAmendement
      .dotations.state?.communes.dsr.nouvellementEligibles,
    plusEligibles: results.baseToAmendement.dotations.state?.communes.dsr.plusEligibles,
    toujoursEligibles: results.baseToAmendement.dotations.state?.communes.dsr.toujoursEligibles,
  },
  plf: {
    nouvellementEligibles: results.baseToPlf.dotations.state?.communes.dsr.nouvellementEligibles,
    plusEligibles: results.baseToPlf.dotations.state?.communes.dsr.plusEligibles,
    toujoursEligibles: results.baseToPlf.dotations.state?.communes.dsr.toujoursEligibles,
  },
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

class CommuneSummary extends PureComponent<Props> {
  render() {
    const { amendement, plf } = this.props;
    return (
      <Card
        content1={(
          <div>
            <div className={styles.total}>
              <ResultValues
                path="dotations.state.communes.dsr.eligibles"
              />
            </div>
          </div>
        )}
        content2={(
          <SubCard
            icon={<EligibiliteSpot eligible small />}
            title="Nouvellement éligibles"
            subTitle="par rapport au droit existant"
          >
            <Parameter
              amendementValue={amendement.nouvellementEligibles}
              plfValue={plf.nouvellementEligibles} />
          </SubCard>
        )}
        content3={(
          <SubCard
            icon={<EligibiliteSpot eligible={false} small />}
            title="Nouvellement non-éligibles"
            subTitle="par rapport au droit existant"
          >
            <Parameter
              amendementValue={amendement.plusEligibles}
              plfValue={plf.plusEligibles} />
          </SubCard>
        )}
        title="Nombre de communes éligibles"
      />
    );
  }
}

const ConnectedCommuneSummary = connector(CommuneSummary);

export { ConnectedCommuneSummary as CommuneSummary };
