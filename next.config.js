const env = process.env.NODE_ENV
const withSass = require("@zeit/next-sass")
const DotenvPlugin = require("dotenv-webpack")
const { EnvironmentPlugin } = require("webpack") // eslint-disable-line import/no-extraneous-dependencies
const { assign, concat } = require("lodash/fp")

function envPlugin() {
    if (env === "production") {
        return new EnvironmentPlugin(process.env)
    }

    return new DotenvPlugin()
}

const nextConfig = {
    exportPathMap() {
        return {
            "/": { page: "/" },
        }
    },
    webpack(webpackConfig) {
        const plugins = concat(webpackConfig.plugins, [envPlugin()])
        return assign(webpackConfig, { plugins })
    },
    distDir: "build",
}

module.exports = withSass(nextConfig)
