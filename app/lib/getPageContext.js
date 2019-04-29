import { SheetsRegistry } from "jss"
import { createMuiTheme } from "@material-ui/core/styles"
import { createGenerateClassName } from "@material-ui/core/styles"

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: [
            "Comic Sans",
        ],
    },
    palette: {
        primary: {
        // light: will be calculated from palette.primary.main,
            main: "#ff4400",
        // dark: will be calculated from palette.primary.main,
        // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            light: "#0066ff",
            main: "#0044ff",
            // dark: will be calculated from palette.secondary.main,
            contrastText: "#ffcc00",
        },
    },
})

function createPageContext() {
    return {
        theme,
        // This is needed in order to deduplicate the injection of CSS in the page.
        sheetsManager: new Map(),
        // This is needed in order to inject the critical CSS.
        sheetsRegistry: new SheetsRegistry(),
        // The standard class name generator.
        generateClassName: createGenerateClassName(),
    }
}

export default function getPageContext() {
    // Make sure to create a new context for every server-side request so that data
    // isn't shared between connections (which would be bad).
    if (!process.browser) {
        return createPageContext()
    }

    // Reuse context on the client-side.
    if (!global.__INIT_MATERIAL_UI__) {
        global.__INIT_MATERIAL_UI__ = createPageContext()
    }

    return global.__INIT_MATERIAL_UI__
}
