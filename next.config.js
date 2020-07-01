const env = process.env.NODE_ENV;
const withImages = require("next-images");
const DotenvPlugin = require("dotenv-webpack");
const { assign, concat } = require("lodash/fp");
// eslint-disable-next-line import/no-extraneous-dependencies
const { EnvironmentPlugin } = require("webpack");

const nextConfig = {
  distDir: "build",
  webpack: (webpackConfig) => {
    const isProductionEnvironment = env === "production";
    const envPlugin = !isProductionEnvironment
      ? new DotenvPlugin()
      : new EnvironmentPlugin(process.env);
    const plugins = concat(webpackConfig.plugins, [envPlugin]);
    return assign(webpackConfig, { plugins });
  },
};

module.exports = withImages(nextConfig);
