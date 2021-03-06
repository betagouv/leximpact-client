// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require("autoprefixer");

const postcssConfig = {
  plugins: [
    autoprefixer({
      browsers: ["> 1%", "last 4 versions"],
      flexbox: true,
    }),
  ],
};

module.exports = postcssConfig;
