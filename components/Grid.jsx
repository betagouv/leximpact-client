import { Grid } from "@material-ui/core";

import RecettesCard from "./RecettesCard";
import SimpleCard from "./SimpleCard";

export default () => (
  <Grid container sm={12} spacing={32}>
    <Grid item sm={6}>
      <RecettesCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
    <Grid item sm={6}>
      <SimpleCard />
    </Grid>
  </Grid>
);
