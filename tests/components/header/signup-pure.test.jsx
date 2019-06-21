/* eslint-disable fp/no-nil */

import { create } from "react-test-renderer"
import Signup from "components/header/signup-pure"

test("Signup renders correctly", () => {
    const renderer = create(<Signup />)
    const instance = renderer.root
    const [text] = instance.findByType("p").children

    expect(text).toEqual("S’enregistrer")
})
