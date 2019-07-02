import { useEffect } from "react"
import { ThemeProvider, StylesProvider } from "@material-ui/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import theme from "styles/theme"

function removeStyles() {
    const jssStyles = document.querySelector("#jss-server-side")

    if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles)
    }

    return jssStyles
}

function App({ Component, pageProps }) {
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
