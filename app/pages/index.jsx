import React, { Fragment } from "react"
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
} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles/"
import withRoot from "lib/withRoot"
import "styles/index.scss"

const Plot = dynamic(import("components/Plot"), { ssr: false })

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 5,
        textAlign: "center",
    },
    paper: {
        ...theme.mixins.gutters(),
        paddingBottom: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 2,
        margin: "1em auto",
        width: "25em",
    },
    dorine: {
        background: "red",
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

        return (
            <Fragment>
                <Head><title>LexImpact</title></Head>
                <div className={`${classes.root} dorine`}>
                    <Dialog open={open} onClose={this.handleClose}>
                        <DialogTitle>Combien ça coûte ?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>1 000 000 €</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={this.handleClose}>OK</Button>
                        </DialogActions>
                    </Dialog>
                    <Typography variant="h1" gutterBottom>LexImpact</Typography>
                    <Plot />
                    <Button variant="contained" color="secondary" onClick={this.handleClick}>Calculer</Button>
                    <div className={classes.dorine}>
                        asdsadf
                    </div>
                </div>
            </Fragment>
        )
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default (
    styles
    |> withStyles
    |> (_ => _(Index))
    |> withRoot
)
