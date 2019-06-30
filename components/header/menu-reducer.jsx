/* @flow */

type AnchorEl =
    | HTMLButtonElement
    | false

type State = {
    +isOpen: boolean,
    +anchorEl?: AnchorEl,
}

type Action = {
    +type: string,
    +anchorEl?: AnchorEl,
}

const initialState: State = {
    isOpen: false,
}

function open(anchorEl?: AnchorEl = false): Action {
    return {
        type: "header/menu/open",
        anchorEl,
    }
}

function close(): Action {
    return { type: "header/menu/close" }
}

function reducer(state: State, { type, anchorEl }: Action): State {
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
