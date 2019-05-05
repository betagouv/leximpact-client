const withPlugins = require("next-compose-plugins")
const withTranspileModules = require("next-transpile-modules")
const withTypescript = require("@zeit/next-typescript")
const withSass = require("@zeit/next-sass")

const pluginsConfig = [
    [withTranspileModules, { transpileModules: ["@iconify/react"] }],
    [withTypescript],
    [withSass],
]

const nextConfig = {
    exportPathMap() {
        return {
            "/": { page: "/" },
        }
    },
    distDir: "build",
}

module.exports = withPlugins(pluginsConfig, nextConfig)
