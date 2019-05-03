import { useState, Fragment } from "react"
import Head from "next/head"
import dynamic from "next/dynamic"
import Button from "@material-ui/core/Button"
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Paper,
    Item,
} from "@material-ui/core"
import Typography from "@material-ui/core/Typography"
import { withStyles } from "@material-ui/core/styles/"
import withRoot from "lib/withRoot"
import SimpleCard from "components/SimpleCard"
import Grid from "components/Grid"
import CardHeader from '@material-ui/core/CardHeader'
import Header from "components/Header"
import Article from "components/Article"
import ApiCall from "components/ApiCall"
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
        dataviz: {
            margin: "4em",
            color: "blue",
        },
        article: {
            margin: "1em",
            padding: "2em",
            opacity: 1,
        },
        main: {
            background: "#FFFCB2",
            margin: "0em",
        },
    })
}

type Props = {
    classes: Object,
}

function index({ classes }: Props) {
    const [open, setOpen] = useState(false)

    function handleClose() {
        return setOpen(false)
    }

    function handleClick() {
        return setOpen(true)
    }

    return (
        <Fragment>
            <ApiCall />
            <Header />
            <Head><title>LexImpact</title></Head>

            <div className={classes.main}>
                <div className={`moitie-gauche ${classes.root}`}>
                    <Paper className={classes.paper}>
                        <Article />
                    </Paper>
                </div>
                <div className={classes.dataviz}>
                    <Grid />
                </div>

                <div className={`${classes.root} dorine`}>
                    <Typography variant="h1" gutterBottom>LexImpact</Typography>
                    <Plot />
                    <Button variant="contained" color="secondary" onClick={handleClick}>Calculer</Button>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Combien ça coûte ?</DialogTitle>
                        <DialogContent>
                            <DialogContentText>1 000 000 €</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button color="primary" onClick={handleClose}>OK</Button>
                        </DialogActions>
                    </Dialog>
                    <div className={classes.dorine}>
                        asdsadf
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default (
    index
    |> (_ => withStyles(styles)(_))
    |> withRoot
)
