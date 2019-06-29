/* eslint-disable fp/no-nil */

import { render } from "enzyme"
import Links from "components/header/links"

test("Links renders correctly", () => {
    const component = render(<Links />)
    const text = "Impôt sur le revenu"

    expect(component.text()).toContain(text)
})
