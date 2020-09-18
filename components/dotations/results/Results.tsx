import Grid from "@material-ui/core/Grid";
import { PureComponent } from "react";
// eslint-disable-next-line no-unused-vars
import { connect, ConnectedProps } from "react-redux";

// eslint-disable-next-line no-unused-vars
import { RootState } from "../../../redux/reducers";
import { InformationPanel } from "../../common";
import { CommuneSearch } from "./commune-search";
import { CommuneStrateDetails } from "./commune-strate-details";
import { CommuneSummary } from "./commune-summary";
import { CommuneType } from "./commune-type";
import styles from "./Results.module.scss";

const INFORMATION_PANEL_NAME = "dotations";

const mapStateToProps = ({ descriptions, display }: RootState) => ({
  communesTypes: descriptions.dotations.communesTypes,
  isInformationPanelVisible: display.currentInformationPanels.includes(INFORMATION_PANEL_NAME),
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux & {}

class Results extends PureComponent<Props> {
  render() {
    const { communesTypes, isInformationPanelVisible } = this.props;
    return (
      <div className={styles.container}>
        {isInformationPanelVisible && (
          <Grid container spacing={3}>
            <Grid item lg={8} md={12} sm={12} xl={9} xs={12}>
              <InformationPanel
                name={INFORMATION_PANEL_NAME}
                title="Les montants des dotations calculées ci-dessous sont des estimations."
              >
                Les dotations de LexImpact s’appuient sur les données de l’année 2020. Elles
                peuvent donc différer des montants effectivement perçus l’année prochaine.
                Seuls les montants calculés par la DGCL font foi.
              </InformationPanel>
            </Grid>
          </Grid>
        )}
        <Grid container spacing={3}>
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneSummary dotation="dsr" />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneSummary dotation="dsu" />
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
                potentielFinancierParHab={communeType.potentielFinancierParHab}
              />
            </Grid>
          ))}
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneSearch />
          </Grid>
        </Grid>
      </div>
    );
  }
}

const ConnectedResults = connector(Results);

export { ConnectedResults as Results };
