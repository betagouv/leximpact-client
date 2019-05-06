import createPageContext from "lib/createPageContext"

let pageContext

export default function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext()
    }

    // Reuse context on the client-side.
    if (!pageContext) {
        pageContext = createPageContext()
    }

    return pageContext
}
