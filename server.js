const next = require("next")
const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const path = require("path")

const dev = process.env.NODE_ENV !== "production"
const app = next({ dev, dir: "./app" })
const handle = app.getRequestHandler()
const port = parseInt(process.env.PORT, 10) || 9001

async function start() {
    await app.prepare()

    const server = express()

    server.use(bodyParser.json())
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(cookieParser())
    server.use("/", express.static(path.join(__dirname, "public")))
    server.get("*", (req, res) => handle(req, res))
    server.listen(port)

    return server
}

start()
