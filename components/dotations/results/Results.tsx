import Grid from "@material-ui/core/Grid";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
// import { CommuneSearch } from "./commune-search";
import { CommuneStrateDetails } from "./commune-strate-details";
import { CommuneSummary } from "./commune-summary";
import { CommuneType } from "./commune-type";
import styles from "./Results.module.scss";

const mapStateToProps = ({ descriptions }: RootState) => ({
  communesTypes: descriptions.dotations.communesTypes,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

class Results extends PureComponent<Props> {
  render() {
    const { communesTypes } = this.props;
    return (
      <div className={styles.container}>
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneSummary />
          </Grid>
          <Grid item lg={8} md={12} sm={6} xl={6} xs={12}>
            <CommuneStrateDetails />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {communesTypes.map((communeType, index) => (
            <Grid key={communeType.code} item lg={4} md={6} sm={6} xl={3} xs={12}>
              <CommuneType
                code={communeType.code}
                departement={communeType.departement}
                habitants={communeType.habitants}
                index={index}
                name={communeType.name}
                potentielFinancier={communeType.potentielFinancier}
              />
            </Grid>
          ))}
          {/* <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneSearch />
          </Grid> */}
        </Grid>
      </div>
    );
  }
}

const ConnectedResults = connector(Results);

export { ConnectedResults as Results };
