function babelConfig(api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        targets: {
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
    plugins,
    presets,
  };
}

module.exports = babelConfig;
