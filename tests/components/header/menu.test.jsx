/* eslint-disable fp/no-nil */

import { shallow } from "enzyme"
import Menu from "components/header/menu"

test("Menu renders correctly", () => {
    const classes = { menu: false }
    const state = { open: false, anchorEl: false }
    const actions = [() => {}, () => {}]

    const child1 = <div>Smoke!</div>
    const child2 = <div>Drink!</div>
    const child3 = <div>Dance!</div>

    const component = shallow(
        <Menu
            classes={classes}
            state={state}
            actions={actions}
        >
            {child1}
            {child2}
            {child3}
        </Menu>,
    )

    expect(component.contains(child1)).toBe(true)
    expect(component.contains(child2)).toBe(true)
    expect(component.contains(child3)).toBe(true)
})
