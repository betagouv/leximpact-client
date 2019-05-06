const next = require("next")
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const path = require("path")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev })
const handle = app.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 9001

async function start() {
    await app.prepare()

    const server = (
        express()
        |> (_ => _.use(bodyParser.json()))
        |> (_ => _.use(bodyParser.urlencoded({ extended: false })))
        |> (_ => _.use(cookieParser()))
        |> (_ => _.use("/", express.static(path.join(__dirname, "public"))))
        |> (_ => _.get("*", (req, res) => handle(req, res)))
        |> (_ => _.listen(port))
    )

    return server
}

start()
