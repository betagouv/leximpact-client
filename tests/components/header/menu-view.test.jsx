/* eslint-disable fp/no-nil */

import { shallow } from "enzyme"
import Menu from "components/header/menu-view"

test("Menu renders correctly", () => {
    const state = { isOpen: false, anchorEl: false }
    const actions = { openMenu: () => {}, closeMenu: () => {} }

    const child1 = <div>Smoke!</div>
    const child2 = <div>Drink!</div>
    const child3 = <div>Dance!</div>

    const component = shallow(
        <Menu state={state} actions={actions}>
            {child1}
            {child2}
            {child3}
        </Menu>,
    )

    expect(component.contains(child1)).toBe(true)
    expect(component.contains(child2)).toBe(true)
    expect(component.contains(child3)).toBe(true)
})
