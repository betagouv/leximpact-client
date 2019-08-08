/* eslint
  indent: [2, 2],
  semi: [2, "always"],
  react/jsx-indent: [2, 2,{indentLogicalExpressions: false}],
  react/jsx-indent-props: [2, 2],
  import/order: [2, {
    newlines-between: "always",
    groups: ["builtin", "external", "parent", "sibling", "index"]
  }]
*/
const env = process.env.NODE_ENV;
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const DotenvPlugin = require("dotenv-webpack");
const { assign, concat, flow } = require("lodash/fp");
// eslint-disable-next-line import/no-extraneous-dependencies
const { EnvironmentPlugin } = require("webpack");

function envPlugin() {
  if (env === "production") {
    return new EnvironmentPlugin(process.env);
  }

  return new DotenvPlugin();
}

const nextConfig = {
  exportPathMap() {
    return {
      "/": { page: "/" },
      "/en-savoir-plus": { page: "/", query: { showPopin: "en-savoir-plus" } },
      "/nos-conditions-d-utilisation": { page: "/", query: { showPopin: "nos-conditions-d-utilisation" } },
    };
  },
  webpack(webpackConfig) {
    const plugins = concat(webpackConfig.plugins, [envPlugin()]);
    return assign(webpackConfig, { plugins });
  },
  distDir: "build",
};

module.exports = flow([withSass, withImages])(nextConfig);
