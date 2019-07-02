const initialState: State = {
    isOpen: false,
}

function open(anchorEl = false) {
    return {
        type: "header/menu/open",
        anchorEl,
    }
}

function close() {
    return { type: "header/menu/close" }
}

function reducer(state, { type, anchorEl }) {
    if (type === open().type) {
        return {
            isOpen: true,
            anchorEl,
        }
    }

    if (type === close().type) {
        return initialState
    }

    return state
}

export default reducer
export { initialState, open, close }
