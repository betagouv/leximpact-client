/* eslint
    indent: [2, 2],
    semi: [2, "always"],
    react/jsx-indent: [2, 2],
    react/jsx-indent-props: [2, 2],
    import/order: [2, {
      newlines-between: "always",
      groups: ["builtin", "external", "parent", "sibling", "index"]
    }]
*/
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
