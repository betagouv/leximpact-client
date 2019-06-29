/* eslint-disable fp/no-nil */

import { shallow } from "enzyme"
import Login from "components/header/login"

test("Login renders correctly", () => {
    const component = shallow(<Login />)
    const element = <p>Connexion</p>

    expect(component.contains(element)).toBe(true)
})
