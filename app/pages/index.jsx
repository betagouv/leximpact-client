import React, {Fragment} from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import PropTypes from "prop-types"
import Button from "@material-ui/core/Button"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Paper,
    Item
} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles/"
import withRoot from "../lib/withRoot"
import SimpleCard from "../components/SimpleCard"
import Grid from "../components/Grid"
import CardHeader from '@material-ui/core/CardHeader'
import Header from "../components/Header"

const Plot = dynamic(import("../components/Plot"), {
    ssr: false,
})

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 5,
        textAlign: "center",
    },
})

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleClose() {
        this.setState({
            open: false,
        })
    }

    handleClick() {
        this.setState({
            open: true,
        })
    }

    render() {
        const { classes } = this.props
        const { open } = this.state
        console.log("coucou "+classes.root)
        return (
            <Fragment>
                <Header/>
                <Head><title>LexImpact</title></Head>
                    <div className={"moitie-gauche "+classes.root}>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" component="h3">
                            Article - code général des impôts
                            </Typography>
                            <Typography component="p">
                             blabla
                            </Typography>
                        </Paper>
                    </div>
                
                <div className={"moitie-droite "+classes.root}>
                    <Grid>
                    </Grid>
                </div>

                <div>
                   <Typography variant="h1" gutterBottom>LexImpact</Typography>
                    <Plot />
                   <Button variant="contained" color="secondary" onClick={this.handleClick}>Calculer</Button>
                   <Dialog open={open} onClose={this.handleClose}>
                 <DialogTitle>Combien ça coûte ?</DialogTitle>
                      <DialogContent>
                           <DialogContentText>1 000 000 €</DialogContentText>
                       </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.handleClose}>OK</Button>
                        </DialogActions>
                        </Dialog>
                 </div>
            </Fragment>
        )
    }
}

                   

Index.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withRoot(withStyles(styles)(Index))
