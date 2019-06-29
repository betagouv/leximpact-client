/* eslint-disable fp/no-nil */

import { create } from "react-test-renderer"
import Login from "components/header/login"

test("Login renders correctly", () => {
    const renderer = create(<Login />)
    const instance = renderer.root
    const [text] = instance.findByType("p").children

    expect(text).toEqual("Connexion")
})
