import { useReducer } from "react"
import { flow } from "lodash/fp"
import Menu from "components/header/menu-view"
import Login from "components/header/login-view"
import Signup from "components/header/signup-view"
import Contact from "components/header/contact"
import reducer, { initialState, open, close } from "components/header/menu-reducer"

function MenuContainer() {
    const [state, dispatch] = useReducer(reducer, initialState)

    function openMenu({ currentTarget }) {
        return flow([open, dispatch])(currentTarget)
    }

    function closeMenu() {
        return dispatch(close())
    }

    return (
        <Menu state={state} actions={{ openMenu, closeMenu }}>
            <Contact />
            <Login />
            <Signup />
        </Menu>
    )
}

export default MenuContainer
