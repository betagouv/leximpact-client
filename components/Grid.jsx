import PropTypes from "prop-types"
import { Grid, Paper } from "@material-ui/core"
import SimpleCard from "./SimpleCard"
import RecettesCard from "./RecettesCard"

export default props => (
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
)
