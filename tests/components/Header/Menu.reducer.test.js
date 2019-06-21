/* eslint-disable fp/no-nil */

import { open, close, reducer } from "components/Header/Menu.reducer"

describe("reducer", () => {
    it("when passed open(), state is set to open", () => {
        const anchorEl = "div"
        const state = reducer([], open(anchorEl))
        expect(state.open).toEqual(true)
        expect(state.anchorEl).toEqual(anchorEl)
    })

    it("when passed close(), state is set to closed", () => {
        const state = reducer([], close())
        expect(state.open).toEqual(false)
    })
})
