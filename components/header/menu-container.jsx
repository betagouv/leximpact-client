import {
    open,
    close,
    reducer,
    initialState,
} from "components/header/menu-reducer"
import { useReducer } from "react"
import { withStyles } from "@material-ui/core/styles"
import Menu from "components/header/menu"
import Login from "components/header/login"
import Signup from "components/header/signup"

type Props = {
    classes: Object,
}

function styles() {
    return {
        menu: {
            display: "flex",
        },
    }
}

function MenuContainer({ classes }: Props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { open: isOpen, anchorEl } = state

    function openMenu({ currentTarget }) {
        return currentTarget |> open |> dispatch
    }

    function closeMenu() {
        return dispatch(close())
    }

    return (
        <Menu
            classes={classes}
            state={{ isOpen, anchorEl }}
            actions={[openMenu, closeMenu]}
        >
            <Login />
            <Signup />
        </Menu>
    )
}

export default styles |> withStyles |> (_ => _(MenuContainer))
