/* @flow */

import React, { type ComponentType, type Node } from "react"
import { ServerStyleSheets } from "@material-ui/styles"
import flush from "styled-jsx/server"
import theme from "styles/theme"
import Document, {
    Head,
    Main,
    NextScript,
    type DocumentComponentContext as Context,
} from "next/document"

type Sheets = {
    +collect: Function,
    +getStyleElement: Function,
}

type Props = { +Component: Node }
type Component = ComponentType<Props>
type WithStyles = Component => Props => Component
type InitialProps = Promise<{ +styles: Node }>

function withStyles(sheets: Sheets): WithStyles {
    return App => props => sheets.collect(<App {...props} />)
}

function render(): Node {
    return (
        <html lang="fr">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height"
                />
                <meta name="theme-color" content={theme.palette.primary[500]} />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Lato|Lora"
                />
            </Head>

            <body>
                <Main />
                <NextScript />
            </body>
        </html>
    )
}

async function getInitialProps({ renderPage }: Context): InitialProps {
    const sheets: Sheets = new ServerStyleSheets()
    const { html, head } = await renderPage({ enhanceApp: withStyles(sheets) })
    const styles = (
        <>
            {flush()}
            {sheets.getStyleElement()}
        </>
    )

    return { html, head, styles }
}

Document.render = render /* eslint-disable-line fp/no-mutation */
Document.getInitialProps = getInitialProps /* eslint-disable-line fp/no-mutation */

export default Document
