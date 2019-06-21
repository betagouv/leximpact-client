import Breakpoint, { BreakpointProvider } from "react-socks"
import {
    open,
    close,
    reducer,
    initialState,
} from "components/header/menu-reducer"
import { useReducer } from "react"
import { withStyles } from "@material-ui/core/styles"
import MaterialMenu from "@material-ui/core/Menu"
import MaterialMoreIcon from "@material-ui/icons/MoreVert"
import MaterialMenuItem from "@material-ui/core/MenuItem"
import MaterialIconButton from "@material-ui/core/IconButton"
import Login from "components/header/login-pure"
import Signup from "components/header/signup-pure"

type Props = {
    classes: Object,
}

function styles() {
    return {
        root: {
            display: "flex",
        },
    }
}

function Menu({ classes }: Props) {
    const { root } = classes
    const [state, dispatch] = useReducer(reducer, initialState)
    const { open: isOpen, anchorEl } = state

    function openMenu({ currentTarget }) {
        return currentTarget |> open |> dispatch
    }

    function closeMenu() {
        return dispatch(close())
    }

    return (
        <BreakpointProvider>
            <Breakpoint medium up>
                <div className={root}>
                    <Login />
                    <Signup />
                </div>
            </Breakpoint>
            <Breakpoint small down>
                <div className={root}>
                    <MaterialIconButton
                        aria-owns={isOpen && "material-appbar"}
                        aria-haspopup="true"
                        onClick={openMenu}
                        color="inherit"
                    >
                        <MaterialMoreIcon />
                    </MaterialIconButton>
                    <MaterialMenu
                        anchorEl={anchorEl}
                        open={isOpen}
                        onClose={closeMenu}
                    >
                        <MaterialMenuItem onClick={closeMenu}>
                            <Login />
                        </MaterialMenuItem>
                        <MaterialMenuItem onClick={closeMenu}>
                            <Signup />
                        </MaterialMenuItem>
                    </MaterialMenu>
                </div>
            </Breakpoint>
        </BreakpointProvider>
    )
}

export default styles |> withStyles |> (_ => _(Menu))
