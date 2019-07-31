/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    max-nested-callbacks: [2, { "max": 4 }],
    react/jsx-closing-bracket-location: [2, {
        "nonEmpty": false,
        "selfClosing": false
    }],
    "jsx-a11y/anchor-is-valid": [2, {
      "components": ["Link"],
      "specialLink": ["hrefLeft", "hrefRight"]
    }],
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

const { internalStaticNextJSRoutes } = require("./routes");

const nextConfig = {
  exportPathMap: defaults => ({
    ...defaults,
    ...internalStaticNextJSRoutes,
  }),
  webpack: (webpackConfig) => {
    const isProductionEnvironment = env === "production";
    const envPlugin = !isProductionEnvironment
      ? new DotenvPlugin()
      : new EnvironmentPlugin(process.env);
    const plugins = concat(webpackConfig.plugins, [envPlugin]);
    return assign(webpackConfig, { plugins });
  },
  distDir: "build",
};

module.exports = flow([withSass, withImages])(nextConfig);
