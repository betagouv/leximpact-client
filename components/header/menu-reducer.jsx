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
            open: true,
            anchorEl,
        }
    }

    if (type === close().type) {
        return { open: false }
    }

    return state
}

function initialState() {
    return { open: false }
}

export {
    open, close, reducer, initialState,
}
