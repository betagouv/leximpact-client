/* eslint-disable fp/no-nil */

import reducer, { open, close } from "components/header/menu-reducer"

describe("reducer", () => {
    it("when passed open(), state is set to open", () => {
        const anchorEl = "div"
        const state = reducer([], open(anchorEl))
        expect(state.isOpen).toEqual(true)
        expect(state.anchorEl).toEqual(anchorEl)
    })

    it("when passed close(), state is set to closed", () => {
        const state = reducer([], close())
        expect(state.isOpen).toEqual(false)
    })
})
