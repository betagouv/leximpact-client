import { assign, isEmpty } from "lodash/fp"
import { createStore } from "redux"

function hasPageContext(state) {
    return !isEmpty(state) && state.pageContext
}

function pageContext(state = {}, { callback }) {
    if (!callback) {
        return state
    }

    return assign(state, { pageContext: callback() })
}

const { dispatch, getState } = createStore(pageContext, {})

function handleServerSide(callback) {
    return {
        type: "server-side",
        callback,
    }
}

function handleClientSide(callback) {
    return {
        type: "client-side",
        callback,
    }
}

function getPageContext(browser, createPageContext) {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!browser) {
        dispatch(handleServerSide(createPageContext))
    }

    // Reuse context on the client-side.
    if (browser && !hasPageContext(getState())) {
        dispatch(handleClientSide(createPageContext))
    }

    return getState().pageContext
}

export default getPageContext
