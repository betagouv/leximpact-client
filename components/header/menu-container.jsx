/* @flow */

import React, { useReducer, type Node } from "react"
import { flow } from "lodash/fp"
import Menu from "components/header/menu"
import Login from "components/header/login"
import Signup from "components/header/signup"
import {
    open,
    close,
    reducer,
    initialState,
} from "components/header/menu-reducer"

function MenuContainer(): Node {
    const [state, dispatch] = useReducer(reducer, initialState())

    function openMenu({ currentTarget }: SyntheticEvent<HTMLButtonElement>): void {
        return flow([open, dispatch])(currentTarget)
    }

    function closeMenu(): void {
        return dispatch(close())
    }

    return (
        <Menu state={state} actions={{ openMenu, closeMenu }}>
            <Login />
            <Signup />
        </Menu>
    )
}

export default MenuContainer
