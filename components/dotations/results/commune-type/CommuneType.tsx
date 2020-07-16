import { Fragment, PureComponent } from "react";

// eslint-disable-next-line no-unused-vars
import { Commune } from "../../../../redux/reducers/descriptions/dotations";
import { Card } from "../../../card";
import styles from "./CommuneType.module.scss";
import { DotationParHab } from "./dotation-par-hab";
import { Eligibilite } from "./eligibilite";
import { HabitantLabel } from "./habitant-label";
import { PotentielFinancier } from "./potentiel-financier";
import { RootState } from "../../../../redux/reducers";
import { connect, ConnectedProps } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const mapStateToProps = ({ results }: RootState) => ({
  isFetching: results.amendement.dotations.isFetching ||
    results.base.dotations.isFetching ||
    results.plf.dotations.isFetching,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & Commune & {
  index: number;
}

class CommuneType extends PureComponent<Props> {
  render() {
    const {
      departement, index, habitants, name, potentielFinancier, isFetching
    } = this.props;
    return (
      <Card
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
          isFetching ? <CircularProgress /> :
          (
          <Fragment>
            <div className={styles.resultCaption}>
              Eligibilité et montant de la DSR
            </div>
            <div className={styles.eligibilite}>
              <Eligibilite index={index} />
            </div>
            <DotationParHab index={index} />
          </Fragment>
        )}
        subTitle={departement}
        title={name}
      />
    );
  }
}

const ConnectedCommuneType = connector(CommuneType);

export { ConnectedCommuneType as CommuneType };
