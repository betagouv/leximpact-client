/* eslint-disable fp/no-nil */

import getPageContext from "lib/getPageContext"

test("when server-side, it creates a page context", async () => {
    const browser = false
    const createPageContext = jest.fn(() => "hey!")
    const pageContext = await getPageContext(browser, createPageContext)

    expect(pageContext).toEqual("hey!")
})

test("when server-side, it creates a page context each time", () => {
    const browser = false
    const createPageContext = jest.fn()

    getPageContext(browser, createPageContext)
    expect(createPageContext.mock.calls.length).toBe(1)

    getPageContext(browser, createPageContext)
    expect(createPageContext.mock.calls.length).toBe(2)
})

test("when client-side, it reuses the page context", () => {
    const browser = true
    const createPageContext = jest.fn(() => "ho!")

    getPageContext(browser, createPageContext)
    getPageContext(browser, createPageContext)
    getPageContext(browser, createPageContext)

    expect(createPageContext.mock.calls.length).toBe(1)
})
