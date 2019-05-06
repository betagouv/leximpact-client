import PropTypes from "prop-types"
import { Grid, Paper } from '@material-ui/core'
import SimpleCard from "../components/SimpleCard"
import RecettesCard from "../components/RecettesCard"

export default props =>
        <Grid container sm={12} spacing={32}>
                        <Grid item sm={6}>
                            <RecettesCard>
                            </RecettesCard>
                        </Grid>
                        <Grid item sm={6}>
                            <SimpleCard>
                            </SimpleCard>
                        </Grid>
                        <Grid item sm={6}>
                            <SimpleCard>
                            </SimpleCard>
                        </Grid>
                        <Grid item sm={6}>
                            <SimpleCard>
                            </SimpleCard>
                        </Grid>
                        <Grid item sm={6}>
                            <SimpleCard>
                            </SimpleCard>
                        </Grid>
                        <Grid item sm={6}>
                            <SimpleCard>
                            </SimpleCard>
                        </Grid>
                        <Grid item sm={6}>
                            <SimpleCard>
                            </SimpleCard>
                        </Grid>


        </Grid>
