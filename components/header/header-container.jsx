import { withStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Button from "@material-ui/core/Button"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Menu from "components/header/menu-container"

type Props = {
    classes: Object,
}

function styles(theme) {
    return {
        root: {
            width: "100%",
        },
        title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        ir: {
            fontSize: "16px",
            fontWeight: "light",
            textTransform: "uppercase",
            textDecoration: "underline",
            textUnderlinePosition: "under",
            paddingleft: 30,
            paddingRight: 30,
            marginLeft: 30,
        },
        grow: {
            flexGrow: 1,
        },
    }
}

function Header({ classes }: Props) {
    const {
        root, title, ir, grow,
    } = classes

    return (
        <div className={root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={title} variant="h1" color="inherit" noWrap>
                        LexImpact
                    </Typography>

                    <div>
                        <Button color="inherit" className={ir}>
                            Impôt sur le revenu
                        </Button>
                    </div>

                    <div className={grow} />

                    <Menu />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default styles |> withStyles |> (_ => _(Header))
