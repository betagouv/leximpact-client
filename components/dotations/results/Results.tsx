import Grid from "@material-ui/core/Grid";
import { PureComponent } from "react";

import { CommuneSearch } from "./commune-search";
import { CommuneStrateDetails } from "./commune-strate-details";
import { CommuneSummary } from "./commune-summary";
import { CommuneType } from "./commune-type";
import styles from "./Results.module.scss";

export class Results extends PureComponent {
  render() {
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
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneType
              departement="Isère"
              dotationParHab={0}
              eligible={false}
              habitants={327}
              name="Vaujany"
              potentielFinancier={8854}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneType
              eligible
              departement="Quasquara"
              dotationParHab={128}
              habitants={57}
              name="Corse-du-sud"
              potentielFinancier={122}
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneSearch />
          </Grid>
        </Grid>
      </div>
    );
  }
}
