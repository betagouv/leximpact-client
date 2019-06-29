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
        header: {
            width: "100%",
        },
        header__title: {
            display: "none",
            [theme.breakpoints.up("sm")]: {
                display: "block",
            },
        },
        header__button: {
            fontSize: "16px",
            fontWeight: "light",
            textTransform: "uppercase",
            textDecoration: "underline",
            textUnderlinePosition: "under",
            paddingleft: 30,
            paddingRight: 30,
            marginLeft: 30,
        },
        header__space: {
            flexGrow: 1,
        },
    }
}

function HeaderContainer({ classes }: Props) {
    return (
        <div className={classes.header}>
            <AppBar position="static">
                <Toolbar>
                    <Typography className={classes.header__title} variant="h1" color="inherit" noWrap>
                        LexImpact
                    </Typography>

                    <div>
                        <Button color="inherit" className={classes.header__button}>
                            Impôt sur le revenu
                        </Button>
                    </div>

                    <div className={classes.header__space} />

                    <Menu />
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default styles |> withStyles |> (_ => _(HeaderContainer))
