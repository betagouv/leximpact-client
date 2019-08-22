const env = process.env.NODE_ENV;
const withSass = require("@zeit/next-sass");
const withImages = require("next-images");
const DotenvPlugin = require("dotenv-webpack");
const { assign, concat, flow } = require("lodash/fp");
// eslint-disable-next-line import/no-extraneous-dependencies
const { EnvironmentPlugin } = require("webpack");

const nextConfig = {
  distDir: "build",
  exportPathMap: defaults => ({
    ...defaults,
  }),
  webpack: (webpackConfig) => {
    const isProductionEnvironment = env === "production";
    const envPlugin = !isProductionEnvironment
      ? new DotenvPlugin()
      : new EnvironmentPlugin(process.env);
    const plugins = concat(webpackConfig.plugins, [envPlugin]);
    return assign(webpackConfig, { plugins });
  },
};

module.exports = flow([withSass, withImages])(nextConfig);
