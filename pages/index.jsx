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
import CardHeader from "@material-ui/core/CardHeader"
import Header from "components/Header"
import Article from "components/Article"
import Impact from "components/Impact"
import Drawer from "components/Drawer"
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
        
        article: {
            margin: "1em",
            padding: "2em",
            opacity: 1,
            position:"relative"
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
            <Header />
            <Head><title>LexImpact</title></Head>

            <div className="main-index">

                <div className="moitie-gauche">
                    <Paper className={classes.article} id="drawer-container">
                        <Drawer/>
                    </Paper>
                </div>
            
                    <div className="moitie-droite">
                        <Impact/>
                    </div>

                <div className="clearfix"></div>
                
            </div>


        </Fragment>
    )
}



export default (
    index
    |> (_ => withStyles(styles)(_))
    |> withRoot
)
