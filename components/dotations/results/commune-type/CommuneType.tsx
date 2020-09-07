import CircularProgress from "@material-ui/core/CircularProgress";
import LocalFloristIcon from "@material-ui/icons/LocalFlorist";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Fragment, PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

import { removeCommuneType } from "../../../../redux/actions";
// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../../redux/reducers";
// eslint-disable-next-line no-unused-vars
import { Commune } from "../../../../redux/reducers/descriptions/dotations";
import { Card } from "../../../common";
import styles from "./CommuneType.module.scss";
import { DotationDiff } from "./dotation-diff";
import { DotationParHab } from "./dotation-par-hab";
import { DotationTrend } from "./dotation-trend";
import { Eligibilite } from "./eligibilite";
import { HabitantLabel } from "./habitant-label";
import { PotentielFinancier } from "./potentiel-financier";

const mapStateToProps = ({ results }: RootState) => ({
  isFetching: results.amendement.dotations.isFetching
    || results.base.dotations.isFetching
    || results.plf.dotations.isFetching,
});

const mapDispatchToProps = dispatch => ({
  remove: (index: number) => dispatch(removeCommuneType(index)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & Commune & {
  index: number;
}

class CommuneType extends PureComponent<Props> {
  render() {
    const {
      departement, habitants, index, isFetching, name, potentielFinancier, remove,
    } = this.props;
    return (
      <Card
        colored
        content1={(
          <Fragment>
            <div className={styles.habitants}>
              <HabitantLabel habitants={habitants} />
            </div>
            <PotentielFinancier
              potentielFinancier={potentielFinancier}
            />
          </Fragment>
        )}
        content2={
          isFetching ? <CircularProgress />
            : (
              <Fragment>
                <div className={styles.trend}>
                  <DotationTrend index={index} />
                </div>
                <div className={styles.dotation}>
                  <div className={styles.icons}>
                    <div>
                      <LocalFloristIcon />
                    </div>
                    <div>
                      <DotationDiff dotation="dsr" index={index} />
                    </div>
                    <div />
                  </div>
                  <div className={styles.text}>
                    <Eligibilite dotation="dsr" index={index} />
                    <DotationParHab dotation="dsr" index={index} />
                  </div>
                </div>
                <div className={styles.dotation}>
                  <div className={styles.icons}>
                    <div>
                      <LocationCityIcon />
                    </div>
                    <div>
                      <DotationDiff dotation="dsu" index={index} />
                    </div>
                    <div />
                  </div>
                  <div className={styles.text}>
                    <Eligibilite dotation="dsu" index={index} />
                    <DotationParHab dotation="dsu" index={index} />
                  </div>
                </div>
              </Fragment>
            )}
        subTitle={departement}
        title={name}
        onClose={() => remove(index)}
      />
    );
  }
}

const ConnectedCommuneType = connector(CommuneType);

export { ConnectedCommuneType as CommuneType };
