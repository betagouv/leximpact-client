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
        <Grid container spacing={24}>
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneSummary />
          </Grid>
          <Grid item lg={8} md={12} sm={6} xl={6} xs={12}>
            <CommuneStrateDetails />
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneType
              departement="Isère"
              name="Vaujany"
            />
          </Grid>
          <Grid item lg={4} md={6} sm={6} xl={3} xs={12}>
            <CommuneType
              departement="Quasquara"
              name="Corse-du-sud"
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
