// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require("autoprefixer");

const postcssConfig = {
  plugins: [
    autoprefixer({
      flexbox: true,
    }),
  ],
};

module.exports = postcssConfig;
