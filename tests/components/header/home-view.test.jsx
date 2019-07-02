/* eslint-disable fp/no-nil */

import { shallow } from "enzyme"
import Home from "components/header/home-view"

test("Home renders correctly", () => {
    const component = shallow(<Home />)
    const element = "LexImpact"

    expect(component.contains(element)).toBe(true)
})
