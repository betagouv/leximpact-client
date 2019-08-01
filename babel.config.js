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
function babelConfig(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
          browsers: ["> 1%", "last 4 versions"],
          node: 8,
        },
      },
    ],
    ["next/babel"],
  ];

  const plugins = [
    ["@babel/plugin-proposal-pipeline-operator", { proposal: "minimal" }],
    ["lodash"],
    [
      "module-resolver",
      {
        alias: {
          components: "./components",
          lib: "./lib",
          pages: "./pages",
          styles: "./styles",
        },
      },
    ],
    ["wrap-in-js", { extensions: ["scss$"] }],
  ];

  return {
    presets,
    plugins,
  };
}

module.exports = babelConfig;
