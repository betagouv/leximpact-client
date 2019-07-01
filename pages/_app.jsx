/* @flow */

import React, { useEffect, type ComponentType, type Node } from "react"
import { ThemeProvider, StylesProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "styles/theme"

type Props = {
    +Component: ComponentType<any>,
    +pageProps?: Object,
}

function removeStyles(): void {
    const jssStyles = document.querySelector("#jss-server-side")

    if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
    }

    return undefined /* eslint-disable-line fp/no-nil */
}

function App({ Component, pageProps }: Props): Node {
    useEffect(removeStyles, [])

    return (
        <ThemeProvider theme={theme}>
            <StylesProvider injectFirst>
                <CssBaseline />
                <Component {...pageProps} />
            </StylesProvider>
        </ThemeProvider>
    )
}

export default App
