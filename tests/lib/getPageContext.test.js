/* eslint-env jest */

import getPageContext from "./../../lib/getPageContext"

test("it works", () => {
    const pageContext = getPageContext()
    return expect(pageContext).toBe(3)
})
