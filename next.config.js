const withTranspileModules = require("next-transpile-modules")
const withTypescript = require("@zeit/next-typescript")
const withSass = require("@zeit/next-sass")
const withImages = require('next-images');

const _ = require("lodash")

const config = {
    exportPathMap() {
        return {
            "/": { page: "/" },
        }
    },
    distDir: "build",
    transpileModules: ["@iconify/react"],
}

module.exports = _.flow([withTranspileModules, withTypescript, withSass,withImages])(config)
