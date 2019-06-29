/* eslint-disable fp/no-nil */

import { create } from "react-test-renderer"
import Menu from "components/header/menu"

test("Menu renders correctly", () => {
    const classes = { menu: false }
    const state = { open: false, anchorEl: false }
    const actions = [() => {}, () => {}]

    const renderer = create(
        <Menu
            classes={classes}
            state={state}
            actions={actions}
        >
            <div className="smoke">Smoke!</div>
            <div className="drink">Drink!</div>
            <div className="dance">Dance!</div>
        </Menu>,
    )

    const instance = renderer.root
    const [text] = instance.findByProps({ className: "dance" }).children

    expect(text).toEqual("Dance!")
})
