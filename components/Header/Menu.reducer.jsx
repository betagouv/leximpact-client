function open(anchorEl = false) {
    return {
        type: "Header/Menu/open",
        anchorEl,
    }
}

function close() {
    return { type: "Header/Menu/close" }
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

export { open, close, reducer }
