import { useState, Fragment } from "react"
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

function styles(theme) {
    const { mixins, spacing } = theme

    return ({
        root: {
            paddingTop: spacing.unit * 5,
            textAlign: "center",
        },
        paper: {
            ...mixins.gutters(),
            paddingBottom: spacing.unit * 2,
            paddingTop: spacing.unit * 2,
            margin: "1em auto",
            width: "25em",
        },
        dorine: {
            background: "red",
        },
    })
}

function Index(props) {
    const { classes } = props
    const [open, setOpen] = useState(false)

    function handleClose() {
        return setOpen(false)
    }

    function handleClick() {
        return setOpen(true)
    }

    return (
        <Fragment>
            <Head><title>LexImpact</title></Head>
            <div className={`${classes.root} dorine`}>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Combien ça coûte ?</DialogTitle>
                    <DialogContent>
                        <DialogContentText>1 000 000 €</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={handleClose}>OK</Button>
                    </DialogActions>
                </Dialog>
                <Typography variant="h1" gutterBottom>LexImpact</Typography>
                <Plot />
                <Button variant="contained" color="secondary" onClick={handleClick}>Calculer</Button>
                <div className={classes.dorine}>
                    asdsadf
                </div>
            </div>
        </Fragment>
    )
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
