import CircularProgress from "@material-ui/core/CircularProgress";
import HomeIcon from "@material-ui/icons/Home";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
// eslint-disable-next-line no-unused-vars
import { DotationsState } from "../../../../redux/reducers/results";
import {
  Card, ResultValues, SubCard,
} from "../../../common";
import { EligibiliteSpot } from "../common";
import styles from "./CommuneSummary.module.scss";

const mapStateToProps = ({ results }: RootState, { dotation }: { dotation: keyof DotationsState["communes"] }) => ({
  amendement: {
    nouvellementEligibles: results.baseToAmendement
      .dotations.state?.communes[dotation].nouvellementEligibles,
    plusEligibles: results.baseToAmendement.dotations.state?.communes[dotation].plusEligibles,
    toujoursEligibles: results.baseToAmendement.dotations
      .state?.communes[dotation].toujoursEligibles,
  },
  isFetching: results.amendement.dotations.isFetching
    || results.base.dotations.isFetching
    || results.plf.dotations.isFetching,
  plf: {
    nouvellementEligibles: results.baseToPlf.dotations
      .state?.communes[dotation].nouvellementEligibles,
    plusEligibles: results.baseToPlf.dotations.state?.communes[dotation].plusEligibles,
    toujoursEligibles: results.baseToPlf.dotations.state?.communes[dotation].toujoursEligibles,
  },
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {
  dotation: keyof DotationsState["communes"];
}

function renderSubCardContent(plf: number|undefined, amendement: number|undefined): JSX.Element {
  return (
    <div className={styles.subCardContent}>
      {
        typeof plf === "number" && plf !== 0
          ? (
            <div className={styles.plf}>
              {plf}
              <HomeIcon fontSize="default" />
            </div>
          )
          : null
      }
      {
        typeof amendement === "number" && amendement !== 0
          ? (
            <div className={styles.amendement}>
              {amendement}
              <HomeIcon fontSize="default" />
            </div>
          ) : null
      }
    </div>
  );
}

class CommuneSummary extends PureComponent<Props> {
  render() {
    const {
      amendement, dotation, isFetching, plf,
    } = this.props;
    return (
      <Card
        content1={isFetching ? <CircularProgress /> : (
          <div>
            <div className={styles.total}>
              <ResultValues
                path={`dotations.state.communes.${dotation}.eligibles`}
              />
            </div>
          </div>
        )}
        // Do not display the content if both fields are undefined OR equal zero.
        content2={(plf.nouvellementEligibles || amendement.nouvellementEligibles) ? (
          <SubCard
            icon={<EligibiliteSpot eligible small />}
            subTitle="par rapport au droit existant"
            title="Nouvellement éligibles"
          >
            {renderSubCardContent(plf.nouvellementEligibles, amendement.nouvellementEligibles)}
          </SubCard>
        ) : null}
        // Do not display the content if both fields are undefined OR equal zero.
        content3={(plf.plusEligibles || amendement.plusEligibles) ? (
          <SubCard
            icon={<EligibiliteSpot small eligible={false} />}
            subTitle="par rapport au droit existant"
            title="Nouvellement non-éligibles"
          >
            {renderSubCardContent(plf.plusEligibles, amendement.plusEligibles)}
          </SubCard>
        ) : null}
        icon={<img alt="" className={styles.image} src="/icons/picto-communes-eligibles.png" />}
        title={`Nombre de communes éligibles à la ${dotation.toLocaleUpperCase()}`}
      />
    );
  }
}

const ConnectedCommuneSummary = connector(CommuneSummary);

export { ConnectedCommuneSummary as CommuneSummary };
