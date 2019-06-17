import { useState, Fragment } from "react"
import Head from "next/head"
import { withStyles } from "@material-ui/core/styles/"
import withRoot from "lib/withRoot"
import Header from "components/Header"
import Reformeur from "components/Reformeur"
import "styles/index.scss"

function styles(theme) {
    const { mixins, spacing } = theme

    return {
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
            position: "relative",
        },
    }
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

    const desktop = 1025
    const tablet = 768 // and max-width: 1024px
    const phone = 767

    // const hugeScreen = 1824
    // const desktopServerRendering = 1600
    // const phoneOrTablet = 1224

    return (
        <Fragment>
            <Header />
            <Head>
                <title>LexImpact</title>
            </Head>
            <Reformeur />
        </Fragment>
    )
}

export default index |> (_ => withStyles(styles)(_)) |> withRoot
