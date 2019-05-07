const withTranspileModules = require("next-transpile-modules")
const withTypescript = require("@zeit/next-typescript")
const withSass = require("@zeit/next-sass")

const config = {
    exportPathMap() {
        return {
            "/": { page: "/" },
        }
    },
    distDir: "build",
}

module.exports = (
    config
    |> (_ => withTranspileModules({ ..._, transpileModules: ["@iconify/react"] }))
    |> withTypescript
    |> withSass
)
