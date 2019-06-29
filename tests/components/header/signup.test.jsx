/* eslint-disable fp/no-nil */

import { shallow } from "enzyme"
import Signup from "components/header/signup"

test("Login renders correctly", () => {
    const component = shallow(<Signup />)
    const element = <p>S’enregistrer</p>

    expect(component.contains(element)).toBe(true)
})
