import React from "react"
import Head from "next/head"
import Header from "components/header/header-container"
import Reformeur from "components/reformeur/reformeur-container"
import "styles/global.scss"

function Index() {
    return (
        <>
            <Header />
            <Head>
                <title>LexImpact</title>
            </Head>
            <Reformeur />
        </>
    )
}

export default Index
